const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener('submit', function (event) {

    event.preventDefault();

    const campoNome = document.querySelector('#nome');
    const errNome = document.querySelector('#errNome');

    if (campoNome.value.length < 3) {
        errNome.innerHTML = 'O nome deve ter pelo menos 3 caracteres.';
        campoNome.focus();
        return;
    } else {
        errNome.innerHTML = '';
    }

    const campoEmail = document.querySelector('#email');
    const errEmail = document.querySelector('#errEmail');

    if (!emailRegex.value.match(campoEmail.value)) {
        errEmail.innerHTML = 'Por favor, insira um e-mail válido.';
        campoEmail.focus();
        return;
    } else {
        errEmail.innerHTML = '';
    }

    const campoSubject = document.querySelector('#subject');
    const errSubject = document.querySelector('#errSubject');

    if (campoSubject.value.length < 5) {
        errSubject.innerHTML = 'O assunto deve ter pelo menos 5 caracteres.';
        campoSubject.focus();
        return;
    } else {
        errSubject.innerHTML = '';
    }

    const campoMensagem = document.querySelector('#mensagem');

    window.alert(`Obrigado, ${campoNome.value}! Formulário foi enviado com sucesso.`);

    campoNome.value = '';
    campoEmail.value = '';
    campoSubject.value = '';
    campoMensagem.value = '';
});