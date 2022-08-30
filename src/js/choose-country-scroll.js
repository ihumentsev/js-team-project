const dropDownBtn = document.querySelector('.js-dropbtn');
const ulDropDownEl = document.querySelector('.country__list');
const dropDownItemEl = document.querySelector('.country__item');
dropDownBtn.addEventListener('click', onBtnClickOpenDropDown);

function onBtnClickOpenDropDown(event) {
    event.stopPropagation();
  ulDropDownEl.classList.toggle('is-shown');
  ulDropDownEl.addEventListener('click', onCoutryItemClickChoose);
console.log(ulDropDownEl)

}
console.log(dropDownBtn.textContent)
function onCoutryItemClickChoose (event) {
    event.stopPropagation();
     if (event.currentTarget == dropDownItemEl){
        dropDownBtn.textContent = dropDownItemEl.textContent;
        ulDropDownEl.classList.remove('is-shown');
    }
    console.log(dropDownItemEl.textContent)
}

window.onclick = function (event) {
    event.stopPropagation();
    if (event.currentTarget !== dropDownItemEl){
        ulDropDownEl.classList.remove('is-shown');
    }

    
}