'use strict';
const user = {}
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);
console.log(user.name);
//Да, мы можем менять данныe внутри объекта который объявлен через const
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);