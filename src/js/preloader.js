const wrapperPreloader = document.querySelector('.wrapper')
function preloader (){
    setTimeout(()=>{

        wrapperPreloader.style.display = 'none';

    }, 1500)
}
preloader ();