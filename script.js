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
