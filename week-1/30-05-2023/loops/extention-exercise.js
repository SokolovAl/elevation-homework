const dictionary = {
    A: ["Aardvark", "Abacus", "Actually", "Atomic"],
    B: ["Banana", "Bonkers", "Brain", "Bump"],
    C: ["Callous", "Chain", "Coil", "Czech"],
};

for (const key in dictionary) {
    console.log(`Words that begin with ${key}:`);
    for (let i = 0; i < dictionary[key].length; i++) {
        console.log(`   ${dictionary[key][i]}`);
    }
}
