const imput1 = document.getElementById("score_elemet1")//intanciar los audis 
const imput2 = document.getElementById("score_elemet2")
const imput3 = document.getElementById("score_elemet3")
const score = JSON.parse(localStorage.getItem("score"))//..
const arrayElement = [imput1, imput2, imput3]// agrpar en una array 


if (score && score !== {}) {        //primera validacion si existe scora
    imput1.setAttribute("value", score.item0 || 1)//si existe llena los datos si no 1
    imput2.setAttribute("value", score.item1 || 1)
    imput3.setAttribute("value", score.item2 || 1)
}
//recorrer el arregklo creado 
arrayElement.map((element, idx) => {
    element.addEventListener("change", (e) => { //ejecutar evente de cambio //cahge escribri //
        console.log(e)
        window.setTimeout(() => {// tiempo en q se ejecuta

            llenar(idx, element.value)
        }, 500)//500 tiempo de ejecucion 
    })

    element.parentElement.children[0].addEventListener("click", (e) => {
        console.log(e)
        window.setTimeout(() => {

            llenar(idx, element.value)
        }, 500)
    })
    element.parentElement.children[2].addEventListener("click", (e) => {
        console.log(e)
        window.setTimeout(() => {

            llenar(idx, element.value)
        }, 500)
    })
})

function llenar(key, value) {// llena el local storage 

    const score = JSON.parse(localStorage.getItem("score"))
    const newScore = { ...score, ["item" + key]: value }
    localStorage.setItem("score", JSON.stringify(newScore))


}
