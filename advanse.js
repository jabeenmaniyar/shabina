import name, {add,multiply} from "./calculator.js"
const product = {
    name: "laptop",
price: 25500,
brand: "mackbook",
details:function(){
    return `${this.brand} ${this.name} costs ${this.price}`;
},
};
console.log(product.details());

class Person {
    constructor(name, age,address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    greet() {
        console.log(`my name is ${this.name}`);
        console.log(`my age is ${this.age}`);
        console.log(`my address is ${this.address}`)
    }
}

 const JABEEN = new Person("JABEEN",19,"savanur");
 JABEEN.greet();

 class Student extends Person {
    constructor(name,age,college,degree){
        super(name,age);
        this.college = college;
        this.degree = degree;
    }
 }
const JABEEN = new Student("jabeen",19,"gh clg haveri","bca");
 JABEEN greet();
 console.log(john.college);

 console.log(add 1,2);
 console.log(multiply 1,2);
 console.log(name);


async function fetchproducts(){
    try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        console.log(data);
    }catch (error){
        console.log("Error fetching data:", error);
    }
    }
    
    fetchproducts();