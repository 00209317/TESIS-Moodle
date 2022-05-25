var sidebar = document.getElementById("nav-drawer")
var navbar = document.getElementById("accessibilitybar_container")

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