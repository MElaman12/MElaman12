let price = document.querySelectorAll('.first-pizza .price');
let signBtn = document.querySelector('.sign');
let blurBlock  = document.querySelector('.blur-block')
// -------
let animationText = document.querySelector('.load-animation p')
let animationTextFather = document.querySelector('.load-animation .title')
let animationBlock = document.querySelector('.load-animation')
let animationIcon = document.querySelectorAll('.load-animation .icon img')
let animationIconFather = document.querySelector('.load-animation .icon')

function textAnimate() {
   setInterval(() => {
      animationText.textContent = 'Загрузка..';
   },1000);

    setInterval( () =>{
       animationText.textContent = 'Загрузка...'
      },1500); 
}

window.onload = () => {
      animationText.textContent = textAnimate();
   
}

    for(let item of animationIcon){
    animationIconFather.classList.add('animate');

    setTimeout( () => {
       animationIconFather.classList.remove('animate');
       animationIcon[0].style.position = 'absolute'
       animationIcon[0].style.marginLeft = '80px'
       // 
       animationIcon[1].style.position = 'absolute'
       animationIcon[1].style.marginLeft = '-170px'
       // 
       animationIcon[2].style.position = 'absolute'
       animationIcon[2].style.marginLeft = '-40px'
       item.classList.remove('animate');

      if(item.alt == 'Error'){
         setTimeout( () => {
            animationIcon[1].classList.add('animate-Scale')
         },800)
         setTimeout( () => {
            if(animationIcon[1].classList.value == 'animate-Scale'){
               animationIcon[1].classList.remove('animate-Scale');
               animationIcon[2].classList.add('animate-Scale');
            }
         },1800)
         setTimeout( () => {
            if(animationIcon[2].classList.value == 'animate-Scale'){
               animationIcon[2].classList.remove('animation-Scale');
               animationIcon[0].classList.add('animate-Scale')
            }
         },2500)


         setTimeout( () => {
            
            setTimeout( () => {
               animationIcon[1].classList.add('animate-Scale')
               animationIcon[0].classList.remove('animate-Scale')
               animationIcon[2].classList.remove('animate-Scale')
            },800)
            setTimeout( () => {
               if(animationIcon[1].classList.value == 'animate-Scale'){
                  animationIcon[1].classList.remove('animate-Scale');
                  animationIcon[2].classList.add('animate-Scale');
               }
            },1800)
            setTimeout( () => {
               if(animationIcon[2].classList.value == 'animate-Scale'){
                  animationIcon[2].classList.remove('animation-Scale');
                  animationIcon[0].classList.add('animate-Scale')
               }
            },2500)
         },3500);

         setTimeout( () => {

            let right = 660;
           let Interval = setInterval( () =>{
               
                  if(right == 2000){
                     clearInterval(Interval);
                     console.log('Success!');
                  } else{
                     right = right + 13
                  } 
                 animationIcon[0].style.right = `${right}px` 
            },0.1)
            
            setTimeout

         },7500)
      }

    },1500);
   }

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

smallPizza[1].onclick = () => {
   PizzaPrice[1].textContent = '35000 сум'
    let width = pizzaImg[1].clientWidth;
    let height = pizzaImg[1].clientHeight;

    let  Interval =  setInterval( () => {
         
      if(price[1].textContent == '35000 сум' && c == pore[1].style.marginBottom || pore[1].style.marginBottom == '' ){
         width--
         height--
         pizzaImg[1].style.width = `${width}px`
         pizzaImg[1].style.height = `${height}px`
         if(width == 140){
            smallPizza[1].style.pointerEvents = 'none';
            averagePizza[1].style.pointerEvents = 'auto';
            bigPizza[1].style.pointerEvents = 'auto';
            pore[1].style.marginBottom = '80px';
            clearInterval(Interval);
            };
      }
      
      if(price[1].textContent == '35000 сум' && b == pore[1].style.marginBottom){
          width--
          height--
          pizzaImg[1].style.width = `${width}px`
          pizzaImg[1].style.height = `${height}px`

          if(width == 140){
            smallPizza[1].style.pointerEvents = 'none';
            averagePizza[1].style.pointerEvents = 'auto';
            bigPizza[1].style.pointerEvents = 'auto';
             pore[1].style.marginBottom = '80px'
             clearInterval(Interval);
             };
         } 
   }, 5)
   }

