
const cards = document.querySelectorAll('.category-cards .card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#A9C3A2';
    });

    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '#8B5E3C';
    });
   
