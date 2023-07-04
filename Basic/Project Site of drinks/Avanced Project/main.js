var total =0;
function pass(){
    window.location.href = "pag1.html";
}
function noPass(){
    window.location.href = "pag2.html";
}
function listBuy(){
    alert(total);
    let text = total.toString();
    alert(text);
    // document.getElementById("total").innerHTML = text;
    window.location.href = "pag3.html";
}
function qtdItenA(){
    total+=80;
    alert("Vinho adicionado ao carrinho");
}
function qtdItenB(){
    alert("Heineken adicionado ao carrinho");
    total+=20;
}
function qtdItenC(){
    alert("Refrigerante adicionado ao carrinho");
    total+=10;
}
