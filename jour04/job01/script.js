function showtext(){
    let btn_element = document.getElementById("btn");
    btn_element.addEventListener("click", () =>{
        fetch('expression.txt')
        .then((response) => {
            return response.text();
    })
        .then((text) => {
            document.write(text);
    })
});
}
