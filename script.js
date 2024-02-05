const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_5dy08nc';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Your message successfully send!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});



// JavaScript
let isNightMode = false;

function toggleNightMode() {
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    isNightMode = !isNightMode;

    sunIcon.classList.toggle('hidden', isNightMode);
    moonIcon.classList.toggle('hidden', !isNightMode);

    document.body.classList.toggle('night-mode', isNightMode);
}
