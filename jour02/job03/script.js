function addone(){
    let compteur = 0;
    const button = document.getElementById("increment");
    const textHolder = document.getElementById("compteur");
    textHolder .innerHTML = compteur;
    
    button.addEventListener("click",function(){
    textHolder.innerHTML = ++compteur;
    })
}