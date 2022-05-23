// Task 1 Static

// Sozdeki herflerin sayini gosteren method


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

// let strPrompt = prompt("Her hansi bir soz daxil edin")
// let char = prompt(" Qeyd etdiyiniz Sozde her hansi bir simvol secin ve hemin simvolun nece defe yazildigini oyrenin")

// let numb = char.charAt(0);
// // console.log("Qeyd etdiyinin simvol: ", numb);

// let charCount = 0;
// let count = 0;
// let charCodePrompt;
// let c = 0;

// for (let i = 0; i < strPrompt.length; i++) {
//     let charCode = strPrompt.charAt(i);
//     console.log("qeyd etdiyiniz simvollar: ", charCode);
//     if (numb == charCode) {
//         charCodePrompt = charCode;
//     }
//     else if (numb == undefined) {
//         console.log("Daxil etdiyiniz simvol qeyd olunan metn-de yoxdur");
//     }
// }

// console.log("Qeyd etdiyiniz soz {", strPrompt, "}");
// console.log("qeyd olunan sozun uzunlugu", strPrompt.length);
// console.log("qeyd olunan simvol: |", char, "|");

// for (let index = 0; index < strPrompt.length; index++) {
//     if (strPrompt.charAt(index) == charCodePrompt) {
//         charCount++;
//     }
// }
// console.log("qeyd etdiyiniz simvolun sayi: ", charCount);


// // sozdeki herfleri bir arraye yigib array formasinda geri qaytarmaq ucun

// let arr = [];

// for (let j = 0; j < strPrompt.length; j++) {

//     arr.push(strPrompt.charAt(j))
// }

// console.log(arr);


// // -=-=-=-=-=-= herflerin sayini gosteren method

// function findDuplicates() {
//     let obj = {
//         word: "",
//         uniqueChar: "",
//         uniqueCount: 0,
//         duplicates: 0
//     };

//     for (let i = 0; i < strPrompt.length; i++) {
//         obj.word += strPrompt[i];

//         if (obj.uniqueChar.indexOf(strPrompt[i]) < 0) {
//             obj.uniqueChar += strPrompt[i];
//             obj.uniqueCount++;
//         }
//         else {
//             obj.duplicates++;
//         }
//     }
//     if (obj.duplicates > 0) {
//         console.log(strPrompt, " sozunde ", obj.duplicates, " eded simvol tekrari var");
//     }

//     // obj.uniqueChar = obj.unique.replace(/[&\/\\#,_+()$~%.'":*?<>]/g, '');
//     // obj.uniqueChar = obj.unique.split('').sort().join('');

//     return obj;
// }

// console.log(findDuplicates(strPrompt));


// //  Artiq olanlari secib ayirir

// const getRepeatedChars = (strPrompt) => {
//     let chars = {};
//     for (let char of strPrompt) {
//         chars[char] = (chars[char] || 0) + 1;
//     }
//     return Object.entries(chars).filter(char => char[1] > 1).map(char => char[0]);
// }
// console.log("Tekrar Olunan Simvollar: ", getRepeatedChars(strPrompt));
// //----------------------------------


// // Herflerin sayini gosterir

// function CharCount(strPrompt) {
//     if (strPrompt) {
//         let newObj = {};
//         for (let i = 0; i < strPrompt.length; i++) {
//             if (newObj[strPrompt[i]]) {
//                 newObj[strPrompt[i]]++
//             }
//             else {
//                 newObj[strPrompt[i]] = 1;
//             }
//         }
//         console.log("Sozde olan simvollarin sayi: ", newObj);
//     }
// }

// CharCount(strPrompt)



// Task 1 End


//----------------------


// Task 2 Start

// Bir class yaradirsiz ve o classin icerisinde plus, minus, multiply, divide functionlari olur.
// var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)
// resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile (riyazi prinsibi unudun,
// vurma bolme onceliyine ehtiyac yoxdu) 
// 39 olmalidi


// class CustomMatch {
//     constructor(numb) {
//         this.numb = numb
//     }

//     Plus(numb) {
//         this.numb += numb;
//         return this;
//     }

//     Minus(numb) {
//         this.numb -= numb;
//         return this;
//     }

//     Multiply(numb) {
//         this.numb *= numb;
//         return this;
//     }

//     Divide(numb) {
//         this.numb /= numb;
//         return this;
//     }

//     toString() {
//         return this.numb;
//     }
// }

// let result = new CustomMatch(50).Plus(6).Minus(30).Multiply(3).Divide(2);

// console.log(result.toString());


// Task 2 End


//----------------------------


// Task 3 Start

// Custom bir array classi yaradin. Hemin arrayin find ve push metodu olsun. Taski ishleyib turn in edin.


// class CustomArray {
//     constructor(arr) {
//         this.arr = arr;
//     }
//     Push(numb) {
//         let count = 0;
//         for (let i = 0; i < this.arr.length; i++) {
//             count++;
//         }
//         this.arr[count] = numb;
//         return this.arr;
//     }
//     Find(numb) {
//         for (let i = 0; i < this.arr.length; i++) {
//             if (numb == this.arr[i]) {
//                 return this.arr[i];
//             }
//         }
//         return -1;
//     }

// }
// let array = new CustomArray([5, 15, 25, 35]);
// console.log(array.Push(45));

// console.log(array.Find(25));

// Task 3 End































