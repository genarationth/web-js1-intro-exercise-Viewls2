function ChangeName() {
    let NewName = prompt("What your name");
    document.getElementById("inputName").innerHTML=`Hello ${NewName}`
}
