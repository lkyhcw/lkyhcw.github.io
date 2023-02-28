function login_form() {
    var form = document.loginf;

    form.action = "/loginok";
    form.method = "POST";
    form.submit();
}

function enterkey() {
    if (window.event.keyCode == 13) {
        login_form();
    }
}
