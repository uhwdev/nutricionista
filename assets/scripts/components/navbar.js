document.addEventListener("DOMContentLoaded", () => {
  const navbarTarget = document.getElementById("navbar-container");

  // Carrega o HTML da navbar de forma assíncrona
  fetch("/assets/components/navbar.html")
    .then((response) => response.text())
    .then((navbarHtml) => {
      // Insere a navbar no container da página
      navbarTarget.innerHTML = navbarHtml;

      // Após injetar a navbar, marca o link ativo
      highlightActiveMenuItem();
    })
    .catch((error) => {
      console.error("Erro ao carregar a navbar:", error);
    });
});

/**
 * Marca como ativa a opção de menu correspondente à URL atual
 */
function highlightActiveMenuItem() {
  const currentPath = window.location.pathname;
  const menuLinks = document.querySelectorAll(".nav-list a");

  menuLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (href === currentPath || currentPath.endsWith(href)) {
      link.classList.add("active");
    }
  });
}
