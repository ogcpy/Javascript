export function loadAboutPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('opening-times')
    aboutDiv.innerHTML = 
    '<h2>About Us</h2><p>At Appe Amma, we bring the heart of Sri Lanka to your plate. Our mission is to share the vibrant flavors, rich spices, and warm hospitality that define Sinhala cuisine.</p><p>Every dish is crafted with love, using authentic recipes passed down through generations, paired with the freshest ingredients. Whether you\'re craving a hearty rice and curry, fragrant kottu, or sweet treats like watalappam, our menu is a celebration of Sri Lanka’s culinary heritage.</p><b>Come and experience the essence of Sinhala culture—where every meal tells a story and every guest is family.</b>';
    
    content.appendChild(aboutDiv)
}