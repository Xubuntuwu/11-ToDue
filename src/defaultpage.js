export default displayMain;
export {practiceProject, projectCreator, newFormlistElement, allProjects};

/////////////////////


function projectCreator(name) {
    this.name=name;
    this.todoArray=[];
    this.createToDo= function(title, description, dueDate, priority, completion=false) {
        this.todoArray.push({title, description,dueDate,priority, completion});
        // console.log(this.todoArray);
        // console.log(this);
        // console.log(allProjects);
        localStorage.setItem('allProjects', JSON.stringify(allProjects));
    };
    this.editToDo = function(index, title, description, dueDate, priority, completion) {
        this.todoArray.splice(index, 1, {title, description,dueDate,priority, completion});
        // console.log(this.todoArray);
        localStorage.setItem('allProjects', JSON.stringify(allProjects));
    }
    this.deleteToDo = function(index){
        this.todoArray.splice(index, 1);
        // console.log(this.todoArray);
        localStorage.setItem('allProjects', JSON.stringify(allProjects));
    }
    allProjects.push(this);
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
};
let practiceProject;
let allProjects;

function checkAllProjects(){
if(localStorage.getItem('allProjects')!==null){
    allProjects= JSON.parse(localStorage.getItem('allProjects'));
    for(let object=0; object< allProjects.length; object++){
        // console.log(allProjects);
        allProjects[object].createToDo= function(title, description, dueDate, priority, completion=false) {
            allProjects[object].todoArray.push({title, description,dueDate,priority, completion});
            // console.log(allProjects);
            // console.log(allProjects[object]);
            // console.log(currentProject);
            currentProject= allProjects[object]; //i dont know how else to fix the currentproject only loads value when changing to the page
            localStorage.setItem('allProjects', JSON.stringify(allProjects));
        };
        allProjects[object].editToDo = function(index, title, description, dueDate, priority, completion) {
            allProjects[object].todoArray.splice(index, 1, {title, description,dueDate,priority, completion});
            // console.log(this.todoArray);
            currentProject= allProjects[object];
            localStorage.setItem('allProjects', JSON.stringify(allProjects));
        }
        allProjects[object].deleteToDo = function(index){
            allProjects[object].todoArray.splice(index, 1);
            // console.log(this.todoArray);
            currentProject= allProjects[object];
            localStorage.setItem('allProjects', JSON.stringify(allProjects));
        } 
    }
}
else{
    allProjects= [];
    practiceProject = new projectCreator('Default Project');
}
}
checkAllProjects();
// standardProjects= allProjects;
let currentProject;

//function that checks for saving new todo
function saveNewToDo(){
    let savenewtodo= document.getElementById('savenewtodo');
    savenewtodo.addEventListener('click', ()=>{
        let task = document.getElementById('newname').value;
        let description = document.getElementById('newdescription').value;
        let duedate = document.getElementById('newduedate').value;
        let priority = document.getElementById('newpriority').value;
        if(task!==""){
            currentProject.createToDo(task, description, duedate, priority);
            maptodos();
            displayEditModal();
            editTaskCompletion();
            let modal = document.getElementById('newToDoModal');
            modal.remove();
        }
        else{
            document.getElementById('newname').style.border="solid 2px red";
        }

    })
}
function saveOldToDo(elementid){
    let saveoldtodo= document.getElementById('saveoldtodo');
    saveoldtodo.addEventListener('click', ()=>{
        let task = document.getElementById('newname').value;
        let description = document.getElementById('newdescription').value;
        let duedate = document.getElementById('newduedate').value;
        let priority = document.getElementById('newpriority').value;
        if(task!==""){
            currentProject.editToDo(elementid, task, description, duedate,priority, currentProject.todoArray[elementid].completion);
            maptodos();
            displayEditModal();
            editTaskCompletion();
            let modal = document.getElementById('editToDoModal');
            modal.remove();
        }
        else{
            document.getElementById('newname').style.border="solid 2px red";
        }

    })
}
function deleteToDo(elementid){
    let deletetodo= document.getElementById('deletetodo');
    deletetodo.addEventListener('click', ()=>{
        currentProject.deleteToDo(elementid);
        maptodos();
        displayEditModal();
        editTaskCompletion();
        let modal = document.getElementById('editToDoModal');
        modal.remove();
    })
}

