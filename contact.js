const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();


    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields");
        return;
    }

    fetch('http://localhost:3000/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
    })
    .then((res) => res.json())
    .then((data) => {
        alert(data.message); 
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
    });
});
