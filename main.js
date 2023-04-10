let result = document.querySelector('.result')
let arr = []

for (let i = 0; i < 5; i++) {
    let question = Number(prompt("write a number"))
    arr.push(question)
}

let sum = 0
for (let numb = 0; numb < arr.length; numb++) {
    sum += arr[numb]
}

result.textContent = arr.join(" + ") + " = " + sum

// let numbrs = document.querySelectorAll('.a');s

// for (let i = 0; i < 5; i++) {
//     numbrs[i].textContent = i + 1;
// }

// let ttextt = document.querySelector('.text');
// let a = prompt('write a text');

// ttextt.textContent = a;

// let withText = document.querySelector('.text')
// let withoutText = document.querySelector('.notext')

// withoutText.textContent = withText.textContent