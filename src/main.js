import './style.css';
import logopic from './images/ToDue_Logo.svg';
import userpic from './images/cathryn-lavery-fMD_Cru6OTk-unsplash.jpg';
import profilepic from './images/profile1.svg';
import projectspic from './images/projects.svg';
import archivespic from './images/archive.svg';
import displayMain from "./defaultpage";
// import {practiceProject} from './defaultpage';
import displayProjectsmain from './allprojects';
export {removeCurrentMain, displayMain};
import profileMain from './profilepage';
export {user, newuser, newprofilepic};
import {allProjects} from './defaultpage';
export {resetaccount};

// DOM MANIPULATION
let user={name: "User"};
let standarprofilepic = {pic:userpic};
let entireaccount = {projects: allProjects};

if(localStorage.getItem('newuser')!==null){
    user.name= JSON.parse(localStorage.getItem('newuser'));
}
if(localStorage.getItem('standardprofilepic')!==null){
    standarprofilepic.pic= JSON.parse(localStorage.getItem('standardprofilepic'));
}

function displayPage(){
    let page = document.getElementById('content');
    //add sidebar
    page.appendChild(sideBar());
    page.appendChild(displayHeader());
    page.appendChild(displayContent());
}

function sideBar(){
    //creating parent elements
    let sidebar = document.createElement('aside');
    let logodiv = document.createElement('div');
    let sideMenu = document.createElement('ul');

    let logotext = document.createElement('p');
    logotext.textContent= "ToDue";
    logodiv.setAttribute('id', 'logo');
    let logoimage = new Image();
    logoimage.setAttribute('src', logopic);

    logodiv.appendChild(logotext);
    logodiv.appendChild(logoimage);
    //creating options
    let allProjects = createOptions('All Projects', projectspic);
    let profile = createOptions('Profile', profilepic);
    let archived = createOptions('Archived', archivespic);
    allProjects.setAttribute('id', 'allprojects');
    profile.setAttribute('id', 'profile');
    archived.setAttribute('id', 'archives');
    //adding li to ul
    sideMenu.appendChild(allProjects);
    sideMenu.appendChild(profile);
    sideMenu.appendChild(archived);
    //adding child elements to sidebar
    sidebar.appendChild(logodiv);
    sidebar.appendChild(sideMenu);
    return sidebar;

}

function createOptions(name, source, idname=undefined){
    let option = document.createElement('li');
    let optionpic = document.createElement('img');
    optionpic.setAttribute('src', source);
    option.appendChild(optionpic);
    if(idname!== undefined){
        option.setAttribute('id', idname);
    }
    let optiontext = document.createElement('p');
    optiontext.textContent=name;
    option.appendChild(optiontext);
    return option;
}

function displayHeader(){
    let header = document.createElement('header');
    let searchbar = document.createElement('input');
    searchbar.setAttribute('type', 'search');

    let profile = document.createElement('div');
    let profileimg= document.createElement('img');

    profileimg.setAttribute('src', standarprofilepic.pic);
    profileimg.setAttribute('id', 'profileimg');
    let profiletext = document.createElement('p');
    
    let userspan= document.createElement('span');
    userspan.setAttribute('id', 'usernamespan');
    userspan.textContent=user.name;
    profiletext.textContent=`Welcome, `;
    profiletext.append(userspan);

    profile.appendChild(profiletext);
    profile.appendChild(profileimg);
    

    header.appendChild(searchbar);
    header.appendChild(profile);

    return header;
}

function displayContent(){
    let content = document.createElement('main');
    return content;
}

function removeCurrentMain(){
    let main= document.querySelector('main');
    for(let child of Array.from(main.children)){
        child.remove();
    }
}


displayPage();

if(allProjects===[]){
    // console.log('displaying main of default');
    // displayMain();
}
else{
    displayProjectsmain();
}

//move to display all projects
let allprojects = document.getElementById('allprojects');
allprojects.addEventListener('click', ()=>{
    removeCurrentMain();
    displayProjectsmain();
})
//move to display
let profile = document.getElementById('profile');
profile.addEventListener('click', ()=>{
    removeCurrentMain();
    profileMain();
})

// console.table("All projects:");
// console.log(allProjects);

//CHANGE USERNAME
let newuser = new Proxy(user, {
    set: (target, key, value)=>{
        let header= document.querySelector('header');
        user.name = value;
        localStorage.setItem('newuser', JSON.stringify(user.name));
        header.replaceWith(displayHeader());
        return true;
    }
});

//CHANGE PROFILEPIC
let newprofilepic = new Proxy(standarprofilepic, {
    set: (target, key, value)=>{
        let header= document.querySelector('header'); //header.replacewith wasnt working when header was outside of set. dont forget to reload element/node every time it changes
        standarprofilepic.pic = value;
        localStorage.setItem('standardprofilepic', JSON.stringify(standarprofilepic.pic));
        header.replaceWith(displayHeader());
        return true;
    }
});

// DELETE ACCOUNT
let resetaccount = new Proxy(entireaccount, {
    set: (target, key, value)=>{
        let main = document.querySelector('main');
        let header= document.querySelector('header'); //header.replacewith wasnt working when header was outside of set. dont forget to reload element/node every time it changes
        standarprofilepic.pic = userpic;
        user.name = "User";
        entireaccount.projects = [];
        // console.log(entireaccount);
        resetaccount= entireaccount;
        localStorage.clear();
        header.replaceWith(displayHeader());
        removeCurrentMain();
        displayMain();
        return true;
    }
});
