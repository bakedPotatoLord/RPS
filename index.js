const readline = require('readline');
const figlet = require('figlet');
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var temp;
var compChoice;


figlet('Welcome to :', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.cyan(data))
});

figlet('rock paper scisors', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.cyan(data))
});

setTimeout(()=>{
    rl.question(chalk.cyan('What is your name? '), function (name) {

        rl.question(chalk.cyan("\nwhat do you choose? ('r','p',or's'):  "), function (choice) {
            compChoice= getChoice();

            console.log(chalk.cyan(`\nYou chose ${lName(choice)}`))
            console.log(chalk.cyan(`The computer chose ${lName(compChoice)}`))

            if(checkWin(choice,compChoice) == 'win'){
                console.log(chalk.green(`Congrats ${name}, you win`))
            }else if(checkWin(choice,compChoice) == 'loss'){
                console.log(chalk.red(`Sorry ${name}, you lose`))
            }else if(checkWin(choice,compChoice) == 'draw'){
                console.log(chalk.yellow(`Nice job ${name}, you drew the computer`))
            }

            console.log('\nbye!');
            process.exit(0);

        });
    });

},100)

rl.on('close', function () {
    console.log('\nbye!');
    process.exit(0);
});

function getChoice(){
    temp = Math.floor(Math.random*3)
    if(temp == 0){
        return 'r'
    }else if(temp == 1){
        return 'p'
    }else{
        return 's'
    }
}

function checkWin(me,opp){
    if(me == opp){
        return 'draw'
    }else if((me == 'r' && opp=='s')||(me == 'p' && opp=='r')||(me == 's' && opp=='p')){
        return 'win'
    }else{
        return 'loss'
    }
}

function lName(short){
    if(short == 'r'){
        return 'rock'
    }else if(short == 'p'){
        return 'paper'
    }else if(short == 's'){
        return 'scisors'
    }else{
        throw new Error('choose a valid object')
    }
}
