import { showModal, hideModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const closeButton = document.getElementById('close-model');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    showModal();
  });

  closeButton.addEventListener('click', () => {
    hideModal();
  });
});
