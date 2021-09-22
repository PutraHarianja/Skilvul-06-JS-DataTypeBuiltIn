console.log("SOAL 1");

function is_Blank(str){
    return (str.length === 0);
}


console.log(is_Blank(''));
console.log(is_Blank('abc'));

console.log("SOAL 2");

function truncate_string(str, num) {
    return str.substr(0, 5);
}

console.log(truncate_string("Terra Skilvul",5));

console.log("SOAL 3");

function firstNameOnly(fullname) {
    const myStr = fullname.split(" ");
    return (myStr[0] + " " + myStr[1].substr(0, 1));
}

console.log(firstNameOnly("David Winalda"));


console.log("SOAL 4");

function capitalize(kalimat) {
    kata = kalimat.split(" ");

    for (let i = 0; i < kata.length; i++) {
        kata[i] = kata[i][0].toUpperCase() + kata[i].substr(1);
    }

    return kata.join(" ");
}

console.log(capitalize('javascript adalah sebuah bahasa pemrograman yang sangat powerful'));



console.log("SOAL 5");

function text_truncate(str, length = 100, ending = "...") {
    kalimat = str.substr(0, length);
    return kalimat.concat(ending);
}


console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))