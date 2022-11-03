const loadProducts = () => {
  for (let i = 1; i < 10; i++) {
    const card = document.createElement('div');
    card.textContent= 'Product Loaded';
    card.classList.add('product-card');
    container.append(card);
  }
}
const container = document.getElementById('product-container');

loadProducts(); // Page Initial load

/* Intersection observer */
const observer = new IntersectionObserver(entries => {
    const lastCard = entries[0];
    if (lastCard.isIntersecting) { // To check Last card enter into viewport
      loadProducts(); // Page end load product
      observer.unobserve(lastCard.target);
      observer.observe(document.querySelector(".product-card:last-child"));
    }
}, {
  rootMargin: '20px' // Load products before 20px on page end
});

observer.observe(document.querySelector(".product-card:last-child")); // Observe last card

