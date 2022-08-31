
const preloader = document.querySelector('.preloader')
const bodeEl = document.querySelector('body')
export default window.onload = function (){
    setTimeout(()=>{
        preloader.style.opacity = '0';
        bodeEl.style.overflowY = 'visible';
        setTimeout(()=>{
            preloader.classList.add('ishidden');  
            preloader.remove()
        }, 500)
    },400)
}


