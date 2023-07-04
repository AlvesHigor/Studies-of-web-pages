document.getElementById('card').style.setProperty('display', 'none', 'important')
    function procurar(){
        document.getElementById('card').style.setProperty('display', 'block', 'important')
        let pais = document.getElementById('pais').value
        let finalUrl = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
        fetch(finalUrl)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data[0])
            console.log(data[0].population)
            console.log(data[0].capital)
            console.log(data[0].continents[0])

            let bandeira = document.getElementById('bandeira')
            let nome = document.getElementById('nome')
            let capital = document.getElementById('capital')
            let pop = document.getElementById('pop')
            let cont = document.getElementById('cont')

            nome.innerHTML = pais
            capital.innerHTML = data[0].capital
            cont.innerHTML = data[0].continents
            pop.innerHTML = data[0].population
            bandeira.src = data[0].flags.svg
        })
    }