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

let myFunc = () => {

smallPizza[0].onclick = () => {

    let width = pizzaImg[0].clientWidth;
    let height = pizzaImg[0].clientHeight;

    let  Interval =  setInterval( () => {
        
      if(pizzaImg[0].classList.value == 'pizza-img' || pizzaImg[0].classList.value == 'pizza-img1' || pizzaImg[0].classList.value == 'big1' || pizzaImg[0].classList.value == 'pizza-img big1' || pizzaImg[0].classList.value == 'pizza-img pizza-img1' ){
          width--
          height--
          pizzaImg[0].style.width = `${width}px`
          pizzaImg[0].style.height = `${height}px`
      } 
   }, 10)
      
   let Interval2 = setInterval( () => {
      if(width == 140){
         pizzaImg[0].classList.add('averageScale');
         pizzaImg[0].classList.remove('pizza-img');
         pizzaImg[0].classList.remove('big1');
         pore[0].style.marginBottom = '80px'
         clearInterval(Interval);
         clearInterval(Interval2);
         };
      }, 10);
   }
}

smallPizza[2].onclick = () => {

    let width = pizzaImg[2].clientWidth;
    let height = pizzaImg[2].clientHeight;

    let  Interval =  setInterval( () => {
        
      if(pizzaImg[2].classList.value == 'pizza-img' || pizzaImg[2].classList.value == 'pizza-img1' || pizzaImg[2].classList.value == 'big1' || pizzaImg[0].classList.value == 'pizza-img big1' || pizzaImg[0].classList.value == 'pizza-img pizza-img1' ){
          width--
          height--
          pizzaImg[2].style.width = `${width}px`
          pizzaImg[2].style.height = `${height}px`
      } 
   }, 10)
      
   let Interval2 = setInterval( () => {
      if(width == 140){
         pizzaImg[2].classList.add('averageScale');
         pizzaImg[2].classList.remove('pizza-img');
         pizzaImg[2].classList.remove('big1');
         pore[2].style.marginBottom = '80px'
         clearInterval(Interval);
         clearInterval(Interval2);
         };
      }, 10);
}

averagePizza[1].onclick = () => {
   let width = pizzaImg[1].clientWidth;
   let height = pizzaImg[1].clientHeight;

   let  Interval =  setInterval( () => {
      
      if(pizzaImg[1].classList.value == 'averageScale' || pizzaImg[1].style.width == '140px'){
         width++
         height++
         pizzaImg[1].style.width = `${width}px`
         pizzaImg[1].style.height = `${height}px`
        } 
      }, 10)
     
      let Interval2 = setInterval( () => {
         if(pizzaImg[1].style.width = '180px'){
         pore[1].style.marginBottom = '40px'
            pizzaImg[1].classList.add('pizza-img1')
            pizzaImg[1].classList.remove('averageScale')
            pizzaImg[1].classList.remove('big1')
            clearInterval(Interval)
            clearInterval(Interval2)
            
            if(pizzaImg[1].style.width == '180px' && pizzaImg[0].style.height == '220px' || pizzaImg[1].style.height == '141px'){
               pizzaImg[1].style.height = '180px'
            }
         }
},10)
}

averagePizza[0].onclick = () => {
   let width = pizzaImg[0].clientWidth;
   let height = pizzaImg[0].clientHeight;

   let  Interval =  setInterval( () => {
      
      if(pizzaImg[0].classList.value == 'averageScale' || pizzaImg[0].style.width == '140px'){
         width++
         height++
         pizzaImg[0].style.width = `${width}px`
         pizzaImg[0].style.height = `${height}px`
        } 
      }, 10)
     
      let Interval2 = setInterval( () => {
         if(pizzaImg[0].style.width = '180px'){
         pore[0].style.marginBottom = '40px'
            pizzaImg[0].classList.add('pizza-img1')
            pizzaImg[0].classList.remove('averageScale')
            pizzaImg[0].classList.remove('big1')
            clearInterval(Interval)
            clearInterval(Interval2)
            
            if(pizzaImg[0].style.width == '180px' && pizzaImg[0].style.height == '220px' || pizzaImg[0].style.height == '141px'){
               pizzaImg[0].style.height = '180px'
            }
         }
},10)
}

averagePizza[2].onclick = () => {
   let width = pizzaImg[2].clientWidth;
   let height = pizzaImg[2].clientHeight;

   let  Interval =  setInterval( () => {
      
      if(pizzaImg[2].classList.value == 'averageScale' || pizzaImg[2].style.width == '140px'){
         width++
         height++
         pizzaImg[2].style.width = `${width}px`
         pizzaImg[2].style.height = `${height}px`
        } 
      }, 10)
     
      let Interval2 = setInterval( () => {
         if(pizzaImg[2].style.width = '180px'){
         pore[2].style.marginBottom = '40px'
            pizzaImg[2].classList.add('pizza-img1')
            pizzaImg[2].classList.remove('averageScale')
            pizzaImg[2].classList.remove('big1')
            clearInterval(Interval)
            clearInterval(Interval2)
            
            if(pizzaImg[2].style.width == '180px' && pizzaImg[2].style.height == '220px' || pizzaImg[2].style.height == '141px'){
               pizzaImg[2].style.height = '180px'
            }
         }
},10)
}

