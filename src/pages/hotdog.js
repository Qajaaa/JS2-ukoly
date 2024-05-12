
export const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
];

export const renderToppings = () => {
    let toppingsHTML = '';
    toppings.forEach(topping => {
        const isSelectedClass = topping.selected ? 'topping--selected' : '';
        toppingsHTML += `
            <div class="topping ${isSelectedClass}">
                <h3>${topping.name}</h3>
                <p>Cena: ${topping.price} Kč</p>
            </div>
        `;
    });

    const toppingContainer = document.getElementById('toppings-container');
    toppingContainer.innerHTML = toppingsHTML;

    const clickActions = document.querySelectorAll('.topping');
    clickActions.forEach((action, index) => {
        action.addEventListener('click', () => {
            toggleTopping(index);
            renderToppings(); 
        });
    });
};

export const toggleTopping = (index) => {
    if (toppings[index]) {
        toppings[index].selected = !toppings[index].selected;
    }
};
