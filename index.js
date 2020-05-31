function validation() {

    var userName = document.getElementById("user-name").value
    var errorMessage = document.getElementsByClassName("message")
    var errorVisible = document.getElementsByClassName("error-block")
    var borderRed = document.getElementsByTagName("input")
    var labelRed = document.getElementsByTagName("label")
    var userEmail = document.getElementById("user-email").value
    var userPassword = document.getElementById("user-Password").value
    var confirmPaswd = document.getElementById("confirm-Password").value
    var male = document.getElementById("male")
    var female = document.getElementById("female")
    var inputBlock = document.getElementsByClassName("input-with-float-gender")
    var button = document.getElementById("button")

    var userList = [
        {}
    ]


    // for UserName field

    if (userName == "") {
        labelRed[0].style.color = "#693232"
        borderRed[0].style.border = "2px solid red"
        errorVisible[0].style.display = "inline-flex"
        errorMessage[0].innerHTML = "Please fill out this field"
    } else
    if (userName.length < 3) {
        labelRed[0].style.color = "#693232"
        borderRed[0].style.border = "2px solid red"
        errorVisible[0].style.display = "inline-flex"
        errorMessage[0].innerHTML = "Username must be greater than 3 character"
    } else if (userName != "") {
        labelRed[0].style.color = "dodgerblue"
        borderRed[0].style.border = "2px solid dodgerblue"
        errorVisible[0].style.display = "none"
    }
    userList.push(localStorage.setItem("userNameKey", userName))


    //For Email field 

    if (userEmail == "") {
        labelRed[1].style.color = "#693232"
        borderRed[1].style.border = "2px solid red"
        errorVisible[1].style.display = "inline-flex"
        errorMessage[1].innerHTML = "Please fill out this field"
    } else
    if ((userEmail.indexOf("@") <= 0) && userEmail.charAt(userEmail.length - 4) != "@") {
        labelRed[1].style.color = "#693232"
        borderRed[1].style.border = "2px solid red"
        errorVisible[1].style.display = "inline-flex"
        errorMessage[1].innerHTML = "'@' Position invalid, it's incomplete"
    } else
    if ((userEmail.charAt(userEmail.length - 4) != ".") &&
        (userEmail.charAt(userEmail.length - 3) != "")) {
        labelRed[1].style.color = "#693232"
        borderRed[1].style.border = "2px solid red"
        errorVisible[1].style.display = "inline-flex"
        errorMessage[1].innerHTML = "' . ' is Invalid Position"
    } else if (userEmail != "") {
        labelRed[1].style.color = "dodgerblue"
        borderRed[1].style.border = "2px solid dodgerblue"
        errorVisible[1].style.display = "none"

    }



    //For Password field

    if (userPassword == "") {
        labelRed[2].style.color = "#693232"
        borderRed[2].style.border = "2px solid red"
        errorVisible[2].style.display = "inline-flex"
        errorMessage[2].innerHTML = "Please fill out this field"
    } else
    if (userPassword != "") {
        labelRed[2].style.color = "dodgerblue"
        borderRed[2].style.border = "2px solid dodgerblue"
        errorVisible[2].style.display = "none"


        if (userPassword.length >= 6) {

            var paswd = /^(?=.*[0-9])(?=.*[!@#$?%^&*])[a-zA-Z0-9!@#$?%^&*]{6,16}$/;
            if (!userPassword.match(paswd)) {

                labelRed[2].style.color = "#693232"
                borderRed[2].style.border = "2px solid red"
                errorVisible[2].style.display = "inline-flex"
                errorMessage[2].innerHTML = "Password should be a combination of an aphabet, number and a special character"
            }
        } else {
            labelRed[2].style.color = "#693232"
            borderRed[2].style.border = "2px solid red"
            errorVisible[2].style.display = "inline-flex"
            errorMessage[2].innerHTML = "Please Enter a 6 characters long password."

        }

    }






    //Confirm Password
    if (confirmPaswd == "") {
        labelRed[3].style.color = "#693232"
        borderRed[3].style.border = "2px solid red"
        errorVisible[3].style.display = "inline-flex"
        errorMessage[3].innerHTML = "Please fill out this field"
    } else
    if (confirmPaswd != userPassword) {

        labelRed[3].style.color = "#693232"
        borderRed[3].style.border = "2px solid red"
        errorVisible[3].style.display = "inline-flex"
        errorMessage[3].innerHTML = "Password does not Match"

    } else if (confirmPaswd == userPassword) {
        labelRed[3].style.color = "dodgerblue"
        borderRed[3].style.border = "2px solid dodgerblue"
        errorVisible[3].style.display = "none"

    }
    userList.push(localStorage.setItem("userPasswordKey", userPassword))

    //Gender confirmation

    console.log(male.checked)

    if (!(male.checked || female.checked)) {
        inputBlock[0].style.display = "block"
        errorVisible[4].style.display = "inline-flex"
        errorMessage[4].innerHTML = "Please checked out this field"
        button.style.margin = "25px 0 0 30px"

    } else if (male.checked || female.checked) {
        errorVisible[4].style.display = "none"
    }


    var successMessage = document.getElementById("signUp-result")
    successMessage[0].innerHTML = "Logged in"
    successMessage[0].style.opacity = 1
}






function login() {
    var userName = document.getElementById("user-name").value
    var errorMessage = document.getElementsByClassName("message")
    var errorVisible = document.getElementsByClassName("error-block")
    var borderRed = document.getElementsByTagName("input")
    var labelRed = document.getElementsByTagName("label")
    var userPassword = document.getElementById("user-Password").value
    var loginResult = document.getElementById("login-result")

    if (userName == "") {
        labelRed[0].style.color = "#693232"
        borderRed[0].style.border = "2px solid red"
        errorVisible[0].style.display = "inline-flex"
        errorMessage[0].innerHTML = "Please fill out this field"
    } else if (userName != "") {
        labelRed[0].style.color = "dodgerblue"
        borderRed[0].style.border = "2px solid dodgerblue"
        errorVisible[0].style.display = "none"
    }

    if (userPassword == "") {
        labelRed[1].style.color = "#693232"
        borderRed[1].style.border = "2px solid red"
        errorVisible[1].style.display = "inline-flex"
        errorMessage[1].innerHTML = "Please fill out this field"
    } else
    if (userPassword != "") {
        labelRed[1].style.color = "dodgerblue"
        borderRed[1].style.border = "2px solid dodgerblue"
        errorVisible[1].style.display = "none"
    }

    // Store date in local Storage

    if (userName == localStorage.getItem("userNameKey") && userPassword == localStorage.getItem("userPasswordKey")) {
        loginResult.innerHTML = "Successfully LogedIn"
        loginResult.style.opacity = 1
            // alert("sucessfull")
    } else {

        loginResult.innerHTML = "Incorrect Credentials"
        loginResult.style.opacity = 1
            // alert("wrong")
    }
}