// Mostra e Esconde Menu no Mobile

function showMenuMobile() {
  // Sleciona o menu Toogle do Mobile
  const showMenuMobile = document.getElementById("menu-mobile");
  // Chaveia entre menu aberto e fechado conforme o click no botão toogle
  showMenuMobile.classList.toggle("d-none");

  closeMenuMobile = () => {
    // Pega o evento de click no menu de navegação Mobile
    showMenuMobile.addEventListener("click", () =>
      showMenuMobile.classList.add("d-none")
    );
  };
  // Verifica se o menu está aberto e chama a função que vai pegar o evento de click e fechar automaticamente o menu de navegação
  !showMenuMobile.classList.contains("d-none") & closeMenuMobile();
}
