
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const mainIcon = document.getElementById("mainIcon");

const bottomLabel = document.getElementById("bottomLabel");
const switchButton = document.getElementById("switchButton");

let signupMode = false;

function switchMode() {
    signupMode = !signupMode;

    loginForm.classList.toggle("active", !signupMode);
    signupForm.classList.toggle("active", signupMode);

    if (signupMode) {
        title.textContent = "Create Account";
        subtitle.textContent = "Join us and start your journey";
        bottomLabel.textContent = "Already have an account?";

        mainIcon.className = "fa-solid fa-user-plus";
        switchButton.innerHTML = '<i class="fa-solid fa-minus"></i>';
        switchButton.setAttribute(
            "aria-label",
            "Return to login"
        );
    } else {
        title.textContent = "Welcome";
        subtitle.textContent = "Login to continue your journey";
        bottomLabel.textContent = "Don't have an account?";

        mainIcon.className = "fa-solid fa-lock";
        switchButton.innerHTML = '<i class="fa-solid fa-plus"></i>';
        switchButton.setAttribute(
            "aria-label",
            "Create an account"
        );
    }
}

switchButton.addEventListener("click", switchMode);

// Afficher ou masquer le mot de passe
document.querySelectorAll(".toggle-password").forEach((icon) => {
    icon.addEventListener("click", () => {
        const input = icon.parentElement.querySelector("input");

        if (input.type === "password") {
            input.type = "text";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            input.type = "password";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
    });
});

// Démonstration de la connexion
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Le formulaire est rempli. La connexion nécessite un serveur.");
});

// Vérification de l'inscription
signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = signupForm.elements.password.value;
    const confirmPassword =
        signupForm.elements.confirmPassword.value;

    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
    }

    alert("Formulaire valide ! Il reste à configurer la création du compte.");
});

// Mot de passe oublié
document.getElementById("forgot").addEventListener("click", (event) => {
    event.preventDefault();
    alert("La réinitialisation du mot de passe reste à configurer.");
});
