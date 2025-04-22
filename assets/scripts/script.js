const pages = document.querySelectorAll(".nav-list a");
const currentUrl = window.location.pathname;

pages.forEach((link) => {
  if (
    link.getAttribute("href") === currentUrl ||
    currentUrl.endsWith(link.getAttribute("href"))
  ) {
    link.classList.add("active");
  }
});
