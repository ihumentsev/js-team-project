
const wrapperPreloader = document.querySelector('.preloader')
let isEvent = false;
export default function preloader (){
   if ( !isEvent ) {
   isEvent = true;
    setTimeout(()=>{
        wrapperPreloader.style.opacity = '0';
        setTimeout(()=>{
           
            wrapperPreloader.style.display = 'none';
    
        }, 200)
    }, 1500)
}
}

