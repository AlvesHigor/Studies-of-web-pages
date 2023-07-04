function tabuada(){
    var num = window.document.getElementById('num')
    var endPoint = window.document.getElementById('endPoint')
    if(num.value.length == 0 || endPoint.value.length == 0){
        window.alert('[ERRO] Confira os seus dados')
    } else {
        var n = Number(num.value)
        var e = Number(endPoint.value)
        var x = 0
        var r = ''
        var res = window.document.getElementById('resposta')
        res.innerHTML = `A tabuada do ${n} é: <br>`
        do{
            r = n*x
            res.innerHTML += `${x} X ${n} = ${r}<br>`
            x++
        }while(x<= e)
    }
}