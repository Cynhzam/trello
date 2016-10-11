window.addEventListener("load", function(){

    var container = document.getElementById("container");
    var span = document.getElementById("span");
    var form = document.getElementById("form");
    var input = document.getElementById("input");
    var btnGuardar = document.getElementById("btnGuardar");

    span.addEventListener("click", function(e){
        e.preventDefault();
        span.classList.add("none");
        form.classList.add("block")
    });
});