function calculate() {
    const usrheight = document.getElementById('height').value
    const usrweight = document.getElementById('weight').value
    const usrage = document.getElementById('age').value


    const display = document.getElementById('display')
    const m = usrheight / 100
    const v = document.createElement('div')



    const result = usrweight / (m * m)


    display.innerHTML = `Your bmi is ${result.toFixed(2)}`
    display.style.color = "black"
    display.style.marginTop = "100px"
    display.style.marginLeft = "10px"

    if (result < 18.5) {

        v.textContent = "Underweight"
        v.style.color = "red"
        v.style.fontWeight = "bold"
    }
    if (result < 24.9 && result > 18.5) {
        v.innerHTML = "Normalweight"
        v.style.color = "red"
        v.style.fontWeight = "bold"
    }
    if (result > 25 && result < 29.9) {
        v.innerHTML = "Overweight"
        v.style.color = "red"
        v.style.fontWeight = "bold"

    }
    if (result > 30) {
        v.innerHTML = "Obesity"
        v.style.color = "red"
        v.style.fontWeight = "bold"
    }

    v.style.backgroundColor = "white"
    v.style.width = "130px"
    v.style.borderRadius = "10px"
    v.style.padding = "10px"
    v.style.marginTop = "10px"
    display.appendChild(v)

}
