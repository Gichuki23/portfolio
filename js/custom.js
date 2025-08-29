// Custom JS for Patrick Gichuki Portfolio
// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Project filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => {
            b.classList.remove('bg-indigo-100', 'text-indigo-800');
            b.classList.remove('dark:bg-indigo-900', 'dark:text-indigo-200');
        });
        btn.classList.add('bg-indigo-100', 'text-indigo-800');
        btn.classList.add('dark:bg-indigo-900', 'dark:text-indigo-200');

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Set first filter button as active by default
if (filterBtns.length > 0) {
    filterBtns[0].classList.add('bg-indigo-100', 'text-indigo-800');
    filterBtns[0].classList.add('dark:bg-indigo-900', 'dark:text-indigo-200');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});
