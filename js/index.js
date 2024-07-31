// 1-masala
// function findLongStr(arg){
//     let long = arg[0]
//     for(let i = 1; i < arg.length; i++){
//         if(long.length < arg[i].length){
//             long = arg[i]
//         }
//     }
//     return long
// }
// console.log(findLongStr(['salom', 'xayr', 'bolalar', 'yaxshimisizlar']));

// 2-masala
// function addArrStr(arg){
//     return arg.join(' ')
// }
// console.log(addArrStr(['salom', 'bolalar', 'yaxshimisizlar']));

// 3-masala
// function hammasiniKattaQilish(arg){
//     return arg.map(function(value){
//         return value.toUpperCase()
//     })
// }
// console.log(hammasiniKattaQilish(['salom', 'xayr']));

// 4-masala
// function kopaytmasiniTop(arg){
//     let res = 1
//     for (const i of arg) {
//         res *= i
//     }
//     return res
// }
// console.log(kopaytmasiniTop([4, 2, 3, 5]));

// 5-masala
// function 

// 6-masala
// function reverseArr(arg){
//     let res = []
//     for (const i of arg) {
//         res.unshift(i)
//     }
//     return res
// }
// console.log(reverseArr([1, 2, 3, 4, 5]));

// 7-masala
// function creatIndexArr(arg){
//     let res = []
//     for(let i = 0; i < arg.length; i++){
//         res.push(i)
//     }
//     return res
// }
// console.log(creatIndexArr([12, 23, 34, 15]));

// 8-masala
// function findPromptIndexArr(arg, num){
//     let res 
//     for(let i = 0; i < arg.length; i++){
//         if(num == arg[i]){
//             res = i
//         } else{
//             return arg
//         }
//     }
//     return res
// }
// console.log(findPromptIndexArr([4, 5, 3, 6, 2], 2));

// 9-masala
// function creatNewArr(arg){
//     return arg.map(function(value){
//         return value + 2
//     })
// }
// console.log(creatNewArr([1, 2, 3, 5, 4]));

// 10-masala
// function splitTwoArr(arg){
//     let couple = []
//     let odd = []
//     for (let i = 0; i < arg.length; i++) {
//         if(arg[i] >= 0){
//             couple.push(arg[i])
//         }else{
//             odd.push(arg[i])
//         }
//     }
//     return {musbat: couple, manfiy: odd}
// }
// console.log(splitTwoArr([1, -2, 3, -4, -5, 6]));

// 11-masala
// function takrorlashArr(arg, num){
//     let res = []
//     for(let i = 0; i < num; i++){
//         for(let j = 0; j < arg.length; j++){
//             res.push(arg[j])
//         }
//     }
//     return res
// }
// console.log(takrorlashArr([1, 2, 3], 2));

// 12-masala
// function stringaAylantirishArr(arg){
//     let res = []
//     for (let i = 0; i < arg.length; i++) {
//         res[i] = String(arg[i])
//     }
//     return res
// }
// console.log(stringaAylantirishArr([12, 23, 4, 56]));

// 13-masala
// function juftIndex(arg){
//     let res = []
//     for(let i = 0; i < arg.length; i += 2){
//         res.push(arg[i])
//     }
//     return res
// }
// console.log(juftIndex([1, 2 ,3, 4, 5, 6]));

// 14-masala
// function countOddNumberArr(arg){
//     let count = 0
//     for (const i of arg) {
//         if(i % 2 == 1){
//             count++
//         }
//     }
//     return count
// }
// console.log(countOddNumberArr([12, 2, 3, 4, 5, 9]));

// 15-masala
// function splitMaxAndMinArr(arg){
//     let max = []
//     let min = []
//     let maxNum = arg[0]
//     for (const i of arg) {
//         if(maxNum < i){
//             max.push(i)
//         }
//     }
    // let minNum = arg[0]
    // for (const j of arg) {
    //     if(minNum > j){
    //         minNum = j
    //         min.push(minNum)
    //     }
    // }
//     return {max, min}
// }
// console.log(splitMaxAndMinArr([2, 5, 8, 7, 4, 1, 10]));

// 16-masala
// function repeatArr(arg){
//     let res = []
//     for (const i of arg) {
//         res.push(i)
//         res.push(i)
//     }
//     return res
// }
// console.log(repeatArr([123, 234, 345]));

// 17-masala
// function 

// 18-masala
// function qoshipStringQilish(arg, value){
//     return arg.map(item => item + value).join(', ')
    
// }
// console.log(qoshipStringQilish([2, 3, 4], 5));

// 19-masala
// function stringOLish(arg){
//     let res = []
//     for (const i of arg) {
//         if(typeof i === 'string'){
//             res.push(i)
//         }
//     }
//     return res
// }
// console.log(stringOLish([12, 'salom', true, 45, 'xayr']));

// // 20-masala
// function stringOLish(arg){
//     let res = 0
//     for (const i of arg) {
//         if( i == ''){
//             res++
//         }
//     }
//     return res
// }
// console.log(stringOLish([12, '', 'salom', true, 45, '', 'xayr']));

// 21-masala
// function teskariQilishArr(arg){
//     let res = []
//     for(let i = arg.length - 1; i >= 0; i--){
//         res.push(arg[i])
//     }
//     return res
// }
// console.log(teskariQilishArr([1, 2, 3, 'salom']));

// 22-masala
// function sqrtElement(arg){
//     return arg.map(item => Math.sqrt(item))
// }
// console.log(sqrtElement([4, 9, 25, 64]));

// 23-masala
// function slitePositivAndNegativ(arg){
//     let pos = []
//     let neg = []
//     for (const i of arg) {
//         if(i >= 0){
//             pos.push(i)
//         }else{
//             neg.push(i)
//         }
//     }
//     return {musbat: pos, manfiy: neg}
// }
// console.log(slitePositivAndNegativ([-1, 2, 5, -6, -7, 4]));

// 24-masala
// function slitCoupleAndOdd(arg){
//     let couple = []
//     let odd = []
//     for (let i = 0; i <arg.length; i++) {
//         if(i % 2 == 0){
//             couple.push(arg[i])
//         }else{
//             odd.push(arg[i])
//         }
//     }
//     return {toq: couple, juft: odd}
// }
// console.log(slitCoupleAndOdd([-1, 2, 5, -6, -7, 4]));

// 25-masala
// function foktarial(num){
//     if(num === 0 || num === 1){
//         return 1
//     }
//     let res = 1
//     for (let i = 1; i <= num; i++) {
//         res *= i
//     }
//     return res
// }
// function foktarialArr(arg){
//     return arg.map(foktarial)
// }
// console.log(foktarialArr([2, 3, 4, 5]));





