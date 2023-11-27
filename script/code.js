// Create function
function convert() {

    let Minutes = parseFloat(document.getElementById('minutes').value);
    let Seconds = (Minutes * 60);
    document.getElementById('seconds').value = Seconds.toFixed(2);
}

// function SecondsConvert(){
//     let Seconds = parseFloat(document.getElementById('seconds').value);
//     let Minutes = (Seconds / 60);
//     document.getElementById('minutes').value = Minutes.toFixed(2);
// }