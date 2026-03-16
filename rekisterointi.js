document
    .getElementById("registerForm")
    .addEventListener("submit", function (event) {
          event.preventDefault();
          const name = document.getElementById("name").value;
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;
          const confirmPassword =
            document.getElementById("confirmPassword").value;

          if (password !== confirmPassword) {
            alert("Salasana ei täsmää");
            return;
          }

          const user = {
            name: name,
            username: username,
            password: password,
          };

          localStorage.setItem(username, JSON.stringify(user));
          alert("Rekisteröinti onnistui. Kirjaudu nyt sisään.");
          window.location.href = "profile.html";
        });