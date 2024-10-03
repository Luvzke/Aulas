function calcular() {
    var txtv = window.document.querySelector('input#txtvel') 
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua Velocidade atual é de ${vel} KM/H`
    if (vel > 100) {
        res.innerHTML = `Você ultrapassou a velocidade de ${vel} MULTADO HAHAHAHAHAHA!!!!`
    }
    res.innerHTML += `<p>Diriga sempre com sinto de Segurança!</p>`
}

function questionar() {
    var país = document.getElementById('txtna').value
    if (país != 'Brasil') {
        res.innerHTML = 'Você é Estrangeiro!'
    } else {
        res.innerHTML = 'Você é Brasileiro!'
    }
}


 /*       
var país = 'Brasil'
res.innerHTML = `Vivendo em ${país}`
if (país != 'Brasil') {
    res.innerHTML = 'Você é Estrangeiro!'
} else {
    res.innerHTML = 'Você é Brasileiro'
}
*/