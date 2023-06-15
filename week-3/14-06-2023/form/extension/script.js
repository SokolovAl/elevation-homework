const nameInput = document.getElementById("nameInput");
const salaryInput = document.getElementById("salaryInput");
const birthdayInput = document.getElementById("birthdayInput");
const phoneInput = document.getElementById("phoneInput");
const submitButton = document.getElementById("submitBtn");
const errorContainer = document.getElementById("errorContainer");
const form = document.getElementById("container");

submitButton.addEventListener("click", validate);

function validate(event) {

    event.preventDefault();

    const name = nameInput.value;
    const salary = salaryInput.value;
    const birthday = birthdayInput.value;
    const phone = phoneInput.value;

    let errorMsg = "";

    clearErrorMessages();

    if (name === "") {
        errorMsg = "Name is missing";
        displayErrorMessages(errorMsg);
        return;
    }

    if (name.length < 2) {
        errorMsg = "Name must be longer than 2 characters";
        displayErrorMessages(errorMsg);
        return;
    }

    if (!/^[a-zA-Z]+$/.test(name)) {
        errorMsg = "Name must only contain letters";
        displayErrorMessages(errorMsg);
        return;
    }

    if (salary < 10000 || salary > 16000) {
        errorMsg = "Salary must be greater than 10,000 and less than 16,000";
        displayErrorMessages(errorMsg);
        return;
    }

    if (birthday === "") {
        errorMsg = "Birthday may not be null";
        displayErrorMessages(errorMsg);
        return;
    } else {
        const currentDate = new Date();
        const selectedDate = new Date(birthday);
        if (selectedDate > currentDate) {
            errorMsg = "Birthday cannot be in the future";
            displayErrorMessages(errorMsg);
            return;
        }
    }

    if (isNaN(phone) || phone.length !== 10) {
        errorMsg = "Phone must be 10 digits long";
        displayErrorMessages(errorMsg);
        return;
    }

    form.style.display = "none";

    const welcomeMessage = document.createElement("p");
    welcomeMessage.innerHTML = `Welcome, ${name}!`;
    document.body.appendChild(welcomeMessage);
}

function clearErrorMessages() {
    errorContainer.innerHTML = "";
}

function displayErrorMessages(errorMsg) {
    const errorMessage = document.createElement("p");
    errorMessage.innerHTML = errorMsg;
    errorMessage.setAttribute("class", "error");
    errorContainer.appendChild(errorMessage);
}

