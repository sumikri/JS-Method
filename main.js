function getName(name) {
    return name;
}

let a = true;
let b = true;

console.log(a && getName("Ram"));
console.log(a || getName("Ram"));

// Template literals

let name1 = "John";

let name2 = "Doe";

console.log(name1 + " " + name2, `${name1} ${name2}`);


// Ternary operator

const showRecipeOne = true;
function getRecipieOneName(recipeName){
    return recipeName
}
function getRecipieTwoName(recipeName){
    return recipeName
}

if(showRecipeOne){
    console.log(getRecipieOneName("Pizza"));
    return recipeName

}else{
    console.log(getRecipieTwoName("Burger"));
    return recipeName

}

//condition ? statement 1 : statement 2


showRecipeOne 
? console.log(getRecipieOneName("Pizza"))
:console.log(getRecipieTwoName("Burger"));


const id = 1;
const productName = "Product Apple Watch";
const rating = 5;


const Product = {
    id,
    productName,
    rating,
}
console.log(Product);


const Product 2 ={
    description:'Product 2 description',
    id,
    productName,
    rating
}

//const getProductTwoDescription = product2.description;
//console.log(getProductTwoDescription);
const {description} = product2;
console.log(description);


const array = [1,2,3];
let getArrayFirstValue = array[0];
let getArraySecondValue = array[1];
console.log(getArrayFirstValue,getArraySecondValue);

const [arrayFirstElement, arraySecondElement, arrayThirdElement] = array;
console.log(arrayFirstElement,arraySecondElement, arrayThirdElement);


// default parameters, spread and rest operators