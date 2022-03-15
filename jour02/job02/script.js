function showhide(){
    let btn_element = document.getElementById("btn");
    let text1 = document.getElementById("text1");
    btn_element.addEventListener("click", () =>{
        document.getElementById("text1")
        .innerHTML = "L'important n'est pas la chute, mais l'atterrissage.";
        if (text1.style.display === "none"){
            text1.style.display = "block";
            }else{
            text1.style.display = "none";
            }
    })
}