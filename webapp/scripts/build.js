// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable no-console */

const chalk = require('chalk');
const concurrently = require('concurrently');

const {getPlatformCommands} = require('./utils.js');

async function buildAll() {
    console.log(chalk.inverse.bold('Building subpackages...') + '\n');

    try {
        const {result} = concurrently(
            getPlatformCommands('build'),
            {
                killOthers: 'failure',
            },
        );

        await result;
    } catch (e) {
        console.error(chalk.inverse.bold.red('Failed to build subpackages'), e);
        return;
    }

    console.log('\n' + chalk.inverse.bold('Subpackages built! Building web app...') + '\n');

    // It's not necessary to run these commands through concurrently, but it makes the output consistent

    try {
        const {result} = concurrently([
            {command: 'npm:build --workspace=channels', name: 'webapp', prefixColor: 'cyan'},
        ]);
        await result;
    } catch (e) {
        console.error(chalk.inverse.bold.red('Failed to build web app'), e);
        return;
    }

    console.log('\n' + chalk.inverse.bold('Web app built! '));
}

buildAll();
