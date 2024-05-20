import {name, age, alex} from "./vars.js";
let arr_out=0;
let out_1 = document.getElementById('out_one');
let out_2 = document.getElementById('out_two');
let out_3 = document.getElementById('three');
// out_1.innerHTML = alex.name;
// out_2.innerHTML = alex.age;
// out_3.innerHTML = alex.happiness;

arr_out = document.getElementsByClassName('simout');

arr_out[0].innerHTML=alex.name;
arr_out[1].innerHTML=alex.age;
arr_out[2].innerHTML=alex.happiness;