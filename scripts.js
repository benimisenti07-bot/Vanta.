const qualifyForm = document.getElementById('qualifyForm');
const qualifyMessage = document.getElementById('qualifyMessage');

if (qualifyForm) {
  qualifyForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(qualifyForm);
    const hasEmpty = Array.from(formData.entries()).some(([, value]) => String(value).trim() === '');

    if (hasEmpty) {
      qualifyMessage.textContent = 'Please complete each field to continue.';
      qualifyMessage.classList.remove('form__message--success');
      qualifyMessage.classList.add('form__message--error');
      return;
    }

    qualifyMessage.textContent = "Thank you for applying. You'll hear from our team shortly.";
    qualifyMessage.classList.remove('form__message--error');
    qualifyMessage.classList.add('form__message--success');
    qualifyForm.reset();
  });
}

const contactForm = document.getElementById('contactForm');
const contactMessageStatus = document.getElementById('contactMessageStatus');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const hasEmpty = Array.from(formData.entries()).some(([, value]) => String(value).trim() === '');

    if (hasEmpty) {
      contactMessageStatus.textContent = 'Fill in each detail so we can respond with intent.';
      contactMessageStatus.classList.remove('form__message--success');
      contactMessageStatus.classList.add('form__message--error');
      return;
    }

    contactMessageStatus.textContent = 'Thank you. Our strategists will reach back within one business day.';
    contactMessageStatus.classList.remove('form__message--error');
    contactMessageStatus.classList.add('form__message--success');
    contactForm.reset();
  });
}