/////////////////



function displayMain(currentProjectExport=undefined){
    checkAllProjects();
    if(currentProjectExport!==undefined){
        // console.log(currentProjectExport);
        // console.log(allProjects);
        currentProject=allProjects[currentProjectExport];
    }
    else{
        currentProject = practiceProject;
    }
    // console.log('current project');
    // console.log(currentProject);
    let main = document.querySelector('main');

    main.appendChild(displayHeader());
    main.appendChild(mainContent());
    maptodos();
    displayEditModal();
    editTaskCompletion();
    //newtodomodal
    let addtodobutton = document.getElementById('addToDo');
    addtodobutton.addEventListener('click', ()=>{
        let modal = document.getElementById('newToDoModal');
        if (modal=== null){
            main.appendChild(newToDoModal());
            saveNewToDo();
        }
        else{
            modal.remove();
        }
        
    })
}

function displayEditModal(){
    // edittodomodal
    let edittodobutton = document.getElementsByClassName('open_todo');
    Array.from(edittodobutton).forEach((r)=>{
        r.addEventListener('click', (e)=>{
            let main = document.querySelector('main');
            let modal = document.getElementById('editToDoModal');
            if (modal=== null){
                main.appendChild(editToDoModal(e.target.parentElement.id)); //id of todo is equal to index of todo in projectarray
                saveOldToDo(e.target.parentElement.id); //e.id
                deleteToDo(e.target.parentElement.id);
            }  
        })
    })
}

function editTaskCompletion(){
    // edittodomodal
    let taskcheckboxes = document.getElementsByClassName('check_todo');
    Array.from(taskcheckboxes).forEach((r)=>{
        r.addEventListener('click', (e)=>{
            if(e.target.checked){
                let index = e.target.parentElement.id;
                let array = currentProject.todoArray[index];
                // console.log(currentProject);
                // console.log(array);
                currentProject.editToDo(index, array.title, array.description, array.dueDate, array.priority, true);
                // console.log(currentProject);
            }
            else{
                // console.log('uncheck!');
                let index = e.target.parentElement.id;
                let array = currentProject.todoArray[index];
                currentProject.editToDo(index, array.title, array.description, array.dueDate, array.priority, false);
                // console.log(array);
            }
        })
    })
}

function displayHeader(){
    let header = document.createElement('header');
    header.setAttribute('id', 'main_header');
    let headertitle = document.createElement('input');
    headertitle.setAttribute('type', 'text');
    headertitle.setAttribute('value', currentProject.name);
    header.appendChild(headertitle);
    headertitle.addEventListener('change', (e)=>{
        currentProject.name = e.target.value;
    })
    return header;
}

function mainContent(){
    let content = document.createElement('div');
    content.setAttribute('id', 'workspace')
    content.appendChild(displayProject());
    content.appendChild(displayButton());

    return content;
}

function displayProject(){

    let projectHolder = document.createElement('div');
    projectHolder.setAttribute('id', 'open_project');

    //create TODO TITLES
    let toDo = document.createElement('div');
        toDo.setAttribute('id', 'toDo_title');
        toDo.setAttribute('class', 'single_toDo');
        let title = document.createElement('div');
        let dueDate = document.createElement('div');
        let priority = document.createElement('div');
        let finished = document.createElement('div');

        title.textContent= 'Task';
        dueDate.textContent= 'Due Date';
        priority.textContent= 'Priority';
        finished.textContent='Status';

        toDo.appendChild(title);
        toDo.appendChild(dueDate);
        toDo.appendChild(priority);
        toDo.appendChild(finished);
        projectHolder.appendChild(toDo);
        
    return projectHolder;
}

