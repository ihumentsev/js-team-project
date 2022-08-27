const wrapperPreloader = document.querySelector('.wrapper')
function preloader (){
    setTimeout(()=>{
        wrapperPreloader.classList.add('ishidden')
    }, 1500)
}
preloader ();