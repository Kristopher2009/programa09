let res = document.getElementById ('resposta')

function principal(){
    let volts = Number(document.getElementById(`volts`).value)
    let placas = Number(document.getElementById(`placas`).value)

    let KHw =  (volts / placas) * 4.6 * 0.75 * 0.12

    console.log(KHw)
    res.innerHTML = ``
    res.innerHTML += `A energia consumida por cada placa será de: ${KHw.toFixed(2)} KWh`
}

