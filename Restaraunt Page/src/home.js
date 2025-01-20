import hero from './assets/hero.jpg'

export function loadHomePage(){
    const content = document.getElementById('content')
    content.innerHTML = '';

    const heroImg = document.createElement('img')
    heroImg.id = 'hero'
    heroImg.src = hero

    const openingDiv = document.createElement('div')
    openingDiv.classList.add('opening-times')
    const openingTimesTitle = document.createElement('h2')
    openingTimesTitle.textContent = 'Opening Times'
    const openingTimesList = document.createElement('ul')
    const openingTimes = [
        { day: 'Mon', hours: '*CLOSED*'},
        { day: 'Tue', hours: '1PM - 10PM'},
        { day: 'Wed', hours: '1PM - 10PM'},
        { day: 'Thu', hours: '1PM - 10PM'},
        { day: 'Fri', hours: '1PM - 1AM'},
        { day: 'Sat', hours: '1PM - 1AM'},
        { day: 'Sun', hours: '1PM - 1AM'},
    ]
    openingTimes.forEach(({ day, hours}) => {
        const listItem = document.createElement('li')
        listItem.textContent = `${day}: ${hours}`
        openingTimesList.appendChild(listItem)
    })

    const contactDiv = document.createElement('div')
    contactDiv.classList.add('contact')
    const contactUs = document.createElement('h2')
    contactUs.textContent = "Reserve a table"
    const phoneUs = document.createElement('p')
    phoneUs.innerHTML = '<b>email: </b>enquiries@appeamma.co.uk'
    const emailUs = document.createElement('p')
    emailUs.innerHTML = '<b>phone: </b>0123 465 789'

    content.appendChild(heroImg)
    content.appendChild(openingDiv)
    content.appendChild(contactDiv)
    openingDiv.appendChild(openingTimesTitle)
    openingDiv.appendChild(openingTimesList)
    contactDiv.appendChild(contactUs)
    contactDiv.appendChild(phoneUs)
    contactDiv.appendChild(emailUs)
}