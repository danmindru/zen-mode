#!/usr/bin/env node

const gradient = require('gradient-string');
const chalk = require('chalk');

const zenArt = `
          .::::.
        .::::::::.
        :::::::::::
      ':::::::::::..
      ::::::::::::'
        ':::::::'
          '::'
    ⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿    ⣿⣿    ⣿⣿⣿
  ⣿⣿⣿    ⣿⣿    ⣿⣿⣿
    ⣿⣿     ⣿⣿     ⣿⣿
    ⣿⣿     ⣿⣿     ⣿⣿
    ⣿⣿    ⣿⣿    ⣿⣿
      ⣿    ⣿⣿⣿    ⣿
          ⣿⣿⣿⣿
          ⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿  ⣿⣿⣿
`;

const message = `${gradient.rainbow(zenArt)}
${gradient.rainbow('Zen mode is one-shotting a website to prod with SEO, blog and a beautiful responsive layout.')}

Enter zen mode on ${chalk.underline('https://pageai.pro')}
`

console.log(message);

