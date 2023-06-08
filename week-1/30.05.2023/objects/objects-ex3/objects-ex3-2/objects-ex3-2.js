const reservations = {
    bob: { claimed: false },
    ted: { claimed: true },
};

const name = prompt(
    "Please enter the name for your reservation"
).toLocaleLowerCase();

if (reservations[name]) {
    if (reservations[name].claimed) {
        alert("Hmm, someone already claimed this reservation");
    } else {
        alert(`Welcome, ${name}`);
    }
} else {
    reservations[name] = { claimed: true };
    alert(`Welcome, ${name}. Your reservation has been added.`);
}
