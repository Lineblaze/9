/* Задание 1 */
console.log("Задание 1");
let user = {
    group: "201-321",
    last_name: "Кочанов",
    first_name: "Роман"
};
let property="Список свойств: ";
let i=0;
for (key in user) {
    i++
}
let j=0;
for (key in user) {
    j++
    if (j != i) {
        property += key +", "
    }
    else {
        property += key
    }
}
let message = "Cтудент " + user.first_name + " " + user.last_name + " учиться в " + user.group + " группе";
console.log(property)
console.log(message);
console.log('\n')

/* Задание 2 */
console.log("Задание 2"); 
let arr = [1, 2, 3, 4, 5]; 
let len = arr.length;
for (let i = 0; i < len; i++) {
    let lastItem = arr.pop();
    if (i!=len-1) {
        console.log(lastItem+ " осталось ["+arr+"]")
    }
    else {
        console.log(lastItem)
    }
}   
console.log('\n')

/* Задание 3 */
console.log("Задание 3"); 
palindrome(prompt("Введите слово"))
function palindrome(word) {
let arr = [];
arr = word.split('');
let arr_cont = "";
for (let i = arr.length - 1; i >= 0; i--) {
    arr_cont = arr_cont + arr[i];
}
if (arr_cont == word) {
    console.log("True");
}
else {
    console.log("False");
}
}
console.log('\n')

/* Задание 4 */
console.log("Задание 4"); 
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const multMatrix = (m, mat) => {
let x = mat[0].length;   
let y = mat[0][0].length;
for(let row of mat) {
    for(let n in row) {
        row[n] *= m;            
    }
}
console.log('Матрица, умноженная на ', m);
for(let row of mat) {
    console.log(row.join(', '));
}
}
multMatrix(10, matrix);
console.log('\n')