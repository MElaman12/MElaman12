smallPizza[3].onclick = () => {
    PizzaPrice[3].textContent = '35000 сум'
     let width = pizzaImg[3].clientWidth;
     let height = pizzaImg[3].clientHeight;
 
     let  Interval =  setInterval( () => {
          
       if(price[3].textContent == '35000 сум' && c == pore[3].style.marginBottom || pore[3].style.marginBottom == '' ){
          width--
          height--
          pizzaImg[3].style.width = `${width}px`
          pizzaImg[3].style.height = `${height}px`
          if(width == 140){
             smallPizza[3].style.pointerEvents = 'none';
             averagePizza[3].style.pointerEvents = 'auto';
             bigPizza[3].style.pointerEvents = 'auto';
             pore[3].style.marginBottom = '80px';
             clearInterval(Interval);
             };
       }
       
       if(price[3].textContent == '35000 сум' && b == pore[3].style.marginBottom){
           width--
           height--
           pizzaImg[3].style.width = `${width}px`
           pizzaImg[3].style.height = `${height}px`
 
           if(width == 140){
             smallPizza[3].style.pointerEvents = 'none';
             averagePizza[3].style.pointerEvents = 'auto';
             bigPizza[3].style.pointerEvents = 'auto';
              pore[3].style.marginBottom = '80px'
              clearInterval(Interval);
              };
          } 
    }, 5)
    }
 
 averagePizza[3].onclick = () => {
       PizzaPrice[3].textContent = '57000 сум'
       let width = pizzaImg[3].clientWidth;
       let height = pizzaImg[3].clientHeight;
 
       let  Interval =  setInterval( () => {
          if(pore[3].style.marginBottom ==  '' || c == pore[3].style.marginBottom){
             width--
             height--
             pizzaImg[3].style.width = `${width}px`
             pizzaImg[3].style.height = `${height}px`
          }
 
          if(pore[3].style.marginBottom == a){
             width++
             height++
             pizzaImg[3].style.width = `${width}px`
             pizzaImg[3].style.height = `${height}px`
            } 
            
             if(width == 180){
                averagePizza[3].style.pointerEvents = 'none';
                smallPizza[3].style.pointerEvents = 'auto';
                bigPizza[3].style.pointerEvents = 'auto';
                pore[3].style.marginBottom = '40px'
                clearInterval(Interval)
             }
          }, 5)
 }
 
 bigPizza[3].onclick = () => {
 
    PizzaPrice[3].textContent = '80000 сум'
    let width = pizzaImg[3].clientWidth;
    let height = pizzaImg[3].clientHeight;
 
    let Interval = setInterval( () => {
 
       if(price[3].textContent == '80000 сум' && b == pore[3].style.marginBottom ||  a == pore[3].style.marginBottom){
          width++
          height++
          pizzaImg[3].style.width = `${width}px`
          pizzaImg[3].style.height = `${height}px`
       }
          
       if(width == 220){
          smallPizza[3].style.pointerEvents = 'auto';
          averagePizza[3].style.pointerEvents = 'auto';
          bigPizza[3].style.pointerEvents = 'none';
          pore[3].style.marginBottom = c;
          clearInterval(Interval);
       }
 }, 5)
}
// --------------------------------------------------------------

// smallPizza[4].onclick = () => {
//     PizzaPrice[4].textContent = '35000 сум'
//      let width = pizzaImg[4].clientWidth;
//      let height = pizzaImg[4].clientHeight;
 
//      let  Interval =  setInterval( () => {
          
//        if(price[4].textContent == '35000 сум' && c == pore[4].style.marginBottom || pore[4].style.marginBottom == '' ){
//           width--
//           height--
//           pizzaImg[4].style.width = `${width}px`
//           pizzaImg[4].style.height = `${height}px`
//           if(width == 140){
//              smallPizza[4].style.pointerEvents = 'none';
//              averagePizza[4].style.pointerEvents = 'auto';
//              bigPizza[4].style.pointerEvents = 'auto';
//              pore[4].style.marginBottom = '80px';
//              clearInterval(Interval);
//              };
//        }
       