averagePizza[1].onclick = () => {
      PizzaPrice[1].textContent = '57000 сум'
      let width = pizzaImg[1].clientWidth;
      let height = pizzaImg[1].clientHeight;

      let  Interval =  setInterval( () => {
         if(pore[1].style.marginBottom ==  '' || c == pore[1].style.marginBottom){
            width--
            height--
            pizzaImg[1].style.width = `${width}px`
            pizzaImg[1].style.height = `${height}px`
         }

         if(pore[1].style.marginBottom == a){
            width++
            height++
            pizzaImg[1].style.width = `${width}px`
            pizzaImg[1].style.height = `${height}px`
           } 
           
            if(width == 180){
               averagePizza[1].style.pointerEvents = 'none';
               smallPizza[1].style.pointerEvents = 'auto';
               bigPizza[1].style.pointerEvents = 'auto';
               pore[1].style.marginBottom = '40px'
               clearInterval(Interval)
            }
         }, 5)
}

bigPizza[1].onclick = () => {

   PizzaPrice[1].textContent = '80000 сум'
   let width = pizzaImg[1].clientWidth;
   let height = pizzaImg[1].clientHeight;

   let Interval = setInterval( () => {

      if(price[1].textContent == '80000 сум' && b == pore[1].style.marginBottom ||  a == pore[1].style.marginBottom){
         width++
         height++
         pizzaImg[1].style.width = `${width}px`
         pizzaImg[1].style.height = `${height}px`
      }
         
      if(width == 220){
         smallPizza[1].style.pointerEvents = 'auto';
         averagePizza[1].style.pointerEvents = 'auto';
         bigPizza[1].style.pointerEvents = 'none';
         pore[1].style.marginBottom = c;
         clearInterval(Interval);
      }
}, 5)
}
smallPizza[2].onclick = () => {
   PizzaPrice[2].textContent = '35000 сум'
    let width = pizzaImg[2].clientWidth;
    let height = pizzaImg[2].clientHeight;

    let  Interval =  setInterval( () => {
         
      if(price[2].textContent == '35000 сум' && c == pore[2].style.marginBottom || pore[2].style.marginBottom == '' ){
         width--
         height--
         pizzaImg[2].style.width = `${width}px`
         pizzaImg[2].style.height = `${height}px`
         if(width == 140){
            smallPizza[2].style.pointerEvents = 'none';
            averagePizza[2].style.pointerEvents = 'auto';
            bigPizza[2].style.pointerEvents = 'auto';
            pore[2].style.marginBottom = '80px';
            clearInterval(Interval);
            };
      }
      
      if(price[2].textContent == '35000 сум' && b == pore[2].style.marginBottom){
          width--
          height--
          pizzaImg[2].style.width = `${width}px`
          pizzaImg[2].style.height = `${height}px`

          if(width == 140){
            smallPizza[2].style.pointerEvents = 'none';
            averagePizza[2].style.pointerEvents = 'auto';
            bigPizza[2].style.pointerEvents = 'auto';
             pore[2].style.marginBottom = '80px'
             clearInterval(Interval);
             };
         } 
   }, 5)
   }

averagePizza[2].onclick = () => {
      PizzaPrice[2].textContent = '57000 сум'
      let width = pizzaImg[2].clientWidth;
      let height = pizzaImg[2].clientHeight;

      let  Interval =  setInterval( () => {
         if(pore[2].style.marginBottom ==  '' || c == pore[2].style.marginBottom){
            width--
            height--
            pizzaImg[2].style.width = `${width}px`
            pizzaImg[2].style.height = `${height}px`
         }

         if(pore[2].style.marginBottom == a){
            width++
            height++
            pizzaImg[2].style.width = `${width}px`
            pizzaImg[2].style.height = `${height}px`
           } 
           
            if(width == 180){
               averagePizza[2].style.pointerEvents = 'none';
               smallPizza[2].style.pointerEvents = 'auto';
               bigPizza[2].style.pointerEvents = 'auto';
               pore[2].style.marginBottom = '40px'
               clearInterval(Interval)
            }
         }, 5)
}

bigPizza[2].onclick = () => {

   PizzaPrice[2].textContent = '80000 сум'
   let width = pizzaImg[2].clientWidth;
   let height = pizzaImg[2].clientHeight;

   let Interval = setInterval( () => {

      if(price[2].textContent == '80000 сум' && b == pore[2].style.marginBottom ||  a == pore[2].style.marginBottom){
         width++
         height++
         pizzaImg[2].style.width = `${width}px`
         pizzaImg[2].style.height = `${height}px`
      }
         
      if(width == 220){
         smallPizza[2].style.pointerEvents = 'auto';
         averagePizza[2].style.pointerEvents = 'auto';
         bigPizza[2].style.pointerEvents = 'none';
         pore[2].style.marginBottom = c;
         clearInterval(Interval);
      }
}, 5)
}