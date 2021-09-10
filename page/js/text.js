let pizzaStats = [
    {
        ingridients: 'Соус белый, колбаса п/к, кукурузы, помидоры, маслины, индейка сыр.',
        price: '39000 сум'
    }
];

let ingridients = document.querySelectorAll('.ingridients');
let price = document.querySelectorAll('.price');

for(let i = 0; ingridients.length > 0; i++){
    price[i].textContent = pizzaStats[0].price;
    ingridients[i].textContent = pizzaStats[0].ingridients;
}


