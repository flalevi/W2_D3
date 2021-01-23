console.log("This is the message from the external JS file")

function sum(number1, number2) {
    return number1 + number2
}

function noParameter() {
console.log("Hey, I'm running!")

}

function someParameters(p1, p2, p3, p4) {
    console.log("The parameters are: ", p1,p2,p3,p4)
}

function calculateTotal(firstProductPrice, secondProductPrice, thirdProductPrice) {
// let firstProductPrice = 100
// let secondProductPrice = 200
// let thirdProductPrice = 300

let total = sum(firstProductPrice, secondProductPrice)
total = sum(total, thirdProductPrice)
//return firstProductPrice + secondProductPrice + thirdProductPrice
return total
}

function withCallback (param1, param2, cb){
    let result = sum(param1, param2)
    cb(result)
}

function isGreaterThan5(number) {
    return number > 5
}

function calculateTotalOrder(total, isLocalShipping) {
    let freeShippingPromo = 50

    if ((total >= freeShippingPromo) && (isLocalShipping === true)) {
        return total
    }
    else {
        return total + 10
    }
}

function calculateTotalOrderPrime(total, isPrimeMember) {
    let freeShippingPromo = 50

    if ((total >= freeShippingPromo) || (isPrimeMember === true)) {
        return total
    }
    else {
        return total + 10
    }
}

function printTheArray(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i])
    }
//    while(names.length > 0) {
//        console.log(names.shift())
//    }
}

function sumTheFirstNumbers(n) {
    let total = 0;
    for(let i = 1; i < n; i++) {
        total = total + i
    }
    return total
}

function changeMe(x) {
    x = x * 2
}

function changeMeNonPrimitive(x) {
    x.changed = true
}

function addTask() {
    // read the content of the myText textbox
    let text = document.querySelector("#myText").value

    // create a new List Item into the myList list
    let myList = document.querySelector("#myList")
    myList.innerHTML += "<li>" + text + "</li>"

    //myList.innerHTML = myList.innerHTML +
}
