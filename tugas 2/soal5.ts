const str: string = "iqbaal";
let reversed: string = str.split('').reverse().join('');

if (str === reversed) {
    console.log(true);
} else {
    console.log(false);
}
