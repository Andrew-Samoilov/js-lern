console.log(" -  * CodeWars - Handshake problem * - ");
console.log();

function getParticipants(handshakes) {
    console.log(handshakes);

    if (handshakes < 3) return handshakes + 1;
    if (handshakes === 3) return handshakes;
    return handshakes - 2;
}

console.log(getParticipants(205761), 642);
console.log(getParticipants(1), 2);
console.log(getParticipants(3), 3);
console.log(getParticipants(7), 5);