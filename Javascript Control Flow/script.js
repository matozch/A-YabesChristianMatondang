//Praktik Numb1 //
for (let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa");
}

// Praktik Numb2 //
for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}

// Praktik Numb3 // 
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++) { 
    console.log(i, people[i]);
}
//selesai js control flow

//Javascript Exeption


//set interval()
function SetTime(){
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
}
setInterval(SetTime, 1000);
console.log("program selesai!");
//selesai set interval()
