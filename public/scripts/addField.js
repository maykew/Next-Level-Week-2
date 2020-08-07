//Procura botao
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)


//Executa uma acao
function cloneField(){

    //Duplicar campos
    //Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Esta duplicando com valores - limpar campos
    //Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })

    //Colocar na pagina
    //Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}