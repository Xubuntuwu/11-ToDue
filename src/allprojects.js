import { allProjects ,projectCreator} from "./defaultpage.js";
export default displayProjectsmain;
import { displayMain, removeCurrentMain } from "./main.js";

let currentProjectExport;

function deleteprojectaddeventlistener(){
    let alldeletebuttons = document.getElementsByClassName('deleteprojectbutton');
    Array.from(alldeletebuttons).forEach((button)=>{
        button.addEventListener('click', ()=>{
            // console.log(button.parentElement.parentElement.id);
            allProjects.splice(button.parentElement.parentElement.id, 1);
            localStorage.setItem('allProjects', JSON.stringify(allProjects));
            mapProjects();
        })
    })
}
function openprojectaddeventlistener(){
    let openprojectbuttons = document.getElementsByClassName('openprojectbutton');
    Array.from(openprojectbuttons).forEach((button)=>{
        button.addEventListener('click', ()=>{
            currentProjectExport= allProjects[button.parentElement.parentElement.id];
            // localStorage.setItem('currentProjectExport', JSON.stringify(currentProjectExport));
            removeCurrentMain();
            displayMain(currentProjectExport);
        })
    })
}
function mapProjects(){
    //delete old projects
    let content = document.getElementById('allprojects_content');
    for(let i=content.children.length; i>0;i--){
        content.children[i-1].remove();
    }
    //post new projects from allprojectsarray
    for(let project of allProjects){

        let card = document.createElement('div');
        card.setAttribute('id', allProjects.indexOf(project));
        card.setAttribute("class","projectcard");

        let namediv = document.createElement('div');
        namediv.setAttribute("class", "project_name");
        namediv.textContent= project.name;

        let buttonsdiv = document.createElement('div');
        buttonsdiv.setAttribute("class", "projectbuttonsdiv");
        let openbutton = document.createElement('button');
        let deletebutton = document.createElement('button');
        openbutton.setAttribute('type', 'button');
        deletebutton.setAttribute('type', 'button');
        openbutton.setAttribute('class', 'openprojectbutton');
        deletebutton.setAttribute('class', 'deleteprojectbutton');
        openbutton.textContent="Open Project";
        deletebutton.textContent="Delete Project";
        buttonsdiv.appendChild(deletebutton);
        buttonsdiv.appendChild(openbutton);

        card.appendChild(namediv);
        card.appendChild(buttonsdiv);
        content.appendChild(card);
    }
    displayButton(); //add display button at end
    deleteprojectaddeventlistener();
    openprojectaddeventlistener();
}

///////////STARTT HERE
function displayProjectsmain(){
    let main = document.querySelector('main');
    let content = document.createElement('div');
    content.setAttribute('id', 'allprojects_content');
    main.appendChild(content);

    mapProjects();
}


function addProjectDisplay(){
    let popupmodal= document.getElementById('newprojectmodal');
    if(popupmodal!==undefined&&popupmodal!==null){
        popupmodal.remove();
    }
    else{
    let content = document.getElementById('allprojects_content');
    let modal = document.createElement('div');
    modal.setAttribute('id', 'newprojectmodal');
    let namelist = document.createElement('li');
    let name = document.createElement('input');
    let label = document.createElement('label');
    let buttonsdiv= document.createElement('div');
    let savebutton = document.createElement('button');
    let cancelbutton = document.createElement('button');
    buttonsdiv.setAttribute('class', 'buttonsdiv');
    savebutton.setAttribute('id', 'savenewproject');
    savebutton.textContent="Save";
    cancelbutton.setAttribute('id', 'cancelnewproject');
    cancelbutton.textContent="Cancel";
    namelist.setAttribute('id', 'newprojectnameitem')
    name.setAttribute("id", "newprojectname");
    label.setAttribute('for', 'newprojectname');
    label.textContent="New Project Name: ";
    namelist.appendChild(label);
    namelist.appendChild(name);
    modal.appendChild(namelist);
    buttonsdiv.appendChild(cancelbutton);
    buttonsdiv.appendChild(savebutton);
    modal.appendChild(buttonsdiv);
    content.appendChild(modal);
    newprojectmodaladdeventlistener(modal.lastChild)
    }
}
function displayButton(){
    let content = document.getElementById('allprojects_content');
    let addProject = document.createElement('button');
    addProject.setAttribute('id', 'addProject');
    addProject.innerHTML="&#xFF0B;";
    content.appendChild(addProject);
    addProjectListener();
}
function addProjectListener(){
    let button = document.getElementById('addProject');
    button.addEventListener('click', ()=>{
        addProjectDisplay();
    })
}
///funcitonality



function newprojectmodaladdeventlistener(div){
    let modal= document.getElementById('newprojectmodal');
    let newprojectname = document.getElementById('newprojectname');
    div.addEventListener('click', (e)=>{
        if(e.target.id=="cancelnewproject"){
            modal.remove();
        }
        else if(e.target.id=="savenewproject"){
            if(newprojectname.value.length>=1){
                new projectCreator(newprojectname.value);
                modal.remove();
                mapProjects();

            }
            else{
                newprojectname.style.borderColor="red";
            }
        }
    })
}


/////