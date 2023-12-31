// Function send Form Login
document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const passwd = document.getElementById("passwd").value;
    const cfpasswd = document.getElementById("cfpasswd").value;

    if (username === "admin" && passwd === "ccc") {
        if (passwd === cfpasswd) {
            console.log(`Login Successfuly\nUsername : ${username}\nEmail : ${email}
Password : ${passwd}\nConfirmpassword : ${cfpasswd}`);
        } else {
            alert("Password isn't match!");
        }
    } else {
        alert("Login not Successfuly!");
    }

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("passwd").value = "";
    document.getElementById("cfpasswd").value = "";
});

// Function check password and confirmpassword :
document.getElementById("showPassWD1").addEventListener("click", checkPassword = () => {
    const passwd = document.getElementById("passwd");
    const showPassWD1 = document.getElementById("showPassWD1");

    if (passwd.type === "password") {
        passwd.type = "text";
    } else {
        passwd.type = "password";
    }
});

document.getElementById("showPassWD2").addEventListener("click", checkPassword2 = () => {
    const cfpasswd = document.getElementById("cfpasswd");
    const showPassWD2 = document.getElementById("showPassWD2");

    if (cfpasswd.type === "password") {
        cfpasswd.type = "text";
    } else {
        cfpasswd.type = "password";
    }
});