const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true },
};

const name = prompt("Please enter the name for your reservation");

if (reservations.hasOwnProperty(name)) {
    if (reservations[name].claimed) {
        alert("Hmm, someone already claimed this reservation");
    } else {
        alert(`Welcome, ${name}`);
    }
} else {
    alert("You have no reservation");
}
