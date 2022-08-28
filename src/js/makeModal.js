import doModal from '../templates/modal.hbs';
import axios from 'axios';

import getEvens from './getEvents';

const eventList = document.querySelector('.js-event-list');
const modalContainer = document.querySelector('.js-modal');
const closeModalBtn = document.querySelector('.js-modal-close-btn');

/* async function getEventByID(eventId) {
  const url = 'https://app.ticketmaster.com/discovery/v2/events.json';
  const apiKey = 'w7mmBkK7aLh5F5nZUPuvBPD23VXj8bAs';
  const filter = `?apikey=${apiKey}&id=${eventId}`;
  return await axios.get(`${url}${filter}`).then(res => res.data);
} */

const closeFn = () => {
  const close = () => {
    modalContainer.classList.add('is-hidden');
    modalContainer.innerHTML = '';
    document.body.classList.remove('no-scroll');
    removeEventListener();
  };
  const closeModalContainer = e => {
    if (e.target.dataset.modal !== '') return;
    close();
  };
  const onKeyDownEscape = e => {
    if (e.code !== 'Escape') return;
    close();
  };
  const removeEventListener = () => {
    document.removeEventListener('keydown', onKeyDownEscape);
    closeModalBtn.removeEventListener('click', close);
    modalContainer.removeEventListener('click', closeModalContainer);
  };
  modalContainer.addEventListener('click', closeModalContainer);
  document.addEventListener('keydown', onKeyDownEscape);
  closeModalBtn.addEventListener('click', close);
};

function getIdOnClickEventImg(e) {
  eventId = e.target.id;
  return eventId;
}

function getEventByID(eventId) {
  console.log(eventId);
}

const onOpenModal = async e => {
  if (e.target.nodeName !== 'IMG') return;
  getIdOnClickEventImg(e);
  getEventByID(eventId);

  modalContainer.innerHTML = doModal();

  modalContainer.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
  closeModalBtn.addEventListener('click', onCloseModalBtn);

  /* const onCloseModalBtn = () => {
    modalContainer.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    closeModalBtn.removeEventListener('click', onCloseModalBtn);
  }; */
  closeFn();
};

eventList.addEventListener('click', onOpenModal);
