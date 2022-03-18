var json = {name: "La Plateforme", address: "8 rue d'hozier", city: "Marseille", nb_staff: "11", creation:"2019"}
document.addEventListener("DOMContentLoaded", () => {
    jsonValueKey(json)
})

function jsonValueKey(json){
    var p = document.getElementById('text')
    p.innerHTML = json.city
}