//        if(price[4].textContent == '35000 сум' && b == pore[4].style.marginBottom){
//            width--
//            height--
//            pizzaImg[4].style.width = `${width}px`
//            pizzaImg[4].style.height = `${height}px`
 
//            if(width == 140){
//              smallPizza[4].style.pointerEvents = 'none';
//              averagePizza[4].style.pointerEvents = 'auto';
//              bigPizza[4].style.pointerEvents = 'auto';
//               pore[4].style.marginBottom = '80px'
//               clearInterval(Interval);
//               };
//           } 
//     }, 5)
//     }
 
//  averagePizza[4].onclick = () => {
//        PizzaPrice[4].textContent = '57000 сум'
//        let width = pizzaImg[4].clientWidth;
//        let height = pizzaImg[4].clientHeight;
 
//        let  Interval =  setInterval( () => {
//           if(pore[4].style.marginBottom ==  '' || c == pore[4].style.marginBottom){
//              width--
//              height--
//              pizzaImg[4].style.width = `${width}px`
//              pizzaImg[4].style.height = `${height}px`
//           }
 
//           if(pore[4].style.marginBottom == a){
//              width++
//              height++
//              pizzaImg[4].style.width = `${width}px`
//              pizzaImg[4].style.height = `${height}px`
//             } 
            
//              if(width == 180){
//                 averagePizza[4].style.pointerEvents = 'none';
//                 smallPizza[4].style.pointerEvents = 'auto';
//                 bigPizza[4].style.pointerEvents = 'auto';
//                 pore[4].style.marginBottom = '40px'
//                 clearInterval(Interval)
//              }
//           }, 5)
//  }
 
//  bigPizza[4].onclick = () => {
 
//     PizzaPrice[4].textContent = '80000 сум'
//     let width = pizzaImg[4].clientWidth;
//     let height = pizzaImg[4].clientHeight;
 
//     let Interval = setInterval( () => {
 
//        if(price[4].textContent == '80000 сум' && b == pore[4].style.marginBottom ||  a == pore[4].style.marginBottom){
//           width++
//           height++
//           pizzaImg[4].style.width = `${width}px`
//           pizzaImg[4].style.height = `${height}px`
//        }
          
//        if(width == 220){
//           smallPizza[4].style.pointerEvents = 'auto';
//           averagePizza[4].style.pointerEvents = 'auto';
//           bigPizza[4].style.pointerEvents = 'none';
//           pore[4].style.marginBottom = c;
//           clearInterval(Interval);
//        }
//  }, 5)
//  }
// --------------------------------------------------------------

// smallPizza[5].onclick = () => {
//     PizzaPrice[5].textContent = '35000 сум'
//      let width = pizzaImg[5].clientWidth;
//      let height = pizzaImg[5].clientHeight;
 
//      let  Interval =  setInterval( () => {
          
//        if(price[5].textContent == '35000 сум' && c == pore[5].style.marginBottom || pore[5].style.marginBottom == '' ){
//           width--
//           height--
//           pizzaImg[5].style.width = `${width}px`
//           pizzaImg[5].style.height = `${height}px`
//           if(width == 140){
//              smallPizza[5].style.pointerEvents = 'none';
//              averagePizza[5].style.pointerEvents = 'auto';
//              bigPizza[5].style.pointerEvents = 'auto';
//              pore[5].style.marginBottom = '80px';
//              clearInterval(Interval);
//              };
//        }
       
//        if(price[5].textContent == '35000 сум' && b == pore[5].style.marginBottom){
//            width--
//            height--
//            pizzaImg[5].style.width = `${width}px`
//            pizzaImg[5].style.height = `${height}px`
 
