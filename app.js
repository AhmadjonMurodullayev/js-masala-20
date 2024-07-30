// 104.Berilgan ob'ekt ichidagi barcha qiymatlar 
// yig'indisini toping (faqat son qiymatlarni).
function sumObjectValues(obj) {
    let sum = 0
    for(let key in obj){
        if(typeof obj[key] == 'number'){
            sum += obj[key]
        }else{
            sum += sumObjectValues(obj[key])
        }
    }
    return sum
    
}

// Test case
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};
console.log(sumObjectValues(obj)); 
// Output: 6

// 105.Berilgan massiv ichidagi 
// elementlarni n qadamga chapga siljiting.
function rotateArrayLeft(arr, n) {
       let nem = arr.splice(0,n)
       return arr.concat(nem)
}

// Test case
console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2)); 
// Output: [3, 4, 5, 1, 2]

// 106.Berilgan satr ichidagi barcha raqamlarni olib tashlang.
function removeDigits(str) {
     let nuw_str = []
     for(let i = 0; i < str.length; i++){
         if(isNaN(str[i])){
             nuw_str += str[i]
         }
     }
     return nuw_str
}

// Test case
console.log(removeDigits("abc123def456")); 
// Output: "abcdef"


//107. Berilgan massivdan faqat toq 
// indekslaridagi elementlarni qaytaring.
function oddIndexedElements(arr) {
     let nuw_arr = []
     for(let i = 0; i < arr.length; i++){
         if(i % 2 !== 0){
             nuw_arr.push(arr[i])
         }
     }
     return nuw_arr
}

// Test case
console.log(oddIndexedElements([1, 2, 3, 4, 5, 6])); 
// Output: [2, 4, 6]



// 108.Berilgan ob'ekt ichidagi barcha son 
// qiymatlarni ikki baravar oshiring.
function doubleValues(obj) {
    let nuw_obj = {};
     for (let key in obj) {
         if (typeof obj[key] == 'number') {
             nuw_obj[key] = obj[key] * 2
             ;
         } else {
             nuw_obj[key] =  doubleValues(obj[key])
         }
     }
     return nuw_obj
}

// Test case
const objs = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};
console.log(doubleValues(objs)); 
// Output: { a: 2, b: { c: 4, d: { e: 6 } } }

// 109.Berilgan ob'ekt ichidagi kalit-qiymat 
// juftliklarini arrayga aylantiring.
function objectToArray(obj) {
     let nuw_arr = []
     for(let key in obj){
         nuw_arr.push([key,obj[key]])
     }
     return nuw_arr
}

// Test case
const obja = {
    a: 1,
    b: 2,
    c: 3
};
console.log(objectToArray(obja)); 
// Output: [["a", 1], ["b", 2], ["c", 3]]

// 110.Berilgan ob'ekt ichidagi barcha kalitlarni 
// ularning qiymati bo'yicha tartiblang.
function sortKeysByValue(obj) {
    let nuw_obj = {}
    let nuw_arr = []
    for(let key in obj){
        nuw_arr.push([key,obj[key]])
    }
    nuw_arr.sort((a,b) => a [1] - b[1])
    for(let i = 0; i < nuw_arr.length; i++){
        nuw_obj[nuw_arr[i][0]] = nuw_arr[i][1]
    }
    return nuw_obj
}

// Test case
const objk = {
    a: 3,
    b: 1,
    c: 2
};
console.log(sortKeysByValue(objk)); 
// Output: { b: 1, c: 2, a: 3 }