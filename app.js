'use strict';

const Readline = require('readline');
const rl = Readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

rl.setPrompt('foster >');