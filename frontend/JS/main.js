//////////////// favourite icons

var hearts = document.querySelectorAll(".heart");

hearts.forEach(a => {
    a.onclick = function (e) {
        // a.classList.toggle('like');
        if (a.classList.contains('fa-regular')) {
            a.classList.remove("fa-regular");
            a.classList.add("fa-solid");
            a.style.color = '#BA1A1A';
        } else {
            a.classList.remove("fa-solid");
            a.classList.add("fa-regular");
            a.style.color = '#3D2C2C';
        }
    }
});

////////////////////// star icon

var star = document.querySelectorAll('.checked');

star.forEach((b) => {
    console.log(b);
    if (b.classList.contains('fa-regular')) {
        b.classList.remove("fa-regular");
        b.classList.add("fa-solid");
        // b.classList.add(".checked");
        b.style.color = '#FFE600';

    } else {
        b.classList.remove("fa-solid");
        b.classList.remove(".checked");
        b.classList.add("fa-regular");
        b.style.color = '#BFBFBF';
    }


});


// togglePassword.addEventListener("click", function(){
//     this.classList.toggle("fa-eye-slash")
//     const type = password.getAttribute("type") === "password" ? "text" : "password"
//     password.setAttribute("type", type)
//   })

var desc = document.getElementById("descPRO");
var instr = document.getElementById("instrPRO");
var review = document.getElementById("reviewsPRO");
var manuf = document.getElementById("manuIMG");

var linkDesc = document.getElementById("linkDesc");
var linkInt = document.getElementById("linkInt");
var linkRev = document.getElementById("linkRev");
var linkMan = document.getElementById("linkMan");

function Description() {
    if (desc.style.display = "none") {
        desc.style.display = "block";
        linkDesc.style.color = "#817757";
        linkDesc.style.fontWeight = "800";
        linkDesc.style.borderBottom = "#817757 solid 2px";
        //normal
        instr.style.display = "none";
        linkInt.style.color = "#3D2C2C";
        linkInt.style.fontWeight = "400";
        linkInt.style.borderBottom = "none";

        review.style.display = "none";
        linkRev.style.color = "#3D2C2C";
        linkRev.style.fontWeight = "400";
        linkRev.style.borderBottom = "none";

        manuf.style.display = "none";
        linkMan.style.color = "#3D2C2C";
        linkMan.style.fontWeight = "400";
        linkMan.style.borderBottom = "none";

    }


}

function Instruction() {

    if (instr.style.display = "none") {
        instr.style.display = "block";
        linkInt.style.color = "#817757";
        linkInt.style.fontWeight = "800";
        linkInt.style.borderBottom = "#817757 solid 2px";
        //normal
        desc.style.display = "none";
        linkDesc.style.color = "#3D2C2C";
        linkDesc.style.fontWeight = "400";
        linkDesc.style.borderBottom = "none";

        review.style.display = "none";
        linkRev.style.color = "#3D2C2C";
        linkRev.style.fontWeight = "400";
        linkRev.style.borderBottom = "none";

        manuf.style.display = "none";
        linkMan.style.color = "#3D2C2C";
        linkMan.style.fontWeight = "400";
        linkMan.style.borderBottom = "none";

    }
    console.log("java is connected successfully")
}

function Reviews() {
    if (review.style.display = "none") {
        review.style.display = "block";
        linkRev.style.color = "#817757";
        linkRev.style.fontWeight = "800";
        linkRev.style.borderBottom = "#817757 solid 2px";
        //normal
        desc.style.display = "none";
        linkDesc.style.color = "#3D2C2C";
        linkDesc.style.fontWeight = "400";
        linkDesc.style.borderBottom = "none";

        instr.style.display = "none";
        linkInt.style.color = "#3D2C2C";
        linkInt.style.fontWeight = "400";
        linkInt.style.borderBottom = "none";

        manuf.style.display = "none";
        linkMan.style.color = "#3D2C2C";
        linkMan.style.fontWeight = "400";
        linkMan.style.borderBottom = "none";
    }
}

function Manufacturing() {
    if (manuf.style.display = "none") {
        manuf.style.display = "block";
        linkMan.style.color = "#817757";
        linkMan.style.fontWeight = "800";
        linkMan.style.borderBottom = "#817757 solid 2px";
        //normal
        review.style.display = "none";
        linkRev.style.color = "#3D2C2C";
        linkRev.style.fontWeight = "400";
        linkRev.style.borderBottom = "none";

        desc.style.display = "none";
        linkDesc.style.color = "#3D2C2C";
        linkDesc.style.fontWeight = "400";
        linkDesc.style.borderBottom = "none";

        instr.style.display = "none";
        linkInt.style.color = "#3D2C2C";
        linkInt.style.fontWeight = "400";
        linkInt.style.borderBottom = "none";
    }
}
// function changeColor(x){
//         x.style.color = "#817757";
//         x.style.fontWeight = "800";
//         x.style.borderBottom = "#817757 solid 2px";
// }
// function normalColor(x){
//         x.style.color = "#3D2C2C";
//         x.style.fontWeight = "400";
//         x.style.borderBottom = "none";
// }





// var createIcon = document.getElementsByClassName("editIcon")[0];
// var createText = document.getElementsByClassName("editText")[0];

// createIcon.addEventListener("mouseover", function () {
//     createText.style.display = 'inline';
// });
// createIcon.addEventListener("mouseleave", function () {
//     createText.style.display = 'none';
// });





// const togglePassword = document.getElementById('#togglePassword');
// const password = document.getElementById('#inputpassword');
// togglePassword.addEventListener('click', () => {
//     // toggle the type attribute
//     password.getAttribute('type') === 'password' ? password.setAttribute('type', 'text') : password.setAttribute('type', 'password');
//     // toggle the eye slash icon
//     if (password.getAttribute('type') === 'text') {

//         togglePassword.classList.remove("fa-eye");
//         togglePassword.classList.add("fa-eye-slash");
//     } else {
//         togglePassword.classList.remove("fa-eye-slash");
//         togglePassword.classList.add("fa-eye");

//     }
// });


// const togglePassword = document.querySelector('.togglePassword');
// const password = document.querySelector('.inputpassword');
// togglePassword.addEventListener('click', () => {
//     // toggle the type attribute
//     password.getAttribute('type') === 'password' ? password.setAttribute('type', 'text') : password.setAttribute('type', 'password');
//     // toggle the eye slash icon
//     if (password.getAttribute('type') === 'text') {

//         togglePassword.classList.remove("fa-eye");
//         togglePassword.classList.add("fa-eye-slash");
//     } else {
//         togglePassword.classList.remove("fa-eye-slash");
//         togglePassword.classList.add("fa-eye");

//     }
// });




////////////////////////// eye pass show/hide

var showTpass = document.querySelectorAll(".Tshowpass ");


showTpass.forEach(eye => {
    eye.addEventListener('click', () => {
        const pInput = eye.parentElement.querySelector("input");
        if (pInput.type === "password") {
            eye.classList.replace("Tshowpass", "hidepasst");
            return (pInput.type = "text");
        } else {
            eye.classList.replace("hidepasst", "Tshowpass");
            return (pInput.type = "password");
        }
    });
});

////////////////////////// نسبة الخصم
const taddDes = document.querySelector('#taddDesc ');
const taddDescprice = document.querySelector('#taddDescprice ');

var taddDesc = function () {
    taddDescprice.style.display = 'block';
    taddDes.style.display = 'none';
}
