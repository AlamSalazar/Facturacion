let table;
document.getElementById("btn").onclick = function () {
    var nombre = document.getElementById("nombre").value;            //Nombre
    var cosCon = parseFloat(document.getElementById("cosCon").value);//Costo de Consulta
    var cosDia = parseFloat(document.getElementById("cosDia").value);//Costo por Día
    var numDia = parseFloat(document.getElementById("numDia").value);//Cantidad de Días
    var cosVar = parseFloat(document.getElementById("cosVar").value);//Costos Varios
    var cosMed = parseFloat(document.getElementById("cosMed").value);//Costo de Medicamentos
    var posDed = parseFloat(document.getElementById("posDed").value);//Posibles deducciones
    if (nombre != "" && !isNaN(cosCon) && !isNaN(cosDia) && !isNaN(numDia) && !isNaN(cosVar) && !isNaN(cosMed) && !isNaN(posDed)) {
        var Hosp = cosDia * numDia;
        var totalS = cosCon + Hosp + cosVar + cosMed; //total SIN deducciones   tr
        var totalC = totalS - posDed;                 //total CON deducciones

        document.getElementById("TODO").innerHTML = "<p class='center'><img src='logo.png' class='img2'></p>";

        table = document.createElement("table");
        tabla("Paciente", nombre);
        tabla("Costo de consulta", "$" + cosCon);
        tabla("Hospitalización por " + numDia + " días", "$" + Hosp);
        tabla("Gastos varios", "$" + cosVar);
        tabla("Medicamentos", "$" + cosMed);
        tabla("Total", "$" + totalS);
        tabla("<h3>Total real</h3>(con deducibles incluidos)", "<h2>$" + totalC + "</h2>");
        document.getElementById("reload").innerHTML = "<button onclick='location.reload()' class='btn2'>regresar</button>";
    }
    else { alert("Ingresa los datos solicitados"); }

}
function tabla(a, b) {
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    cell1.innerHTML = a;
    cell2.innerHTML = b;
    document.body.appendChild(table);
}
