import inquirer from "inquirer";
let input1 = await inquirer.prompt({
    name : "num_1",
    type : "number",
    message : "Enter your first number",
})
let input2 = await inquirer.prompt({
    name : "num_2",
    type : "number",
    message : "Enter your Second number",
})
let total :number = input1.num_1 + input2.num_2
console.log(total);

