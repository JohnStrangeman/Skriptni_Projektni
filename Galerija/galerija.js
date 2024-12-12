function openModal(imageSrc) {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function back(){
    window.history.back();
}
function forward(){
    window.history.forward();
}

function Show(){
    document.getElementById("popup").style="display: block;";
}

function calculate(){
    var G = parseInt(document.getElementById("GrownUps").value);
    var C = parseInt(document.getElementById("Children").value);

    var Gprice = G * 80;
    var Cprice = C * 60;

    window.alert("The price of the tickets is: " + (Gprice+ Cprice) + "kn");
}