//            if(width == 140){
//              smallPizza[5].style.pointerEvents = 'none';
//              averagePizza[5].style.pointerEvents = 'auto';
//              bigPizza[5].style.pointerEvents = 'auto';
//               pore[5].style.marginBottom = '80px'
//               clearInterval(Interval);
//               };
//           } 
//     }, 5)
//     }
 
//  averagePizza[5].onclick = () => {
//        PizzaPrice[5].textContent = '57000 сум'
//        let width = pizzaImg[5].clientWidth;
//        let height = pizzaImg[5].clientHeight;
 
//        let  Interval =  setInterval( () => {
//           if(pore[5].style.marginBottom ==  '' || c == pore[5].style.marginBottom){
//              width--
//              height--
//              pizzaImg[5].style.width = `${width}px`
//              pizzaImg[5].style.height = `${height}px`
//           }
 
//           if(pore[5].style.marginBottom == a){
//              width++
//              height++
//              pizzaImg[5].style.width = `${width}px`
//              pizzaImg[5].style.height = `${height}px`
//             } 
            
//              if(width == 180){
//                 averagePizza[5].style.pointerEvents = 'none';
//                 smallPizza[5].style.pointerEvents = 'auto';
//                 bigPizza[5].style.pointerEvents = 'auto';
//                 pore[5].style.marginBottom = '40px'
//                 clearInterval(Interval)
//              }
//           }, 5)
//  }
 
//  bigPizza[5].onclick = () => {
 
//     PizzaPrice[5].textContent = '80000 сум'
//     let width = pizzaImg[5].clientWidth;
//     let height = pizzaImg[5].clientHeight;
 
//     let Interval = setInterval( () => {
 
//        if(price[5].textContent == '80000 сум' && b == pore[5].style.marginBottom ||  a == pore[5].style.marginBottom){
//           width++
//           height++
//           pizzaImg[5].style.width = `${width}px`
//           pizzaImg[5].style.height = `${height}px`
//        }
          
//        if(width == 220){
//           smallPizza[5].style.pointerEvents = 'auto';
//           averagePizza[5].style.pointerEvents = 'auto';
//           bigPizza[5].style.pointerEvents = 'none';
//           pore[5].style.marginBottom = c;
//           clearInterval(Interval);
//        }
//  }, 5)
//  }
// // --------------------------------------------------------------
// smallPizza[6].onclick = () => {
//     PizzaPrice[6].textContent = '35000 сум'
//      let width = pizzaImg[6].clientWidth;
//      let height = pizzaImg[6].clientHeight;
 
//      let  Interval =  setInterval( () => {
          
//        if(price[6].textContent == '35000 сум' && c == pore[6].style.marginBottom || pore[6].style.marginBottom == '' ){
//           width--
//           height--
//           pizzaImg[6].style.width = `${width}px`
//           pizzaImg[6].style.height = `${height}px`
//           if(width == 140){
//              smallPizza[6].style.pointerEvents = 'none';
//              averagePizza[6].style.pointerEvents = 'auto';
//              bigPizza[6].style.pointerEvents = 'auto';
//              pore[6].style.marginBottom = '80px';
//              clearInterval(Interval);
//              };
//        }
       
//        if(price[6].textContent == '35000 сум' && b == pore[6].style.marginBottom){
//            width--
//            height--
//            pizzaImg[6].style.width = `${width}px`
//            pizzaImg[6].style.height = `${height}px`
 
//            if(width == 140){
//              smallPizza[6].style.pointerEvents = 'none';
//              averagePizza[6].style.pointerEvents = 'auto';
//              bigPizza[6].style.pointerEvents = 'auto';
//               pore[6].style.marginBottom = '80px'
//               clearInterval(Interval);
//               };
//           } 
//     }, 5)
//     }
 
//  averagePizza[6].onclick = () => {
//        PizzaPrice[6].textContent = '57000 сум'
//        let width = pizzaImg[6].clientWidth;
//        let height = pizzaImg[6].clientHeight;
 
