const wrapperPreloader = document.querySelector('.wrapper')
export default function preloader (){
    setTimeout(()=>{
        wrapperPreloader.classList.add('ishidden') 
    }, 1500)
}