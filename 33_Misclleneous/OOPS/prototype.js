//prototype provide default functions to all objects by using prototype refrence and this helps to enhance the OOPS programming

//prototype using single space for multiple objects instead of creating space for each similiar fucntion which reduce space complexity 

arr = [1,2,3,4]
console.log(arr)

arr.sayhello =  () =>{
    console.log(`sayhello`);
}
arr.sayhello() //user defined function not of prototype

// using reference in browser console to change/insert functions in prototype

//.__proto__ is a reference i.e. copy of Prototype
arr.__proto__.push = (n)=>{console.log("pushing number:",n)}
(n)=>{console.log("pushing number:",n)}
arr.__proto__.push(3)

//actual objects
Array.prototype
String.prototype