//        let  Interval =  setInterval( () => {
//           if(pore[6].style.marginBottom ==  '' || c == pore[6].style.marginBottom){
//              width--
//              height--
//              pizzaImg[6].style.width = `${width}px`
//              pizzaImg[6].style.height = `${height}px`
//           }
 
//           if(pore[6].style.marginBottom == a){
//              width++
//              height++
//              pizzaImg[6].style.width = `${width}px`
//              pizzaImg[6].style.height = `${height}px`
//             } 
            
//              if(width == 180){
//                 averagePizza[6].style.pointerEvents = 'none';
//                 smallPizza[6].style.pointerEvents = 'auto';
//                 bigPizza[6].style.pointerEvents = 'auto';
//                 pore[6].style.marginBottom = '40px'
//                 clearInterval(Interval)
//              }
//           }, 5)
//  }
 
//  bigPizza[6].onclick = () => {
 
//     PizzaPrice[6].textContent = '80000 сум'
//     let width = pizzaImg[6].clientWidth;
//     let height = pizzaImg[6].clientHeight;
 
//     let Interval = setInterval( () => {
 
//        if(price[6].textContent == '80000 сум' && b == pore[6].style.marginBottom ||  a == pore[6].style.marginBottom){
//           width++
//           height++
//           pizzaImg[6].style.width = `${width}px`
//           pizzaImg[6].style.height = `${height}px`
//        }
          
//        if(width == 220){
//           smallPizza[6].style.pointerEvents = 'auto';
//           averagePizza[6].style.pointerEvents = 'auto';
//           bigPizza[6].style.pointerEvents = 'none';
//           pore[6].style.marginBottom = c;
//           clearInterval(Interval);
//        }
//  }, 5)
//  }
// // --------------------------------------------------------------
// smallPizza[7].onclick = () => {
//     PizzaPrice[7].textContent = '35000 сум'
//      let width = pizzaImg[7].clientWidth;
//      let height = pizzaImg[7].clientHeight;
 
//      let  Interval =  setInterval( () => {
          
//        if(price[7].textContent == '35000 сум' && c == pore[7].style.marginBottom || pore[7].style.marginBottom == '' ){
//           width--
//           height--
//           pizzaImg[7].style.width = `${width}px`
//           pizzaImg[7].style.height = `${height}px`
//           if(width == 140){
//              smallPizza[7].style.pointerEvents = 'none';
//              averagePizza[7].style.pointerEvents = 'auto';
//              bigPizza[7].style.pointerEvents = 'auto';
//              pore[7].style.marginBottom = '80px';
//              clearInterval(Interval);
//              };
//        }
       
//        if(price[7].textContent == '35000 сум' && b == pore[7].style.marginBottom){
//            width--
//            height--
//            pizzaImg[7].style.width = `${width}px`
//            pizzaImg[7].style.height = `${height}px`
 
//            if(width == 140){
//              smallPizza[7].style.pointerEvents = 'none';
//              averagePizza[7].style.pointerEvents = 'auto';
//              bigPizza[7].style.pointerEvents = 'auto';
//               pore[7].style.marginBottom = '80px'
//               clearInterval(Interval);
//               };
//           } 
//     }, 5)
//     }
 
//  averagePizza[7].onclick = () => {
//        PizzaPrice[7].textContent = '57000 сум'
//        let width = pizzaImg[7].clientWidth;
//        let height = pizzaImg[7].clientHeight;
 
//        let  Interval =  setInterval( () => {
//           if(pore[7].style.marginBottom ==  '' || c == pore[7].style.marginBottom){
//              width--
//              height--
//              pizzaImg[7].style.width = `${width}px`
//              pizzaImg[7].style.height = `${height}px`
//           }
 
//           if(pore[7].style.marginBottom == a){
//              width++
//              height++
//              pizzaImg[7].style.width = `${width}px`
//              pizzaImg[7].style.height = `${height}px`
//             } 
            
