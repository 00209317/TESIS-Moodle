function tablesOverFlow(){
    var tables = document.querySelectorAll("table");
    if(tables){
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
}
tablesOverFlow();

