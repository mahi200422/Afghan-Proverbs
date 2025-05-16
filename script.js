document.addEventListener('DOMContentLoaded', function() {
    const proverbCards = document.querySelectorAll('.proverb-card');

    proverbCards.forEach(card => {
        const expandButton = card.querySelector('.expand-button');
        const details = card.querySelector('.proverb-details');

        expandButton.addEventListener('click', function() {
            details.classList.toggle('open');
            expandButton.classList.toggle('open');
        });
    });
});