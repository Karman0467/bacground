export {name,age, alex};
let name = "Bob";
let age = 45;

class Person{
    constructor(name, age, happiness){
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }
    ShowPerson(pers, arr) {
        arr[0].innerText = pers.name;
        arr[1].innerText = pers.age;
        arr[2].innerText = pers.happiness;
    }
}
let alex = new Person('Arnold', 45, true);
