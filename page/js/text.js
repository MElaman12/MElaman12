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
        price: 15000
    },
    {
        name: 'Азия',
        storage: '0.5',
        price: 18000
    },
    {
        name: 'Смак',
        storage: '1л',
        price: 12000
    },
]

let saladTitle = document.querySelector('.salad-menu .salads .first-salad .title');


for(let i = 0; saladStats.length > 0; i++){
    saladTitle.textContent = saladStats[0].name;
};

// ------
let ingridients = document.querySelectorAll('.ingridients');
let price = document.querySelectorAll('.price');

for(let i = 0; ingridients.length > 0; i++){
    price[i].textContent = pizzaStats[0].price;
    ingridients[i].textContent = pizzaStats[0].ingridients;
}


