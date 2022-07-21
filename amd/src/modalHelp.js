function modalHelp(){
    //Obtener courseID
    var link = document.URL
    var courseId = link.split("")[link.length - 1]

    //Activar Edicion
    var activarEdicion = document.getElementById("activarEdicion")
    if(activarEdicion){
        activarEdicion.href="../backup/restorefile.php?contextid="+courseId
    }

    //Editar ajustes
    var editarAjustes = document.getElementById("editarAjustes");
    if(editarAjustes){
        editarAjustes.href="../admin/settings.php?section=frontpagesettings"+courseId
    }

    //filtros
    var filtros = document.getElementById("filtros")
    if(filtros){
        filtros.href="../filter/manage.php?contextid="+courseId
    }

    //Copia de respaldo
    var copiaRespaldo = document.getElementById("copiaRespaldo")
    if(copiaRespaldo){
        copiaRespaldo.href="../backup/backup.php?id="+courseId
    }

    //Restaurar
    var restaurar = document.getElementById("restaurar")
    if(restaurar){
        restaurar.href="../backup/restorefile.php?contextid="+courseId
    }




    //Reportes

    //desgloseCompetencia
    var desgloseCompetencia = document.getElementById("desgloseCompetencia")
    if(desgloseCompetencia){
        desgloseCompetencia.href="../report/competency/index.php?id="+courseId
    }
    
    //bit
    var bit = document.getElementById("bit")
    if(bit){
        bit.href="../report/log/index.php?id="+courseId
    }
    
    //bitVivo
    var bitVivo = document.getElementById("bitVivo")
    if(bitVivo){
        bitVivo.href="../report/loglive/index.php?id="+courseId
    }
    
    //repAct
    var repAct = document.getElementById("repAct")
    if(repAct){
        repAct.href="../report/outline/index.php?id="+courseId
    }
    
    //partCur
    var partCur = document.getElementById("partCur")
    if(partCur){
        partCur.href="../report/participation/index.php?id="+courseId
    }
    
    //monEvt
    var monEvt = document.getElementById("monEvt")
    if(monEvt){
        monEvt.href="../admin/tool/monitor/managerules.php?courseid="+courseId
    }
    

    //Banco de Preguntas
    var banPreg = document.getElementById("banPreg")
    if(banPreg){
        banPreg.href="../question/edit.php?courseid="+courseId
    }
    
    var preg = document.getElementById("preg")
    if(preg){
        preg.href="../question/edit.php?courseid="+courseId
    }
    
    //Categorías
    var catg = document.getElementById("catg")
    if(catg){
        catg.href="../question/category.php?courseid="+courseId
    }
    
    //Importar
    var impt = document.getElementById("impt")
    if(impt){
        impt.href="../question/import.php?courseid="+courseId
    }
    
    //Exportar
    var monEvt = document.getElementById("monEvt")
    if(monEvt){
        monEvt.href="../question/export.php?courseid="+courseId
    }
    

    //Grupos
    var gps = document.getElementById("gps")
    if(gps){
        gps.href="../group/index.php?id="+courseId
    }
    

    //permisos
    var permisos = document.getElementById("permisos")
    if(permisos){
        permisos.href="../admin/roles/permissions.php?contextid="+courseId
    }
    
    //rolAsig
    var rolAsig = document.getElementById("rolAsig")
    if(rolAsig){
        rolAsig.href="../admin/roles/assign.php?contextid="+courseId
    }
    
    //compPerm
    var compPerm = document.getElementById("compPerm")
    if(compPerm){
        compPerm.href="../admin/roles/check.php?contextid="+courseId
    }
}

modalHelp();

