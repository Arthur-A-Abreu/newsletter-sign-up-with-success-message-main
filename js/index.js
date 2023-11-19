function validemail(email) {

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(br|org|com)$/;

    return regex.test(email)
}

const submit = document.getElementsByClassName("button")[0]

const enter = document.getElementsByClassName("email")[0]

const pag1 = document.getElementsByClassName("card")[0]

const pag2 = document.getElementsByClassName("card")[1]

const erro = document.getElementsByClassName("none")[0]

let vari = false;

submit.addEventListener("click", function () {

    const email1 = enter.value

    vari = validemail(email1)

    if (vari) {

        localStorage.setItem("email", enter)

        pag1.classList.remove("selected")

        pag2.classList.add("selected")

        erro.classList.remove("chose")

        document.getElementById("email").textContent = email1

    } else {

        console.log("False")

        erro.classList.add("chose")

    }
})

document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        submit.click();

    }

});