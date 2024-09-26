let mealPlan = [];
let totalPrice = 0;

function addToMealPlan(dishName, dishPrice) {
    let existingDish = mealPlan.find(dish => dish.name === dishName);
    
    if (existingDish) {
        existingDish.quantity += 1;
    } else {
        mealPlan.push({ name: dishName, price: dishPrice, quantity: 1 });
    }

    totalPrice += dishPrice;
    renderMealPlan();
}

function removeFromMealPlan(index) {
    totalPrice -= mealPlan[index].price * mealPlan[index].quantity;

    mealPlan.splice(index, 1);
    renderMealPlan();
}

function increaseQuantity(index) {
    mealPlan[index].quantity += 1;
    totalPrice += mealPlan[index].price;
    renderMealPlan();
}

function decreaseQuantity(index) {
    if (mealPlan[index].quantity > 1) {
        mealPlan[index].quantity -= 1;
        totalPrice -= mealPlan[index].price;
        renderMealPlan();
    }
}

function renderMealPlan() {
    const selectedDishes = document.getElementById('selected-dishes');
    const totalPriceElem = document.getElementById('total-price');
    
    selectedDishes.innerHTML = '';
    
    mealPlan.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} 
        <button onclick="increaseQuantity(${index})">+</button> 
        <button onclick="decreaseQuantity(${index})">-</button> 
        <button onclick="removeFromMealPlan(${index})">Remove</button>`;
        selectedDishes.appendChild(li);
    });

    totalPriceElem.textContent = totalPrice.toFixed(2);
}
