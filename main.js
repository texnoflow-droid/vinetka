// Modal functionality for teacher album
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.close-btn');
    const cards = document.querySelectorAll('.card');

    // Open modal when clicking on a card
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const img = this.querySelector('img');
            const name = this.querySelector('.name, .info p');
            const title = this.querySelector('.info h3');

            if (img) {
                modalImg.src = img.src;
                modalImg.alt = img.alt;

                // Set caption based on card type
                if (title && name) {
                    modalCaption.textContent = title.textContent + ' - ' + name.textContent;
                } else if (name) {
                    modalCaption.textContent = name.textContent;
                } else {
                    modalCaption.textContent = img.alt;
                }

                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', function() {
        closeModal();
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        modalImg.src = '';
    }

    // Smooth scroll behavior for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('.card img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});
