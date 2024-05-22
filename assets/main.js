function toggleMenu() {
    var menu = document.querySelector('.mobileMenu');
    var menuToggle = document.querySelector('.menuToggle');
    var menuLinks = menu.querySelectorAll('a'); // Seleciona todos os links do menu

    menu.classList.toggle('active'); // Adiciona ou remove a classe 'active' no menu
    menuToggle.classList.toggle('active'); // Adiciona ou remove a classe 'active' no ícone do menu

    // Adiciona um event listener para cada link do menu
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            menu.classList.remove('active'); // Remove a classe 'active' do menu ao clicar em um link
            menuToggle.classList.remove('active'); // Remove a classe 'active' do ícone do menu ao clicar em um link
        });
    });
}


function openWhatsApp() {
    // Número de telefone
    var phoneNumber = "393517751621"; // Altere para o número de telefone desejado
    
    // Mensagem pré-definida
    var message = encodeURIComponent("Ciao, vorrei ottenere maggiori informazioni.");

    // Cria o link do WhatsApp com o número e a mensagem pré-definida
    var link = "whatsapp://send?phone=" + phoneNumber + "&text=" + message;

    // Abre o WhatsApp com o link criado
    window.open(link);
}
