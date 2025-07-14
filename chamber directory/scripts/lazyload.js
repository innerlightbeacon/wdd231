// scripts/lazyload.js

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img[data-src]");
  
    const loadImage = (image) => {
      image.setAttribute("src", image.getAttribute("data-src"));
      image.onload = () => image.removeAttribute("data-src");
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });
  
    images.forEach((img) => observer.observe(img));
  });
  