bigPizza[0].onclick = () => {
   let width = pizzaImg[0].clientWidth;
   let height = pizzaImg[0].clientHeight;

   let  Interval =  setInterval( () => {
      
      if(pizzaImg[0].classList.value == 'pizza-img1' && pizzaImg[0].style.width == '180px'){
         width++
         height++
         pizzaImg[0].style.width = `${width}px`
         pizzaImg[0].style.height = `${height}px`
         pore[0].style.marginBottom = '0'
         
      } 
   }, 10)
   
   let Interval2 = setInterval( () => {
      if(pizzaImg[0].style.width = '220px'){
         pizzaImg[0].style.height = '220px'
         pizzaImg[0].classList.remove('pizza-img1')
         pizzaImg[0].classList.remove('averageScale')
         pizzaImg[0].classList.add('big1')
         clearInterval(Interval)
         clearInterval(Interval2)
      }
   },10)
}

bigPizza[1].onclick = () => {
   let width = pizzaImg[1].clientWidth;
   let height = pizzaImg[1].clientHeight;

   let  Interval =  setInterval( () => {
      
      if(pizzaImg[1].classList.value == 'pizza-img1' && pizzaImg[1].style.width == '180px'){
         width++
         height++
         pizzaImg[1].style.width = `${width}px`
         pizzaImg[1].style.height = `${height}px`
         pore[1].style.marginBottom = '0'
         
      } 
   }, 10)
   
   let Interval2 = setInterval( () => {
      if(pizzaImg[1].style.width = '220px'){
         pizzaImg[1].style.height = '220px'
         pizzaImg[1].classList.remove('pizza-img1')
         pizzaImg[1].classList.remove('averageScale')
         pizzaImg[1].classList.add('big1')
         clearInterval(Interval)
         clearInterval(Interval2)
      }
   },10)
}

bigPizza[2].onclick = () => {
   let width = pizzaImg[2].clientWidth;
   let height = pizzaImg[2].clientHeight;

   let  Interval =  setInterval( () => {
      
      if(pizzaImg[2].classList.value == 'pizza-img1' && pizzaImg[2].style.width == '180px'){
         width++
         height++
         pizzaImg[2].style.width = `${width}px`
         pizzaImg[2].style.height = `${height}px`
         pore[2].style.marginBottom = '0'
         
      } 
   }, 10)
   
   let Interval2 = setInterval( () => {
      if(pizzaImg[2].style.width = '220px'){
         pizzaImg[2].style.height = '220px'
         pizzaImg[2].classList.remove('pizza-img1')
         pizzaImg[2].classList.remove('averageScale')
         pizzaImg[2].classList.add('big1')
         clearInterval(Interval)
         clearInterval(Interval2)
      }
   },10)
}

smallPizza[1].onclick = () => {

    let width = pizzaImg[1].clientWidth;
    let height = pizzaImg[1].clientHeight;

    let  Interval =  setInterval( () => {
        
      if(pizzaImg[1].classList.value == 'pizza-img' || pizzaImg[1].classList.value == 'pizza-img1' || pizzaImg[1].classList.value == 'big1' || pizzaImg[1].classList.value == 'pizza-img big1' || pizzaImg[1].classList.value == 'pizza-img pizza-img1' ){
          width--
          height--
          pizzaImg[1].style.width = `${width}px`
          pizzaImg[1].style.height = `${height}px`
      } 
   }, 10)
      
   let Interval2 = setInterval( () => {
      if(width == 140){
         pizzaImg[1].classList.add('averageScale');
         pizzaImg[1].classList.remove('pizza-img');
         pizzaImg[1].classList.remove('big1');
         pore[1].style.marginBottom = '80px'
         clearInterval(Interval);
         clearInterval(Interval2);
         };
      }, 10)

smallPizza[2].onclick = () => {

    let width = pizzaImg[2].clientWidth;
    let height = pizzaImg[2].clientHeight;

    let  Interval =  setInterval( () => {
        
      if(pizzaImg[2].classList.value == 'pizza-img' || pizzaImg[2].classList.value == 'pizza-img1' || pizzaImg[2].classList.value == 'big1' || pizzaImg[2].classList.value == 'pizza-img big1' || pizzaImg[2].classList.value == 'pizza-img pizza-img1' ){
          width--
          height--
          pizzaImg[2].style.width = `${width}px`
          pizzaImg[2].style.height = `${height}px`
      } 
   }, 10)
      
   let Interval2 = setInterval( () => {
      if(width == 140){
         pizzaImg[2].classList.add('averageScale');
         pizzaImg[2].classList.remove('pizza-img');
         pizzaImg[2].classList.remove('big1');
         pore[2].style.marginBottom = '80px'
         clearInterval(Interval);
         clearInterval(Interval2);
         };
      }, 10)
}
   
myFunc()