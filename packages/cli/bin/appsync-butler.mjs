#!/usr/bin/env node
import { Command, Option } from 'commander';
import inquirer from 'inquirer';
import { readFileSync } from 'fs';
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { mkdir, initCdk, initSst, initButler } from '../lib/index.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const main = new Command('appsync-butler');

main.description('Bootstrap or manage your appsync buttler application')
    .version(JSON.parse(readFileSync(join(__dirname, '../package.json'), 'ascii')).version)

main.command('bootstrap', { isDefault: true })
    .description('Bootstrap an CDK/SST application coupled with AppSync Butler')
    .addOption(new Option('-t, --toolkit <tk>', 'Toolkit to install').choices(['cdk', 'sst', 'none']))
    .addOption(new Option('-d, --directory <dir>', 'Directory to setup the application in'))
    .argument(
        '[-- TOOLKIT_ARGS...]',
        'Arguments to pass for the underlying toolkit init command. ' +
        'Make sure to pass the args after -- E.g. -t cdk -- --language=typescript ' +
        'Please do not pass anything here related to the target destination ' +
        'directory, doing so would result in undefined behavior. This can be used ' +
        'to specify the CDK language option or the SST template name.'
    )
    .action(async function (toolkitArgs, opts) {
        const { toolkit } = opts.toolkit ? opts : await inquirer.prompt({
            name: 'toolkit',
            type: 'list',
            choices: [
                { value: 'cdk', name: 'AWS Cloud Development Kit (CDK)' },
                { value: 'sst', name: 'Serverless Stack Toolkit (SST)' },
                { value: 'none', name: 'None' }
            ],
            default: 'cdk',
            message: "Please select your preferred toolkit"
        });
        const { directory } = opts.directory ? opts : await inquirer.prompt({
            name: 'directory',
            type: 'input',
            default: '.',
            message: "Target destination directory (defaults to current dir)"
        });
        if (directory !== '.') {
            await mkdir(directory);
        }
        switch (toolkit) {
            case 'sst':
                await initSst(directory, toolkitArgs);
                await initButler(directory, true);
                break;
            case 'cdk':
                await initCdk(directory, toolkitArgs);
                await initButler(directory, false);
                break;
            case 'none':
                break;
        }
    });

main.parse();