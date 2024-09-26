function showDishDetails(name, description, price) {
    const parentRestaurant = event.target.closest('.restaurant');
    const detailsContainer = parentRestaurant.querySelector('.dish-details');
    const images = parentRestaurant.querySelectorAll('.dish-image');
    
    clearPreviousDetails();
    images.forEach(image => image.style.transform = 'scale(1)');  // Reset all images
    
    event.target.style.transform = 'scale(1.3)';  // Enlarge selected image
    
    detailsContainer.innerHTML = `
      <h3>${name}</h3>
      <p style="color: black;">${description}</p>
      <p style="color: black;"><strong>Price: $${price.toFixed(2)}</strong></p>
    `;
  
    detailsContainer.classList.add('active');  // Show the dish details
    detailsContainer.scrollIntoView({ behavior: 'smooth' });  // Smooth scroll to the description
}
  
function clearPreviousDetails() {
    const allDetails = document.querySelectorAll('.dish-details');
    const allImages = document.querySelectorAll('.dish-image');
    
    allDetails.forEach(detail => detail.innerHTML = '');
    allDetails.forEach(detail => detail.classList.remove('active'));  // Hide previous details
    
    allImages.forEach(image => image.style.transform = 'scale(1)');
}

document.querySelectorAll('.dish-image').forEach(image => {
    image.addEventListener('click', clearPreviousDetails);
});


  