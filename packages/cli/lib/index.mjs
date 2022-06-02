import { execa } from 'execa';
import { mkdir as fsMkdir, appendFile as fsAppendFile } from 'fs/promises';

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
        toolkitArgs.length === 0 || (
            toolkitArgs.length === 1 &&
            toolkitArgs[0] === '--examples'
        )
    ) {
        toolkitArgs.push('');
    }
    toolkitArgs.push(directory);
    await exec(
        '💔 An error has occurred when installing SST.',
        'npm', ['init', 'sst'].concat(toolkitArgs)
    );
    await exec(
        '💔 An error has occurred when installing SST.',
        'npm', ['install'],
        directory
    );
    // @aws-cdk/aws-appsync-alpha should be already installed by SST
    // await exec(
    //     '💔 An error has occurred when installing \'@aws-cdk/aws-appsync-alpha\'',
    //     'npm', ['exec', '--package=@serverless-stack/cli', 'sst', 'add-cdk', '@aws-cdk/aws-appsync-alpha'],
    //     directory
    // );
}

export const initButler = async () => {
    await exec(
        '💔 An error has occurred when installing \'@appsync-butler/core\'.',
        'npm', ['install', '@appsync-butler/core']
    );
    try {
        await mkdir(
            'vtl',
            'vtl/resolvers',
            'vtl/functions',
            'vtl/resolvers/Query',
            'vtl/resolvers/Mutation',
            'graphql'
        );
        await appendToFile('graphql/index.graphql', "# TODO: Write GraphQL schema\n");
        console.log("\n✅ AppSync Butler has been installed alongisde your preferred toolkit!");
    } catch (e) {
        console.error("💔 An error has occurred when setting up the butler's directory structure 👇\n");
        console.error(e);
        process.exit(2);
    }
}

export const initSstButler = async () => {
    await exec(
        '💔 An error has occurred when installing \'@appsync-butler/sst\'.',
        'npm', ['install', '@appsync-butler/sst']
    );
}

/**
 * @param {string} errorMessage 
 * @param {string} file
 * @param {string[]} args
 * @param {string | undefined} cwd
 */
export const exec = async (errorMessage, file, args, cwd) => {
    console.log('$', file, (args || []).join(' '));
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
            console.log("Creating directory:", p);
            await fsMkdir(p, 0o755);
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