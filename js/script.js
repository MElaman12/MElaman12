
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


let myFunc = () => {

 smallPizza[0].onclick = () => {

    let width = pizzaImg[0].clientWidth;
    let height = pizzaImg[0].clientHeight;

    let  Interval =  setInterval( () => {
        
      if(pizzaImg[0].classList.value == 'pizza-img'){
          width--
          height--
          pizzaImg[0].style.width = `${width}px`
          pizzaImg[0].style.height = `${height}px`
         } 
      }, 1)

      
      
      let Interval2 = setInterval( () => {
         if(width == 140){
            pizzaImg[0].classList.add('averageScale')
            pizzaImg[0].classList.remove('pizza-img')
            clearInterval(Interval)
            clearInterval(Interval2)
         }
      }, 1)

      
}
}  

averagePizza[0].onclick = () => {
   let width = pizzaImg[0].clientWidth;
   let height = pizzaImg[0].clientHeight;

   let  Interval =  setInterval( () => {
      
      if(pizzaImg[0].classList.value == 'averageScale' && pizzaImg[0].style.width == '140px'){
         width++
         height++
         pizzaImg[0].style.width = `${width}px`
         pizzaImg[0].style.height = `${height}px`
        } 
      }, 1)
     
      let Interval2 = setInterval( () => {
         if(pizzaImg[0].style.width = '170px'){
            pizzaImg[0].style.height = '170px'
            pizzaImg[0].classList.add('pizza-img1')
            pizzaImg[0].classList.remove('averageScale')
            clearInterval(Interval)
            clearInterval(Interval2)
         }
   },10)
   
}

     

myFunc()
