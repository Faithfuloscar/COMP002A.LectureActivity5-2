// selector for button element
const button = document.getElementById('Alert');

// defines the function for the button click event
const buttonHandler = () => {
    // displays an alert when the button is clicked
    alert("button clicked!");

    // removes the event listener after the first click
    button.removeEventListener('click', buttonHandler);
};

// Attaches the click event listener to the button
button.addEventListener('click', buttonHandler);

// selector for the link element
const link = document.getElementById('Coding-phrase');

// Attaches click event listener to the link
link.addEventListener('click', (event) =>{

    // prevent the default behavior
    event.preventDefault();

    // shows an alert
    alert("No distractions! I'm coding");
});