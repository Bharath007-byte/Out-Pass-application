document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('outpassForm');
  const modal = document.getElementById('responseModal');
  const responseMessage = document.getElementById('responseMessage');
  const closeBtn = modal.querySelector('.close');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = form.name.value.trim();
    const enrollment = form.enrollment.value.trim()

    if (name === '' || enrollment === '') {
      alert('Please fill out all required fields.');
      return;
    }

    responseMessage.innerHTML = `
      <strong>Out Pass Request Submitted Successfully!</strong><br />
      <br />
      <strong>Name:</strong> ${name}<br />
      <strong>Enrollment No:</strong> ${enrollment}
    `;

    modal.style.display = 'flex';

    form.reset();

    responseMessage.focus();
  });

  function closeModal() {
    modal.style.display = 'none';
    
    form.querySelector('button[type="submit"]').focus();
  }

  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
      closeModal();
    }
  });
});
