document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    if(localStorage.getItem("kirjautunut") === 'kylla'){
        document.getElementById('tervetulo-teksti').textContent += localStorage.getItem("nimi");
        document.getElementById("kirjautumislomake").style.display = "none";
        document.getElementById("kirjaudu-ulos-nappi");
    }
    else{
        document.getElementById('tervetulo-teksti');
        document.getElementById("kirjautumislomake");
        document.getElementById("kirjaudu-ulos-nappi").style.display = "none";
    }
}

function kirjaudu_ulos(){
    localStorage.clear("nimi", document.getElementById("nimi"));
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("salasana", document.getElementById("salasana").value);
    localStorage.setItem("kirjautunut", "kylla");
}