const token = localStorage.getItem("token");
console.log(token);

const navbar = document.getElementById("my_navbar");
const dropdown = document.getElementById("menu-dropdown2");

if(token){
    const liJeu = document.createElement("li");
    liJeu.classList.add("nav-item");
        const aJeu = document.createElement("a");
        aJeu.href="/jeu/start";
        aJeu.innerText="Jouer";
        aJeu.classList.add("nav-link");
    liJeu.appendChild(aJeu);
    navbar.appendChild(liJeu);

    const liProfil = document.createElement("li");
        const aProfil = document.createElement("a");
            aProfil.classList.add("dropdown-item");
            aProfil.href="/profil";
            aProfil.innerHTML="Profil";
        liProfil.appendChild(aProfil);

    const hr = document.createElement("hr");
    hr.classList.add("bg-dark");

    const liLogout = document.createElement("li");
        const aLogout = document.createElement("a");
            aLogout.classList.add("dropdown-item");
            aLogout.href="/";
            aLogout.innerText="Deconnexion";
            aLogout.addEventListener("click", function(){
                localStorage.clear();
                document.location.href = "/";
            });
        liLogout.appendChild(aLogout);

    dropdown.appendChild(liProfil);
    dropdown.appendChild(hr);
    dropdown.appendChild(liLogout);

}else{
    const liSignup = document.createElement("li");
        const aSignup = document.createElement("a");
            aSignup.classList.add("dropdown-item");
            aSignup.setAttribute("href", "/signup");
            aSignup.innerHTML="Inscription";
        liSignup.appendChild(aSignup);

    const hr = document.createElement("hr");
    hr.classList.add("bg-dark");

    const liSignin = document.createElement("li");
        const aSignin = document.createElement("a");
            aSignin.classList.add("dropdown-item");
            aSignin.setAttribute("href", "/signin");
            aSignin.innerText="Connexion";
        liSignin.appendChild(aSignin);

    dropdown.appendChild(liSignup);
    dropdown.appendChild(hr);
    dropdown.appendChild(liSignin);

}
