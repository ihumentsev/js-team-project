// export default function preloader (){
//     const wrapperPreloader = document.querySelector('.wrapper')
//     setTimeout(()=>{
//         wrapperPreloader.classList.add('ishidden') 
//     }, 1500)
// }

const wrapperPreloader = document.querySelector('.wrapper')
export default function preloader (){
    setTimeout(()=>{

        wrapperPreloader.style.display = 'none';

    }, 1500)
}
preloader ();