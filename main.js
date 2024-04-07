const axios = require("axios");

const input = document.getElementById("usuario").value;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("enviar").addEventListener("dblclick", function () {
        axios.get(`/swapi.dev/api/${input}`)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log("Erro", error)
            })
    })
})