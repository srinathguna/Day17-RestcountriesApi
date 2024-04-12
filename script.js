"use strict";
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
    class: "col-xl-12 d-flex flex-wrap"
}))
document.body.appendChild(divElement)
divElement.appendChild(rowElement)
rowElement.appendChild(colElement)

//fetching the details
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
    .then(data => {
        data.map((item) => {            
            const cardcolElement = (createElement("div", {
                class: "col-xl-3 col-lg-4 col-md-6 col-sm-12"
            }))
            colElement.appendChild(cardcolElement)

            const cardElement = (createElement("div", {
                class: "card"
            }))
            cardcolElement.appendChild(cardElement)



            const headElement = (createElement("h1", {
                class: "text-center",
                id: 'title'
            }))
            cardElement.appendChild(headElement)       
            
            headElement.innerHTML = `${item.name.common}`

            const imgElement = (createElement("img", {
                class: "text-center",
                img: "img-fluid",
                src: `${item.flags.png}`
            }))
            cardElement.appendChild(imgElement)            

            const capitalElement = (createElement("span", {
                class: "text-center",
                id: 'capital'
            }))
            cardElement.appendChild(capitalElement)    
            capitalElement.innerHTML = `Capital: ${item.capital}`

            const regionElement = (createElement("span", {
                class: "text-center",
                id: 'region'
            }))
            cardElement.appendChild(regionElement)    
            regionElement.innerHTML = `Region: ${item.region}`

            const countrycodeElement = (createElement("span", {
                class: "text-center",
                id: 'countrycode'
            }))
            cardElement.appendChild(countrycodeElement)    
            countrycodeElement.innerHTML = `Region: ${item.countrycode}`

        })
        console.log(data)
    })
    .catch(error => console.error('Error fetching data:', error)); // Add error handling


            const Card = document.querySelectorAll('.card')
            Card.addEventListener('click',()=> {
                alert('welcome')
            })