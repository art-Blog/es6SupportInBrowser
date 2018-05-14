import * as calculator from "./module/calculator.js"

(() => {

    let ans = document.querySelector("#ans")
    let btn = document.querySelector("#btnAdd")

    let handleBtnAdd = () => {
        let num1 = document.querySelector("#num1")
        let num2 = document.querySelector("#num2")
        let val1 = parseInt(num1.value, 10)
        let val2 = parseInt(num2.value, 10)
        let result = calculator.add(val1, val2)
        ans.innerHTML = result
    }

    btn.addEventListener("click", handleBtnAdd)

})()
