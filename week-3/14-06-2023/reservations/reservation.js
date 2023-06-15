const reservations = {
    bob: {claimed: false}, ted: {claimed: true}
};

const checkBtn = document.getElementById("check");

checkBtn.onclick = () => checkReservation();

function checkReservation() {
    const name = document.getElementById("input").value.toLowerCase();

    if (reservations[name]) {
        if (reservations[name].claimed) {
            alert("Hmm, someone already claimed this reservation");
        } else {
            alert(`Welcome, ${name}`);
        }
    } else {
        alert(`You have no reservation`);
    }
}
