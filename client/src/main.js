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
      headers: {
        'Content-Type': 'application/json',
      },
    },
    body: JSON.stringify({ message }),
  });
};

form.addEventListener('submit', handleSubmit);
