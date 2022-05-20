// let string = "hhhaaahahahaa"

// console.log("Stringimiz: - ",string);

// let ca = string.charAt(1)

// console.log(ca);
// let h = string.charCodeAt(0)
// let a = string.charCodeAt(1)

// console.log("Umumi stringin uzunlugu: ",string.length);

// console.log("Stringin 1ci elementinin(yeni 0-ci indexi) deyeri - ",h);
// console.log("Stringin 2ci elementinin(yeni 1-ci indexi) deyeri - ",a);

// let count1 = 0;

// for (let i = 0; i < string.length; i++) {
//     if (string.charCodeAt(i) == 97) {
//         count1++;
//     }
// }

// console.log("a-nin uzunlugu",count1);

// ------------------Dynamic--------------------


let strPrompt = prompt("Her hansi bir soz daxil edin")
let char = prompt(" Qeyd etdiyiniz Sozde her hansi bir simvol secin ve hemin simvolun nece defe yazildigini oyrenin")

let numb = char.charAt(0);
// console.log("Qeyd etdiyinin simvol: ", numb);

let charCount = 0;
let count = 0;
let charCodePrompt;
let c = 0;

for (let i = 0; i < strPrompt.length; i++) {
    let charCode = strPrompt.charAt(i);
    console.log("qeyd etdiyiniz simvollar: ", charCode);
    if (numb == charCode) {
        charCodePrompt = charCode;
    }
    else if (numb == undefined) {
        console.log("Daxil etdiyiniz simvol qeyd olunan metn-de yoxdur");
    }
}

console.log("Qeyd etdiyiniz soz {", strPrompt, "}");
console.log("qeyd olunan sozun uzunlugu", strPrompt.length);
console.log("qeyd olunan simvol: |", char, "|");

for (let index = 0; index < strPrompt.length; index++) {
    if (strPrompt.charAt(index) == charCodePrompt) {
        charCount++;
    }
}
console.log("qeyd etdiyiniz simvolun sayi: ", charCount);

//------------------------------herfin sayi


let arr = [];
let ch;


for (let j = 0; j < strPrompt.length; j++) {

    arr.push(strPrompt.charAt(j))

}


// let charRepeats = function (strPrompt) {
//     for (let i = 0; i <= strPrompt.length; i++) {
//         for (let j = i + 1; j <= strPrompt.length; j++) {
//             if (strPrompt[j] == strPrompt[i]) {
//                 console.log(strPrompt[j]);
//                 console.log(strPrompt[i]);

//                 return false;

//             }
//         }
//     }
//     return true;
// }

// console.log(charRepeats(strPrompt));

// let mode = {
//     first: ch
// }
// console.log(mode);



// console.log(ch);
console.log(arr);


// -=-=-=-=-=-= herflerin sayini gosteren method

function findDuplicates() {
    let obj = {
        word: "",
        uniqueChar: "",
        uniqueCount: 0,
        duplicates: 0
    };

    for (let i = 0; i < strPrompt.length; i++) {
        obj.word += strPrompt[i];

        if (obj.uniqueChar.indexOf(strPrompt[i]) < 0) {
            obj.uniqueChar += strPrompt[i];
            obj.uniqueCount++;
        }
        else {
            obj.duplicates++;
        }
    }
    if (obj.duplicates > 0) {
        console.log(strPrompt, " sozunde ", obj.duplicates, " eded simvol tekrari var");
    }

    // obj.uniqueChar = obj.unique.replace(/[&\/\\#,_+()$~%.'":*?<>]/g, '');
    // obj.uniqueChar = obj.unique.split('').sort().join('');

    return obj;
}

console.log(findDuplicates(strPrompt));


//  Artiq olanlari secib ayirir

const getRepeatedChars = (strPrompt) => {
    let chars = {};
    for (let char of strPrompt) {
        chars[char] = (chars[char] || 0) + 1;
    }
    return Object.entries(chars).filter(char => char[1] > 1).map(char => char[0]);
}
console.log("Tekrar Olunan Simvollar: ", getRepeatedChars(strPrompt));
//----------------------------------


// Herflerin sayini gosterir

function CharCount(strPrompt) {
    if (strPrompt) {
        let newObj = {};
        for (let i = 0; i < strPrompt.length; i++) {
            if (newObj[strPrompt[i]]) {
                newObj[strPrompt[i]]++
            }
            else {
                newObj[strPrompt[i]] = 1;
            }
        }
        console.log("Sozde olan simvollarin sayi: ", newObj);
    }
}

CharCount(strPrompt)













































