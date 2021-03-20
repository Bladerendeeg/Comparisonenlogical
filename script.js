const myAge = 24;
const name = "Bram";
const totalamount = "516";

if (myAge > 18 && myAge < 25) {
    console.log("Je krijgt 50% korting!")
} else {
    console.log("Je krijgt geen korting!");
}

if (name === "Sarah" || name === "Bram") {
    console.log("Gratis bier!");
} else {
    console.log("Betaal voor bier!");
}

if (totalamount > 25 && totalamount < 50) {
    console.log("Gratis bitterballen");
} else if (totalamount > 50 && totalamount < 100) {
    console.log("Gratis portie nachos");
} else if (totalamount > 100) {
    console.log("Gratis Champagne");
}