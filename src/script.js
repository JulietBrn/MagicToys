document.addEventListener("DOMContentLoaded", function () {
  /* animation */
  const animItems = document.querySelectorAll("h2, h1, .product, .review ");
  const classAnimation = "magic"; //set class animation
  if (animItems.length) {
    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classAnimation);
          observer.unobserve(entry.target);
        }
      });
    }
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });
    animItems.forEach((animation) => {
      observer.observe(animation);
    });
  }
});
