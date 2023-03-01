var result = document.getElementById("result")
var select = document.getElementById("radioBox")

function getValue(){
    const value = parseFloat(document.querySelector("#valueInput").value)
    return value
}

select.addEventListener("click", function getForm(){
    var option = document.querySelector('input[name="formulary"]:checked').value
    if(isNaN(getValue())){
        return;
    }
    if(option == "mm") {
        const number = getValue() * 1000
        result.innerText = number + " MILÍMETROS"
    }
    else if(option == "cm"){
        const number = getValue() * 100
        result.innerText = number + " CENTÍMETROS"
    }
    else if(option == "dm"){
        const number = getValue() * 10
        result.innerText = number + " DECÍMETROS"
    }
    else if(option == "dam"){
        const number = getValue() / 10
        result.innerText = number + " DECÂMETROS"
    }
    else if(option == "hm"){
        const number = getValue() / 100
        result.innerText = number + " HECTÔMETROS"
    }
    else if(option == "km"){
        const number = getValue() / 1000
        result.innerText = number + " QUILÔMETROS"
    }
})



