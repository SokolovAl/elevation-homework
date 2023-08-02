let firstPiece = {id: 101, name: "Ofri"};
let secondPiece = {country: "Israel"};

let gluedObject = {...firstPiece, ...secondPiece};

console.log(gluedObject);
