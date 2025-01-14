export function loadMenuPage() {
    const content = document.getElementById('content');
    content.innerHTML = ''; 

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const heading = document.createElement('h1');
    heading.textContent = "Our Menu";
    menuDiv.appendChild(heading);

    const menuCategories = [
        {
            category: "Appetizers",
            items: [
                { name: "Vegetable Samosa", price: "£3.50", description: "Crispy pastry filled with spiced vegetables." },
                { name: "Fish Cutlets", price: "£4.00", description: "Golden-brown fish patties with Sri Lankan spices." },
            ],
        },
        {
            category: "Main Dishes",
            items: [
                { name: "Chicken Curry", price: "£8.50", description: "Traditional chicken curry with aromatic spices." },
                { name: "Vegetable Kottu", price: "£7.50", description: "Finely chopped roti mixed with spiced vegetables." },
                { name: "Mutton Curry", price: "£9.50", description: "Tender mutton cooked in a rich, flavorful gravy." },
            ],
        },
        {
            category: "Desserts",
            items: [
                { name: "Watalappam", price: "£4.00", description: "A creamy coconut and jaggery pudding." },
                { name: "Milk Toffee", price: "£3.00", description: "Sweet and chewy treat made with condensed milk." },
            ],
        },
        {
            category: "Drinks",
            items: [
                { name: "Mango Lassi", price: "£3.50", description: "Refreshing mango yogurt drink." },
                { name: "Ceylon Tea", price: "£2.50", description: "Freshly brewed Sri Lankan black tea." },
            ],
        },
    ];

    menuCategories.forEach((category) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('menu-category');

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.category;
        categoryDiv.appendChild(categoryTitle);

        category.items.forEach((item) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');

            const itemName = document.createElement('h3');
            itemName.textContent = item.name;

            const itemPrice = document.createElement('span');
            itemPrice.textContent = item.price;
            itemPrice.classList.add('menu-price');

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;

            itemDiv.appendChild(itemName);
            itemDiv.appendChild(itemPrice);
            itemDiv.appendChild(itemDescription);
            categoryDiv.appendChild(itemDiv);
        });

        menuDiv.appendChild(categoryDiv);
    });

    content.appendChild(menuDiv);
}
