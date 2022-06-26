import { execa } from 'execa';
import { mkdir as fsMkdir, appendFile as fsAppendFile } from 'fs/promises';
import { resolve } from 'path';

/**
 * @param {string} directory
 * @param {string[]} toolkitArgs 
 */
export const initCdk = async (directory, toolkitArgs) => {
    await exec(
        '💔 An error has occurred when installing CDK.',
        'npx', ['aws-cdk', 'init', 'app'].concat(toolkitArgs),
        directory
    );
    await exec(
        '💔 An error has occurred when installing \'@aws-cdk/aws-appsync-alpha\'',
        'npm', ['install', '@aws-cdk/aws-appsync-alpha'],
        directory
    );
}

/**
 * @param {string} directory
 * @param {string[]} toolkitArgs 
 */
export const initSst = async (directory, toolkitArgs = []) => {
    if (
        toolkitArgs.length === 0 ||
        toolkitArgs[toolkitArgs.length - 1] !== directory
    ) {
        toolkitArgs.push(directory);
    }
    await exec(
        '💔 An error has occurred when installing SST.',
        'npx', ['create-sst'].concat(toolkitArgs)
    );
    await exec(
        '💔 An error has occurred when installing SST.',
        'npm', ['install'],
        directory
    );
    // @aws-cdk/aws-appsync-alpha should be already installed by SST,
    // but it is a @serverless-stack/resources dependency. Let's install it
    // as a root dependency to help npm notice that the required
    // @aws-cdk/aws-appsync-alpha peer dependency is installed.
    await exec(
        '💔 An error has occurred when installing \'@aws-cdk/aws-appsync-alpha\'',
        'npm', ['exec', '--package=@serverless-stack/cli', 'sst', 'add-cdk', '@aws-cdk/aws-appsync-alpha'],
        directory
    );
}

/**
 * @param {string} directory
 * @param {boolean} installSst
 */
export const initButler = async (directory, installSst = false) => {
    await exec(
        '💔 An error has occurred when installing \'@appsync-butler/core\'.',
        'npm', ['install', '@appsync-butler/core'].concat(installSst ? ['@appsync-butler/sst'] : []),
        directory
    );
    try {
        await mkdir(
            `${directory}/vtl`,
            `${directory}/vtl/resolvers`,
            `${directory}/vtl/functions`,
            `${directory}/vtl/resolvers/Query`,
            `${directory}/vtl/resolvers/Mutation`,
            `${directory}/graphql`,
        );
        await appendToFile(`${directory}/graphql/index.graphql`, "# TODO: Write GraphQL schema\n");
        console.log("\n✅ AppSync Butler has been installed alongisde your preferred toolkit!");
    } catch (e) {
        console.error("💔 An error has occurred when setting up the butler's directory structure 👇\n");
        console.error(e);
        process.exit(2);
    }
}

/**
 * @param {string} errorMessage 
 * @param {string} file
 * @param {string[]} args
 * @param {string | undefined} cwd
 */
export const exec = async (errorMessage, file, args, cwd) => {
    cwd = cwd ? resolve(cwd) : undefined;
    console.log(`[${cwd || process.env.PWD}]`, '$', file, (args || []).join(' '));
    try {
        const child = execa(file, args, { stdin: 0, cwd });
        child.stdout.pipe(process.stdout);
        child.stderr.pipe(process.stderr);
        const res = await child;
        return res.stdout;
    } catch (e) {
        if (e.signal === 'SIGINT') {
            console.error("\n❌ Aborting. Please rerun me when you're ready!");
        } else {
            console.error(errorMessage);
        }
        process.exit(e.exitCode || 1);
    }
}

export const mkdir = async (...paths) => {
    for (const p of paths) {
        try {
            await fsMkdir(p, 0o755);
            console.log("Directory created:", p);
        } catch (e) {
            if (e.code === 'EEXIST') {
                console.log("Directory already exists:", p);
                return;
            }
            throw e;
        }
    }
}

export const appendToFile = async (path, str) => {
    console.log("Writing to file:", path);
    await fsAppendFile(path, str, { encoding: 'ascii', mode: 0o644 });
}