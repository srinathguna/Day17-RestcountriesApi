"use strict";
const key = '5f0e2a2f632a9a7b0360e57f1d274da9'

function createElement(tagName, attribute = {}) {
    let Element = document.createElement(tagName)
    for (let attributeName of Object.keys(attribute)) {
        Element.setAttribute(attributeName, attribute[attributeName]);
    }
    return Element
}
const divElement = (createElement("div", {
    class: "container"
}))
const rowElement = (createElement("div", {
    class: "row" 
}))
const colElement = (createElement("div", {
    class: "col col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex flex-wrap"
}))
document.body.appendChild(divElement)
divElement.appendChild(colElement)
divElement.appendChild(rowElement)

const modalElement = (createElement("div", {
    class: "text-center popup",
    id: 'modal',
}))
document.body.appendChild(modalElement)

const dialogmodalElement = (createElement("div", {
    class: "text-center popupinner",
    id: 'dialogmodal',
}))
modalElement.appendChild(dialogmodalElement)

const tempElement = (createElement("h4", {
    class: "text-center",
    id: 'temp'
}))
dialogmodalElement.appendChild(tempElement);

const descElement = (createElement("h4", {
    class: "text-center",
    id: 'temp'
}))
dialogmodalElement.appendChild(descElement);

const windElement = (createElement("h4", {
    class: "text-center",
    id: 'temp'
}))
dialogmodalElement.appendChild(windElement);

const okbtnElement = (createElement("button", {
    class: "btn btn-primary col-xl-6 text-center",
    id: 'button',
    value: 'Ok'
}))
okbtnElement.innerHTML = "Ok"
dialogmodalElement.appendChild(okbtnElement);

modalElement.addEventListener('click', () => {
    modalElement.classList.remove('style');
})
dialogmodalElement.addEventListener('click', (e) => {
    e.stopPropagation()
})
okbtnElement.addEventListener('click', () => {
    modalElement.classList.remove('style');
})

//fetching the details
fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
        data.map((item) => {
            const cardcolElement = (createElement("div", {
                class: "col col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12"
            }))
            rowElement.appendChild(cardcolElement)

            const cardElement = (createElement("div", {
                class: "card col-xl-12 my-2"
            }))
            cardcolElement.appendChild(cardElement)

            const headElement = (createElement("div", {
                class: "card-header text-center",
                id: 'title'
            }))
            cardElement.appendChild(headElement)

            headElement.innerText = item.name.common
            
            const cardbodyElement = (createElement("div", {
                class: "card-body text-center",
                id: 'title'
            }))
            cardElement.appendChild(cardbodyElement)

            const imgElement = (createElement("img", {
                class: "card-img-top text-center img-fluid",
                src: item.flags.png,
                alt: `${item.flag}`
            }))
            cardbodyElement.appendChild(imgElement)
            const capitalElement = (createElement("span", {
                class: "text-center",
                id: 'capital'
            }))
            cardbodyElement.appendChild(capitalElement)
            capitalElement.innerHTML = `Capital: ${item.capital}`

            const regionElement = (createElement("span", {
                class: "text-center",
                id: 'region'
            }))
            cardbodyElement.appendChild(regionElement)
            regionElement.innerHTML = `Region: ${item.region}`

            const countrycodeElement = (createElement("span", {
                class: "text-center",
                id: 'countrycode'
            }))
            cardbodyElement.appendChild(countrycodeElement)
            countrycodeElement.innerHTML = `population: ${item.population}`

            const weatherBtn = (createElement("button", {
                class: "btn btn-primary text-center weather",
                id: 'weatherbtn',
            }))
            cardElement.appendChild(weatherBtn)
            weatherBtn.innerHTML = `Click for Weather`

            weatherBtn.addEventListener('click', () => {
                modalElement.classList.add('style');
                // alert('welcome')
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${item.latlng[0]}&lon=${item.latlng[1]}&appid=${key}`)
                    .then(res => res.json())
                    .then(data => {
                        tempElement.innerHTML = `<label>Temperature:</label> ${data.main.temp}`
                        descElement.innerHTML = `<label>Weather:</label>${data.weather[0].description}`
                        windElement.innerHTML = `<label>Windspeed:</label>${data.wind.speed}`
                    })
            })

        })
        console.log(data)
    })
    .catch(error => console.error('Error fetching data:', error)); // Add error handling