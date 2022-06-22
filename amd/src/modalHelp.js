//Obtener courseID
var link = document.URL
var courseId = link.split("")[link.length - 1]

//Activar Edicion
var activarEdicion = document.getElementById("activarEdicion")
activarEdicion.href="../backup/restorefile.php?contextid="+courseId
//Editar ajustes
var editarAjustes = document.getElementById("editarAjustes")
editarAjustes.href="../admin/settings.php?section=frontpagesettings"+courseId
//filtros
var filtros = document.getElementById("filtros")
filtros.href="../filter/manage.php?contextid="+courseId
//Copia de respaldo
var copiaRespaldo = document.getElementById("copiaRespaldo")
copiaRespaldo.href="../backup/backup.php?id="+courseId
//Restaurar
var restaurar = document.getElementById("restaurar")
restaurar.href="../backup/restorefile.php?contextid="+courseId



//Reportes

//desgloseCompetencia
var desgloseCompetencia = document.getElementById("desgloseCompetencia")
desgloseCompetencia.href="../report/competency/index.php?id="+courseId
//bit
var bit = document.getElementById("bit")
bit.href="../report/log/index.php?id="+courseId
//bitVivo
var bitVivo = document.getElementById("bitVivo")
bitVivo.href="../report/loglive/index.php?id="+courseId
//repAct
var repAct = document.getElementById("repAct")
repAct.href="../report/outline/index.php?id="+courseId
//partCur
var partCur = document.getElementById("partCur")
partCur.href="../report/participation/index.php?id="+courseId
//monEvt
var monEvt = document.getElementById("monEvt")
monEvt.href="../admin/tool/monitor/managerules.php?courseid="+courseId

//Banco de Preguntas
var banPreg = document.getElementById("banPreg")
banPreg.href="../question/edit.php?courseid="+courseId
var preg = document.getElementById("preg")
preg.href="../question/edit.php?courseid="+courseId
//Categorías
var catg = document.getElementById("catg")
catg.href="../question/category.php?courseid="+courseId
//Importar
var impt = document.getElementById("impt")
impt.href="../question/import.php?courseid="+courseId
//Exportar
var monEvt = document.getElementById("monEvt")
monEvt.href="../question/export.php?courseid="+courseId

//Grupos
var gps = document.getElementById("gps")
gps.href="../group/index.php?id="+courseId

//permisos
var permisos = document.getElementById("permisos")
permisos.href="../admin/roles/permissions.php?contextid="+courseId
//rolAsig
var rolAsig = document.getElementById("rolAsig")
rolAsig.href="../admin/roles/assign.php?contextid="+courseId
//compPerm
var compPerm = document.getElementById("compPerm")
compPerm.href="../admin/roles/check.php?contextid="+courseId