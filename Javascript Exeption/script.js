//callback
function myFirst(callback) {
    myDisplayer("Hellow");
    callback();
}
function mySecond(){
    myDisplayer("Goodbye");
}

function myDisplayer(message) {
    console.log(message);
}
myFirst(mySecond);
//selesai callback;

//setTimeout()
console.log("i print first!");
setTimeout(() => {
    console.log("i print after 3 second");
}, 3000);
console.log("i print second!"); 
//Selesai setTimeout()

//SetTime()
function SetTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
}
setInterval(SetTime, 1000);
console.log("program selesai!");
//Selesai SetTime()

//trycatch
// try{
//     let num = 5;
//     num.toUpperCase()
// }
//  catch (error) {
//     console.log('Sebuah error muncul: ' + error.message);
//     throw new Error('Ada error Ketika menjalankan perintah anda!.')
//  }
//selesai trycatch

