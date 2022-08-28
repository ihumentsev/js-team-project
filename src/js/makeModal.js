import modal from '../templates/modal.hbs';

const eventList = document.querySelector('.js-event-list');
const modalContainer = document.querySelector('.modal');

const onOpenModal = async e => {
  if (e.target.nodeName === 'UL') return;
  e.preventDefault();
  const itemElId = e.target.closest('li').id;

  console.log(e);
};

eventList.addEventListener('click', onOpenModal);
