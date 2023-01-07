let catName = getElementById("name");
let catness = getElementsByName("catOrNot");
let roommates = getElementsByClassName("roommates");
let catmail = getElementById("email");
let password = getElementById("password");
let submit = getElementById("submit_btn");
submit.addEventListener("click", check);

function check() {
    document.getElementById('errorMessage').innerHTML = '';
    if (catName.value = '') {
        document.getElementById('errorMessage').innerHTML += 'What is your name?<br>'
    }


}