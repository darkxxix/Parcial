//log in
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginButton").addEventListener("click", function() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        

        console.log("Usuario ingresado:", username);
        console.log("Contraseña ingresada:", password);
        
        if (/^[a-zA-Z0-9]{5,}$/.test(username) && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
          console.log("¡Usuario y contraseña válidos!");
        } else {
          console.log("El usuario o la contraseña no son válidos.");
        }
    
    });
    
    document.getElementById("signupButton").addEventListener("click", function() {
     
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("signupFormContainer").style.display = "block";
    });
    
    document.getElementById("cancelButton").addEventListener("click", function() {
        window.location.href = "parci.html";
    });

    document.getElementById("cancelRegistrationButton").addEventListener("click", function() {
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("signupFormContainer").style.display = "none";
    });

    document.getElementById("registerButton").addEventListener("click", function() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var estrato = document.getElementById("estrato").value;
        var fechaNacimiento = document.getElementById("fechaNacimiento").value;
        var grupoSanguineo = document.getElementById("grupoSanguineo").value;
        var genero = document.querySelector('input[name="genero"]:checked');
        var actividadesFavoritas = document.querySelectorAll('input[name="actividadesFavoritas"]:checked');
        
        var nameRegex = /^[a-zA-Z\s]+$/;
        var phoneRegex = /^\d{10}$/;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (nameRegex.test(firstName) && nameRegex.test(lastName) && phoneRegex.test(phone) && emailRegex.test(email) && fechaNacimiento !== "" && grupoSanguineo !== "" && genero && actividadesFavoritas.length >= 1 && actividadesFavoritas.length <= 4) {
            console.log("Nombres:", firstName);
            console.log("Apellidos:", lastName);
            console.log("Teléfono:", phone);
            console.log("Email:", email);
            console.log("Estrato:", estrato);
            console.log("Fecha de Nacimiento:", fechaNacimiento);
            console.log("Grupo Sanguíneo:", grupoSanguineo);
            console.log("Género:", genero.value);
            console.log("Actividades Favoritas:");
            actividadesFavoritas.forEach(function(actividad) {
                console.log("- " + actividad.value);
            });
        } else {
            alert("Por favor, complete todos los campos correctamente.");
        }
    });
} )