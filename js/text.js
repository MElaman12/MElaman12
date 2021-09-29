let pizzaStats = [
    {
        ingridients: 'Соус белый, колбаса п/к, кукурузы, помидоры, маслины, индейка сыр.',
        price: '80000 сум'
    }
];

let saladStats = [
    {
        name: 'Салат цезарь',
        storage: '1 л',
        price: '15000 сум'
    },
    {
        name: 'Азия',
        storage: '0.5 л',
        price: '18000 сум'
    },
    {
        name: 'Смак',
        storage: '1 л',
        price: '12000 сум'
    },
];

let drinks = [
    {
        name: 'Coca-cola',
        storage: '1 л',
        price: '8000 сум'
    },
    {
        name: 'Fanta',
        storage: '0.5 л',
        price: '5000 сум'
    },
    {
        name: 'Морс-смородина',
        storage: '1 л',
        price: '12 000 сум'
    }
]

let saladTitle = document.querySelectorAll('.salad-name');
let saladPrice = document.querySelectorAll('.first-salad .price')
let saladStorage = document.querySelectorAll('.first-salad .storage')

// ------

let ingridients = document.querySelectorAll('.ingridients');

let PizzaPrice = document.querySelectorAll('.first-pizza .price');
// 

let drinkName = document.querySelectorAll('.first-drink .drink-name')

let drinkPrice = document.querySelectorAll('.first-drink .price')

let drinkStorage = document.querySelectorAll('.first-drink .storage')

for(let i = 0; i < PizzaPrice.length; i++){
    PizzaPrice[i].textContent = pizzaStats[0].price;

    ingridients[i].textContent = pizzaStats[0].ingridients;
    
    saladPrice[i].textContent = saladStats[i].price;

    saladStorage[i].textContent = saladStats[i].storage;

    saladTitle[i].textContent = saladStats[i].name;

    drinkName[i].textContent = drinks[i].name;
    
    drinkPrice[i].textContent = drinks[i].price;
    
    drinkStorage[i].textContent = drinks[i].storage;
}

