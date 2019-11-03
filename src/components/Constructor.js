

// 1. Constructor

function Dog (name, age) {
    this.age = age;
    this.name = name;
    this.walk = () => console.log('walking...')
} 


const charlie = new Dog('charlie', 2); // Js engine will bind this in Dog constructor to 
                                       // the new object charlie

charlie.walk();

// Factory mode. need to return an object or function
function createDog (name, age) {
    return {
        name,
        age,
        walk: ()=> console.log('walking')
    }
}

const lala = createDog('lala',3)
lala.walk();
console.log(lala.name)
