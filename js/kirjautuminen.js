function showlogin() {

    document.getElementByID("registeration-form").classList.add("hidden");

    document.getElmentById("login-form").classList.remove("hidden");
}

function showRegister() {

    document.getElementById("registeration-form").classList.remove("hidden")

    document.getElementById("login-form").classList.add("hidden")
}