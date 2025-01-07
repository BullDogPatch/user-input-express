const form = document.querySelector('#messageForm');
console.log(form);

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const message = formData.get('message');
  // const formValues = Object.fromEntries(formData);

  fetch('http://localhost:8080/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });
  console.log(message);
  form.reset();

  const successMessage = document.querySelector('.success-message');
  setTimeout(() => {
    successMessage.textContent = 'Your message has been sent';
    successMessage.style.display = 'block';
  }, 100);

  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 2000);
};

form.addEventListener('submit', handleSubmit);
