
const wrapperPreloader = document.querySelector('.preloader')
export default window.onload = function (){
    setTimeout(()=>{
        wrapperPreloader.style.opacity = '0';
        setTimeout(()=>{
            wrapperPreloader.classList.add('ishidden');  
        }, 200)
    }, 1000)
}



// window.onload = function () {
//     document.body.classList.add('loaded_hiding');
//     window.setTimeout(function () {
//       document.body.classList.add('loaded');
//       document.body.classList.remove('loaded_hiding');
//     }, 500);
//   }


