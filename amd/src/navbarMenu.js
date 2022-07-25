function navbarmenu() {
    var sidebar = document.getElementById("nav-drawer")
    var navbar = document.getElementById("accessibilitybar_container")

    if(sidebar && navbar){
        if(sidebar.children[0].children[0].getAttribute("data-key") == 'course-sections'){
            var course_section = sidebar.children[0].children[0];
            var a_course_section = sidebar.children[0].children[0].children[0]
            a_course_section.children[0].textContent = "Temas"
            var ul_course_section = sidebar.children[0].children[0].children[1];
            sidebar.children[0].removeChild(course_section);
            
    
            a_course_section.classList.add("btn");
            a_course_section.classList.add("btn-secondary");
            
            ul_course_section.classList.remove("collapse");
            
            var divNavBar = document.createElement("div");
            divNavBar.classList.add("course-section");
            divNavBar.appendChild(a_course_section);
            divNavBar.appendChild(ul_course_section);
            navbar.appendChild(divNavBar);
        }
    }

    //tool-------------
    var toolbutton = document.getElementById("tool_navbar_control")
    var navbarcontainer = document.getElementById("navbar_content_control")
    var toolmodal = document.getElementById("navbartoolsmodal")
    //-----------------

    //tool-------------
    if(toolbutton && navbarcontainer && toolmodal){
        toolbutton.onclick = function(){
            if(navbarcontainer.classList.contains('show_navbar_tool')){
                navbarcontainer.classList.remove('show_navbar_tool');
            } else {
                navbarcontainer.classList.add('show_navbar_tool');
                toolmodal.classList.add('show-display-flex');
            }
        }
    
        toolmodal.onclick = function(){
            navbarcontainer.classList.remove('show_navbar_tool');
            toolmodal.classList.remove('show-display-flex');
        }
    }
}

navbarmenu();