//              if(width == 180){
//                 averagePizza[7].style.pointerEvents = 'none';
//                 smallPizza[7].style.pointerEvents = 'auto';
//                 bigPizza[7].style.pointerEvents = 'auto';
//                 pore[7].style.marginBottom = '40px'
//                 clearInterval(Interval)
//              }
//           }, 5)
//  }
 
//  bigPizza[7].onclick = () => {
 
//     PizzaPrice[7].textContent = '80000 сум'
//     let width = pizzaImg[7].clientWidth;
//     let height = pizzaImg[7].clientHeight;
 
//     let Interval = setInterval( () => {
 
//        if(price[7].textContent == '80000 сум' && b == pore[7].style.marginBottom ||  a == pore[7].style.marginBottom){
//           width++
//           height++
//           pizzaImg[7].style.width = `${width}px`
//           pizzaImg[7].style.height = `${height}px`
//        }
          
//        if(width == 220){
//           smallPizza[7].style.pointerEvents = 'auto';
//           averagePizza[7].style.pointerEvents = 'auto';
//           bigPizza[7].style.pointerEvents = 'none';
//           pore[7].style.marginBottom = c;
//           clearInterval(Interval);
//        }
//  }, 5)
//  }
// // --------------------------------------------------------------
// smallPizza[8].onclick = () => {
//     PizzaPrice[8].textContent = '35000 сум'
//      let width = pizzaImg[8].clientWidth;
//      let height = pizzaImg[8].clientHeight;
 
//      let  Interval =  setInterval( () => {
          
//        if(price[8].textContent == '35000 сум' && c == pore[8].style.marginBottom || pore[8].style.marginBottom == '' ){
//           width--
//           height--
//           pizzaImg[8].style.width = `${width}px`
//           pizzaImg[8].style.height = `${height}px`
//           if(width == 140){
//              smallPizza[8].style.pointerEvents = 'none';
//              averagePizza[8].style.pointerEvents = 'auto';
//              bigPizza[8].style.pointerEvents = 'auto';
//              pore[8].style.marginBottom = '80px';
//              clearInterval(Interval);
//              };
//        }
       
//        if(price[8].textContent == '35000 сум' && b == pore[8].style.marginBottom){
//            width--
//            height--
//            pizzaImg[8].style.width = `${width}px`
//            pizzaImg[8].style.height = `${height}px`
 
//            if(width == 140){
//              smallPizza[8].style.pointerEvents = 'none';
//              averagePizza[8].style.pointerEvents = 'auto';
//              bigPizza[8].style.pointerEvents = 'auto';
//               pore[8].style.marginBottom = '80px'
//               clearInterval(Interval);
//               };
//           } 
//     }, 5)
//     }
 
//  averagePizza[8].onclick = () => {
//        PizzaPrice[8].textContent = '57000 сум'
//        let width = pizzaImg[8].clientWidth;
//        let height = pizzaImg[8].clientHeight;
 
//        let  Interval =  setInterval( () => {
//           if(pore[8].style.marginBottom ==  '' || c == pore[8].style.marginBottom){
//              width--
//              height--
//              pizzaImg[8].style.width = `${width}px`
//              pizzaImg[8].style.height = `${height}px`
//           }
 
//           if(pore[8].style.marginBottom == a){
//              width++
//              height++
//              pizzaImg[8].style.width = `${width}px`
//              pizzaImg[8].style.height = `${height}px`
//             } 
            
//              if(width == 180){
//                 averagePizza[8].style.pointerEvents = 'none';
//                 smallPizza[8].style.pointerEvents = 'auto';
//                 bigPizza[8].style.pointerEvents = 'auto';
//                 pore[8].style.marginBottom = '40px'
//                 clearInterval(Interval)
//              }
//           }, 5)
//  }
 
//  bigPizza[8].onclick = () => {
 
//     PizzaPrice[8].textContent = '80000 сум'
//     let width = pizzaImg[8].clientWidth;
//     let height = pizzaImg[8].clientHeight;
 
//     let Interval = setInterval( () => {
 
