const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.36
const euro = 5.16

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const valueText = document.getElementById('value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if(select.value === 'US$ Dólar americano'){
        valueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }
    if (select.value === '€ Euro'){
        valueText.innerHTML = Intl.NumberFormat('de-DE',
         { style: 'currency', currency: 'EUR' }
         ).format(inputReais / euro)
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')
    
    
    if(select.value === 'US$ Dólar americano'){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./img/estados-unidos.svg"
    }

    if (select.value === '€ Euro'){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./img/euro.svg"
        button.addEventListener("click", convertValues)
    }

}


button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)