let price = document.querySelectorAll('.first-pizza .price');
let signBtn = document.querySelector('.sign');
let blurBlock  = document.querySelector('.blur-block')


signBtn.onclick = () => {
    event.preventDefault();
    blurBlock.style.top = '0%'
}

let closeBtn = document.querySelector('.blur-block .close-icon');

closeBtn.onclick = () => {
    blurBlock.style.top = '-100%'
}

let smallPizza = document.querySelectorAll('.small')
let averagePizza = document.querySelectorAll('.average')
let bigPizza = document.querySelectorAll('.big')
let pizzaImg = document.querySelectorAll('.first-pizza img')
let pore = document.querySelectorAll('.pore')

let a = '80px'
let b = '40px'
let c = '0px'

smallPizza[0].onclick = () => {
   PizzaPrice[0].textContent = '35000 сум'
    let width = pizzaImg[0].clientWidth;
    let height = pizzaImg[0].clientHeight;

    let  Interval =  setInterval( () => {
         
      if(price[0].textContent == '35000 сум' && c == pore[0].style.marginBottom || pore[0].style.marginBottom == '' ){
         width--
         height--
         pizzaImg[0].style.width = `${width}px`
         pizzaImg[0].style.height = `${height}px`
         if(width == 140){
            smallPizza[0].style.pointerEvents = 'none';
            averagePizza[0].style.pointerEvents = 'auto';
            bigPizza[0].style.pointerEvents = 'auto';
            pore[0].style.marginBottom = '80px';
            clearInterval(Interval);
            };
      }
      
      if(price[0].textContent == '35000 сум' && b == pore[0].style.marginBottom){
          width--
          height--
          pizzaImg[0].style.width = `${width}px`
          pizzaImg[0].style.height = `${height}px`

          if(width == 140){
            smallPizza[0].style.pointerEvents = 'none';
            averagePizza[0].style.pointerEvents = 'auto';
            bigPizza[0].style.pointerEvents = 'auto';
             pore[0].style.marginBottom = '80px'
             clearInterval(Interval);
             };
         } 
   }, 5)
   }

averagePizza[0].onclick = () => {
      PizzaPrice[0].textContent = '57000 сум'
      let width = pizzaImg[0].clientWidth;
      let height = pizzaImg[0].clientHeight;

      let  Interval =  setInterval( () => {
         if(pore[0].style.marginBottom ==  '' || c == pore[0].style.marginBottom){
            width--
            height--
            pizzaImg[0].style.width = `${width}px`
            pizzaImg[0].style.height = `${height}px`
         }

         if(pore[0].style.marginBottom == a){
            width++
            height++
            pizzaImg[0].style.width = `${width}px`
            pizzaImg[0].style.height = `${height}px`
           } 
           
            if(width == 180){
               averagePizza[0].style.pointerEvents = 'none';
               smallPizza[0].style.pointerEvents = 'auto';
               bigPizza[0].style.pointerEvents = 'auto';
               pore[0].style.marginBottom = '40px'
               clearInterval(Interval)
            }
         }, 5)
}

bigPizza[0].onclick = () => {

   PizzaPrice[0].textContent = '80000 сум'
   let width = pizzaImg[0].clientWidth;
   let height = pizzaImg[0].clientHeight;

   let Interval = setInterval( () => {

      if(price[0].textContent == '80000 сум' && b == pore[0].style.marginBottom ||  a == pore[0].style.marginBottom){
         width++
         height++
         pizzaImg[0].style.width = `${width}px`
         pizzaImg[0].style.height = `${height}px`
      }
         
      if(width == 220){
         smallPizza[0].style.pointerEvents = 'auto';
         averagePizza[0].style.pointerEvents = 'auto';
         bigPizza[0].style.pointerEvents = 'none';
         pore[0].style.marginBottom = c;
         clearInterval(Interval);
      }
}, 5)
}