//DISPLAY TODOS ON SCREEN
function maptodos(){
    let projectHolder = document.getElementById('open_project');
    if(currentProject.todoArray.length<1){
        Array.from(projectHolder.children).forEach((e)=>{
            if(e.id !="toDo_title"){e.remove()};
        });
    }
    currentProject.todoArray.map((e)=>{
    //remove old todos
    Array.from(projectHolder.children).forEach((e)=>{
        if(e.id !="toDo_title"){e.remove()};
    });
    //could add in a .filter() here so the project todos are first ordered by due date and only then mapped
    //create new todos
    for(e of currentProject.todoArray){
    let toDo = document.createElement('div');
    toDo.setAttribute('id', currentProject.todoArray.indexOf(e));
    toDo.setAttribute('class', 'single_toDo');
    let title = document.createElement('div');
    let dueDate = document.createElement('div');
    let priority = document.createElement('div');
    let taskbox = document.createElement('input');
    taskbox.setAttribute('type', 'checkbox');
    taskbox.setAttribute("class", "check_todo");
    taskbox.setAttribute('value', 'finished');
    title.setAttribute('class', 'open_todo');
    priority.setAttribute('class', 'todo_priority');

    title.textContent= e.title;
    dueDate.textContent= e.dueDate;
    priority.textContent= e.priority;
    taskbox.checked = e.completion;

    toDo.appendChild(title);
    toDo.appendChild(dueDate);
    toDo.appendChild(priority);
    toDo.appendChild(taskbox);
    projectHolder.appendChild(toDo);
    
    }    
    })
}

function displayButton(){
    let addToDo = document.createElement('button');
    addToDo.setAttribute('id', 'addToDo');
    addToDo.innerHTML="&#xFF0B;";
    return addToDo;
}

function toDoModal(idmodal, idbutton, textbutton, taskvalue=undefined, descriptvalue=undefined, duevalue=undefined, priorityvalue=undefined){
    let newform = document.createElement('div');
    newform.setAttribute('id', idmodal);

    
    let newName= newFormlistElement('text','newname','Task: ', taskvalue);
    let newDescription= newFormlistElement('textarea','newdescription','Description: ', descriptvalue, 3);
    let newdueDate= newFormlistElement('date','newduedate','Duedate: ', duevalue);
    let newpriority= newFormlistElement('select','newpriority','Priority: ', priorityvalue);
    
    let buttonsdiv = document.createElement('div');
    buttonsdiv.setAttribute('class', 'buttonsdiv');
    let savenewtodo= document.createElement('button');
    savenewtodo.setAttribute('id', idbutton);
    savenewtodo.textContent=textbutton;
    if(taskvalue!==undefined){
        let newDelete= document.createElement('button');
        newDelete.setAttribute('id', 'deletetodo');
        newDelete.textContent="Delete";

        buttonsdiv.appendChild(newDelete);
    }
    buttonsdiv.appendChild(savenewtodo);

    newform.appendChild(newName);
    newform.appendChild(newDescription);
    newform.appendChild(newdueDate);
    newform.appendChild(newpriority);
    // newform.appendChild(savenewtodo);
    newform.appendChild(buttonsdiv);

    return newform;
}


function newToDoModal(){
    let newform = toDoModal('newToDoModal','savenewtodo', 'Add')
    return newform; //to displaymain
}
function editToDoModal(todoObjectindex){
    let todoObject= currentProject.todoArray[todoObjectindex];
    // console.log(currentProject);
    let task = todoObject.title;
    let description = todoObject.description;
    let due= todoObject.dueDate;
    let priority= todoObject.priority;
    let editform = toDoModal('editToDoModal', 'saveoldtodo', 'Save', task, description, due, priority);
    return editform;// to displaymain
}


function newFormlistElement(type,id,label, value, rows=undefined){
    let newElement = document.createElement('li');
    let newinput;
    if(rows!== undefined){
        newinput = document.createElement('textarea');
        newinput.setAttribute('rows', rows);
    }
    else if(type=="select"){
        newinput = document.createElement('select');
    }
    else{
    newinput = document.createElement('input');
    newinput.setAttribute('type', type);
    };

    if(value===undefined){
        newinput.value = "";
    }
    else{
        newinput.value= value;
    }
    if(type=="select"){
        let newoption = document.createElement('option');
        let newoption2 = document.createElement('option');
        let newoption3 = document.createElement('option');
        newoption.value="low";
        newoption2.value="medium";
        newoption3.value="high";
        newoption.textContent="Low";
        newoption2.textContent="Medium";
        newoption3.textContent="High";
        newinput.appendChild(newoption);
        newinput.appendChild(newoption2);
        newinput.appendChild(newoption3);
    }

    let newlabel = document.createElement('label');
    newinput.setAttribute('id', id);
    newlabel.setAttribute('for', id);
    newlabel.textContent=label;

    newElement.appendChild(newlabel);
    newElement.appendChild(newinput);

    return newElement;
}

