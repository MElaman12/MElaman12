let signBtn = document.querySelector('.sign');
let blurBlock  = document.querySelector('.blur-block')

signBtn.onclick = () => {
    event.preventDefault();
    blurBlock.style.top = '0%'
}