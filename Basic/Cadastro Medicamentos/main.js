//Cria o array medicamento com os dados cadastrado pelas tags input
var medicamento = [];

function lerdados() {
    let newMedicamento = {
        "MedicamentoName": document.getElementById('name').value,
        "MedicamentoQtd": document.getElementById('qtd').value,
        "MedicamentoPrice": document.getElementById('price').value,
        "MedicamentoClass": document.getElementById('class').value,
    }
    medicamento.push(newMedicamento);
    remover();
    retornandoDados();
}

console.log(medicamento);

//Remove as TAGs do forumlário mas mante a TAG div para poder preencher novos dados
function remover() {

    for (let i = 0; i < 4; i++) {
        let elem = document.querySelector("#form");
        let label = document.querySelector("#form label")
        let input = document.querySelector("#form input")

        elem.removeChild(label);
        elem.removeChild(input);
    }

    // let div = document.querySelector("#card")
    // let form = document.querySelector("#card form")

    // div.removeChild(form);    
}

//Adicionando dados do produto cadastrado no Array no card

function retornandoDados() {
    let card = document.getElementById("card");

    let form = document.getElementById("form");

    let h2 = document.createElement("h2");
    let ul = document.createElement("ul");

    let text = "Novo medicamento adicionado!";

    h2.innerText = text;
    card.appendChild(h2)
    form.style.background = "white"
    form.style.margin = "50px"
    form.style.padding = "50px"
    form.style.fontSize = "25px"
    form.style.textAlign = "center"

    form.appendChild(ul)

    function createLi(text){
        let li = document.createElement("li")
        li.innerText = text
        li.style.listStyle = "none"
        ul.appendChild(li)
    }
    text = medicamento[0].MedicamentoName
    createLi(text);
    text = medicamento[0].MedicamentoQtd
    createLi(text);
    text = medicamento[0].MedicamentoPrice
    createLi(text);
    text = medicamento[0].MedicamentoClass
    createLi(text);

        
}

