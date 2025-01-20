import image1 from './assets/image1.jpg';
import image2  from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';

export function loadCarousel() {
    const carousel = document.getElementById('carousel');
    const slides = document.createElement('div');
    slides.classList.add('slides');
    
    const images = [image1, image2, image3, image4] //array to hold images for reusability
    //arrow function to show images on DOM
    images.forEach((imageSrc) => {
        const img = document.createElement('img')
        img.src = imageSrc
        slides.appendChild(img)
    })

    const nextBtn = document.createElement('button')
    nextBtn.classList.add('next')
    nextBtn.textContent = '→'
    const prevBtn = document.createElement('button')
    prevBtn.classList.add('prev')
    prevBtn.textContent = '←'

    const dotsHolder = document.createElement('div')
    dotsHolder.classList.add('dots')

    images.forEach((_, index) => {
        const dot = document.createElement('span')
        dot.classList.add('dot')
        if (index === 0) dot.classList.add('active')
            dotsHolder.appendChild(dot)
    })

    carousel.appendChild(slides);
    carousel.appendChild(nextBtn)
    carousel.appendChild(prevBtn)
    carousel.appendChild(dotsHolder)

    let currentIndex = 0

    function showSlide(index) {
        slides.style.transform = `translateX(-${index * 100}%)`
        const dots = document.querySelectorAll('.dot')
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index))
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length
        showSlide(currentIndex)
    })

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length
        showSlide(currentIndex)
    })

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length
        showSlide(currentIndex)
    }, 5000)

    showSlide(currentIndex);
}