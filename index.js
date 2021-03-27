#!/usr/bin/env node
const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

// Clear the console
clear();

const data = {
    name: chalk.bold.green("                        Azhar Ali ⬢"),
    handle: chalk.white("@azhareus"),
    title: chalk.hex('#6495ED')('Flutter and Android developer and a frontend enthusiast.'),
    fact: chalk.hex('#00FFFF')('I love watching anime and learning new things!'),
    email: chalk.hex('#5887FF')('mailto:aali080@fiu.edu'),
    discord: chalk.hex('#44BBA4')('https://discord.com/users/241344157883301891'),
    twitter: chalk.hex('#55C1FF')("https://twitter.com/Azhareus_"),
    github: chalk.hex('#E3DAFF')("https://github.com/azhareus"),
    linkedin: chalk.hex('#f8c471')("https://linkedin.com/in/azhar-the-java-developer"),
    website: chalk.hex('#9FFFCB')("https://azhareus.medium.com"),
    npx: chalk.hex('#06D6A0')("npx azhar-java-san"),

    labelTitle: chalk.hex('#6a8ed2').bold("    Title:"),
    labelFact: chalk.hex('#2bfbaa').bold("     Fun Fact:"),
    labelEmail: chalk.hex('#12c2e9').bold("          Email:"),
    labelDiscord: chalk.hex('#7AE582').bold("        Discord:"),
    labelTwitter: chalk.hex('#28DCD4').bold("        Twitter:"),
    labelGitHub: chalk.hex('#C0BABC').bold("         GitHub:"),
    labelLinkedin: chalk.hex('#F8C537').bold("       LinkedIn:"),
    labelWebsite: chalk.hex('#59FFC8').bold("        Website:"),
    labelCard: chalk.hex('#76e600').bold("                  Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelTitle}  ${data.title}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelEmail}  ${data.email}`,
        `${data.labelDiscord}  ${data.discord}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedin}  ${data.linkedin}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.hex('#08e8de').bold(
            "Yo! I'm Azhar. A 14 Figure Java Developer, "
        )}`,
        `${chalk.hex('#08e8de').bold("Programmer and Mobile Developer from Trinidad, and I love to ")}`,
        `${chalk.hex('#08e8de').bold(
            "learn things, explore and work on them! "
        )}`,
        `${chalk.hex('#08e8de').bold(
            "Toss me an email or a Twitter DM if you want to contact or work!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        padding: 1,
        float: 'center',
        borderStyle: "bold",
        borderColor: "blue"
    }
);

// Show the boxen
console.log(me);

// Show a tip
const tip = [
    `Tip: ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above to open them in your broswer.`,
    '',
].join("\n");
console.log(tip);

// Inquirer prompt
const prompt = inquirer.createPromptModule();

// Prompt questions
const questions = [{
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
        {
            name: `Toss me an ${chalk.blueBright.bold("email")}? 📩`,
            value: () => {
                open("mailto:aali080@fiu.edu");
                console.log("\nLooking forward to hearing your message and replying to you!\n");
            }
        },
        {
            name: `Visit my ${chalk.cyanBright.bold("site")}? 🚀`,
            value: () => {
                open("https://azhareus.medium.com");
                console.log("\nThanks for the visit to my site!\n");
            }
        },
        {
            name: "Exit! 👋",
            value: () => { console.log("👋 See you later! Have a nice day\n"); }
        }
    ]
}];

// Handle prompts
prompt(questions).then(answer => answer.action());