//        if(price[8].textContent == '80000 сум' && b == pore[8].style.marginBottom ||  a == pore[8].style.marginBottom){
//           width++
//           height++
//           pizzaImg[8].style.width = `${width}px`
//           pizzaImg[8].style.height = `${height}px`
//        }
          
//        if(width == 220){
//           smallPizza[8].style.pointerEvents = 'auto';
//           averagePizza[8].style.pointerEvents = 'auto';
//           bigPizza[8].style.pointerEvents = 'none';
//           pore[8].style.marginBottom = c;
//           clearInterval(Interval);
//        }
//  }, 5)
//  }
// // --------------------------------------------------------------
// smallPizza[9].onclick = () => {
//     PizzaPrice[9].textContent = '35000 сум'
//      let width = pizzaImg[9].clientWidth;
//      let height = pizzaImg[9].clientHeight;
 
//      let  Interval =  setInterval( () => {
          
//        if(price[9].textContent == '35000 сум' && c == pore[9].style.marginBottom || pore[9].style.marginBottom == '' ){
//           width--
//           height--
//           pizzaImg[9].style.width = `${width}px`
//           pizzaImg[9].style.height = `${height}px`
//           if(width == 140){
//              smallPizza[9].style.pointerEvents = 'none';
//              averagePizza[9].style.pointerEvents = 'auto';
//              bigPizza[9].style.pointerEvents = 'auto';
//              pore[9].style.marginBottom = '80px';
//              clearInterval(Interval);
//              };
//        }
       
//        if(price[9].textContent == '35000 сум' && b == pore[9].style.marginBottom){
//            width--
//            height--
//            pizzaImg[9].style.width = `${width}px`
//            pizzaImg[9].style.height = `${height}px`
 
//            if(width == 140){
//              smallPizza[9].style.pointerEvents = 'none';
//              averagePizza[9].style.pointerEvents = 'auto';
//              bigPizza[9].style.pointerEvents = 'auto';
//               pore[9].style.marginBottom = '80px'
//               clearInterval(Interval);
//               };
//           } 
//     }, 5)
//     }
 
//  averagePizza[9].onclick = () => {
//        PizzaPrice[9].textContent = '57000 сум'
//        let width = pizzaImg[9].clientWidth;
//        let height = pizzaImg[9].clientHeight;
 
//        let  Interval =  setInterval( () => {
//           if(pore[9].style.marginBottom ==  '' || c == pore[9].style.marginBottom){
//              width--
//              height--
//              pizzaImg[9].style.width = `${width}px`
//              pizzaImg[9].style.height = `${height}px`
//           }
 
//           if(pore[9].style.marginBottom == a){
//              width++
//              height++
//              pizzaImg[9].style.width = `${width}px`
//              pizzaImg[9].style.height = `${height}px`
//             } 
            
//              if(width == 180){
//                 averagePizza[9].style.pointerEvents = 'none';
//                 smallPizza[9].style.pointerEvents = 'auto';
//                 bigPizza[9].style.pointerEvents = 'auto';
//                 pore[9].style.marginBottom = '40px'
//                 clearInterval(Interval)
//              }
//           }, 5)
//  }
 
//  bigPizza[9].onclick = () => {
 
//     PizzaPrice[9].textContent = '80000 сум'
//     let width = pizzaImg[9].clientWidth;
//     let height = pizzaImg[9].clientHeight;
 
//     let Interval = setInterval( () => {
 
//        if(price[9].textContent == '80000 сум' && b == pore[9].style.marginBottom ||  a == pore[9].style.marginBottom){
//           width++
//           height++
//           pizzaImg[9].style.width = `${width}px`
//           pizzaImg[9].style.height = `${height}px`
//        }
          
//        if(width == 220){
//           smallPizza[9].style.pointerEvents = 'auto';
//           averagePizza[9].style.pointerEvents = 'auto';
//           bigPizza[9].style.pointerEvents = 'none';
//           pore[9].style.marginBottom = c;
//           clearInterval(Interval);
//        }
//  }, 5)
//  }