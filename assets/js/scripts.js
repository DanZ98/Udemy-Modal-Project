// retrieving classes
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// Add click event to add open-modal class
modalBtn.addEventListener('click', function(){
    modalOverlay.classList.add('open-modal');
});

// Add click event to remove open-modal class
closeBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('open-modal');
});