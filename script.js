const toggleButton = document.getElementById('toggleimg');

const rootElement = document.documentElement;

toggleButton.addEventListener('click', () => {

    if(toggleButton.src.includes("sun.png")){

        toggleButton.src = "moon.png";

    }else{
        
        toggleButton.src = "sun.png";
    }

    if (rootElement.hasAttribute('data-theme')) {
        rootElement.removeAttribute('data-theme');
    } else {
        rootElement.setAttribute('data-theme', 'light');
    }



});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio automático do formulário
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    
    // Validação básica
    if (!name || !email || !phone || !message) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Regex para validação de email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    // Exibir mensagem de sucesso
    document.getElementById("successMessage").style.display = "block";

    // Limpar o formulário após exibir a mensagem de sucesso
    document.getElementById("contactForm").reset();

    // Esconder a mensagem de sucesso após alguns segundos
    setTimeout(() => {
        document.getElementById("successMessage").style.display = "none";
    }, 3000);
});

// Formatação do telefone para padrão brasileiro
document.getElementById("phone").addEventListener("input", function(event) {
    let input = event.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    input = input.substring(0, 11); // Limita a 11 dígitos

    if (input.length > 10) {
        input = `(${input.substring(0, 2)}) ${input.substring(2, 7)}-${input.substring(7, 11)}`;
    } else if (input.length > 6) {
        input = `(${input.substring(0, 2)}) ${input.substring(2, 6)}-${input.substring(6, 10)}`;
    } else if (input.length > 2) {
        input = `(${input.substring(0, 2)}) ${input.substring(2)}`;
    }

    event.target.value = input; // Atualiza o campo com a formatação
});

