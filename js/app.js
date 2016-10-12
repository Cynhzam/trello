window.addEventListener("load", function(){

    var box = document.getElementById("box");
    var container = document.getElementById("container");
    var span = document.getElementById("span");
    var form = document.getElementById("form");
    var input = document.getElementById("input");
    var btnGuardar = document.getElementById("btnGuardar");

    span.addEventListener("click", function(e){
        e.preventDefault();
        span.classList.add("none");
        form.classList.remove("none");
    });

    btnGuardar.addEventListener("click", function(e){
        e.preventDefault();
        agregarForm();
    });

    function agregarForm(){

        var nuevoForm = document.createElement("div");
        var titulo = document.createElement("span");
        var link = document.createElement("a");
        var contenido = input.value;

        titulo.textContent = contenido;
        link.textContent = "Añadir una tarjeta";

        form.classList.add("none"); 
        nuevoForm.classList.add("fondo-form");

        container.appendChild(nuevoForm);
        nuevoForm.appendChild(titulo);
        nuevoForm.appendChild(link);
    
        var nuevaTarjeta = document.createElement("div");
        box.appendChild(nuevaTarjeta);
        nuevaTarjeta.classList.add("rigth");

        nuevaTarjeta.appendChild(span);
        span.classList.remove("none");
    }
});
