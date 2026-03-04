document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    if(localStorage.getItem("kirjautunut") === 'kylla'){
        document.getElementById('tervetulo_teksti').textContent += localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
        document.getElementById("kirjautumis_ulos_lomake");
    }
    else{
        document.getElementById('tervetulo_teksti');
        document.getElementById("kirjautumis_lomake");
        document.getElementById("kirjautumis_ulos_lomake").style.display = "none";
    }
}

function kirjaudu_ulos(){
    localStorage.clear("nimi", document.getElementById("nimi"));
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}