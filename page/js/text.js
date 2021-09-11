let pizzaStats = [
    {
        ingridients: 'Соус белый, колбаса п/к, кукурузы, помидоры, маслины, индейка сыр.',
        price: '39000 сум'
    }
];

let saladStats = [
    {
        name: 'Салат цезарь',
        storage: '1л',
        price: '15000 сум'
    },
    {
        name: 'Азия',
        storage: '0.5',
        price: '18000 сум'
    },
    {
        name: 'Смак',
        storage: '1л',
        price: '12000 сум'
    },
];

let saladTitle = document.querySelector('.salad-name');
let saladPrice = document.querySelector('.first-salad .price')




// ------
let ingridients = document.querySelectorAll('.ingridients');

let price = document.querySelectorAll('.first-pizza .price');

for(let i = 0; saladStats.length > 0; i++){
    price[i].textContent = pizzaStats[0].price
    ingridients[i].textContent = pizzaStats[0].ingridients;
}

saladPrice.innerHTML = saladStats[0].price;


