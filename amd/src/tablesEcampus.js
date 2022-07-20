function tablesOverFlow(){
    var tables = document.querySelectorAll("table");
    console.log("ESTOY DENTRO DE LA FUNCION DE TABLAS")
    tables.forEach(function(element) {
        var parent = element.parentElement;
        if(!parent.classList.contains("contentTableOverflow")){
            var tableAux = element;
            var divTable = document.createElement("div");
            divTable.classList.add("contentTableOverflow");
            parent.replaceChild(divTable, element);
            divTable.appendChild(tableAux);
        }
    });
}

console.log("ESTOY AFUERA DE LA FUNCION DE TABLAS")
windows.onload = tablesOverFlow();

