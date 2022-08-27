import modal from './templates/modal.hbs';

const eventList = document.querySelector('.js-event-list');
const modalContainer = document.querySelector('.modal');

const onOpenModal = async e => {
  e.preventDefault();
};

eventList.addEventListener('click', onOpenModal);
