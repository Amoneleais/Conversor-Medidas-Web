var result = document.getElementById("result")
var select = document.getElementById("radioBox")
var value = document.getElementById("valueInput")
const watermark = document.getElementById("watermark")

function getValue(){
    const value = parseFloat(document.querySelector("#valueInput").value)
    return value
}

watermark.addEventListener("click", function openTab() {
    window.open("https://github.com/Amoneleais", "_blank").focus()
})


value.addEventListener("click", function deselect() {
    var option = document.querySelector('input[name="formulary"]:checked').checked = false
    result.innerText = ""
})

select.addEventListener("click", function getForm(){
    var option = document.querySelector('input[name="formulary"]:checked').value
    if(isNaN(getValue())){
        result.innerText = ""
        return;
    }
    if(option == "mm") {
        const number = getValue() * 1000
        result.innerText = number + " milímetros"
    }
    else if(option == "cm"){
        const number = getValue() * 100
        result.innerText = number + " centímetros"
    }
    else if(option == "dm"){
        const number = getValue() * 10
        result.innerText = number + " decímetros"
    }
    else if(option == "dam"){
        const number = getValue() / 10
        result.innerText = number + " decâmetros"
    }
    else if(option == "hm"){
        const number = getValue() / 100
        result.innerText = number + " hectômetros"
    }
    else if(option == "km"){
        const number = getValue() / 1000
        result.innerText = number + " quilômetros"
    }
})



