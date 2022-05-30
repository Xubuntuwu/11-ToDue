export default profileMain;
import { newFormlistElement, standardProjects } from "./defaultpage";
import { user, newuser , newprofilepic, resetaccount, standarprofilepic, displayHeader, displayMain, removeCurrentMain} from "./main";
import userpic from './images/cathryn-lavery-fMD_Cru6OTk-unsplash.jpg';


function profileMain(){
    let main = document.querySelector('main');
    let content = document.createElement('div');
    content.setAttribute('id', 'profilecontent');
    main.appendChild(content);
    displayProfile();
}

function displayProfile(){
    //display content of profile
    let contentbig = document.getElementById('profilecontent');
    let content = document.createElement('div');
    content.setAttribute('id', 'profileform');
    let name = newFormlistElement('text', 'username', 'What Should I call you?', user.name);
    let picture = document.createElement('li');

    let picreset= document.createElement('li');
    let profreset= document.createElement('li');

    let picturelabel= document.createElement('label');
    let pictureinput = document.createElement('input');

    let picturereset = document.createElement('button');
    let profilereset= document.createElement('button');

    picturereset.setAttribute('type', 'button');
    picturereset.setAttribute('id', 'resetimage');
    profilereset.setAttribute('type', 'button');
    profilereset.setAttribute('id', 'deleteprofile');

    pictureinput.setAttribute('id', 'userimage');
    pictureinput.setAttribute('type', 'file');
    picturelabel.setAttribute('for', 'userimage');

    picturereset.textContent="Reset Picture";
    profilereset.textContent="Delete Profile";
    

    picturelabel.textContent="Choose your own profile picture: ";
    pictureinput.setAttribute('accept', 'image/*');
    picture.appendChild(picturelabel);
    picture.appendChild(pictureinput);
    picreset.appendChild(picturereset);
    profreset.appendChild(profilereset);

    content.appendChild(name);
    content.appendChild(picture);
    content.appendChild(picreset);
    content.appendChild(profreset);
    contentbig.appendChild(content);
    changelistener();
}


function changelistener(){
    let profile = document.getElementById('profileform');
    let resetimage = document.getElementById('resetimage');
    let deleteprofile = document.getElementById('deleteprofile');
    profile.addEventListener('change', (e)=>{
        if(e.target.id=="username"){
            document.body.style.cursor="progress";
            setTimeout(() => {
                newuser.name=e.target.value;
                document.body.style.cursor="default";
            }, 2000);
        }
        else if(e.target.id=="userimage"){
            onFileSelected(e);
        }
    });
    resetimage.addEventListener('click',()=>{
        newprofilepic.pic = userpic;    
        // console.log('newprofilepic.pic');
        // console.log(newprofilepic.pic);
    });
    deleteprofile.addEventListener('click',()=>{
        // resetaccount.projects = "new";
        let main = document.querySelector('main');
        let header= document.querySelector('header'); //header.replacewith wasnt working when header was outside of set. dont forget to reload element/node every time it changes
        standarprofilepic.pic = userpic;
        user.name = "User";
        // entireaccount.projects = [];
        // console.log(entireaccount);
        // resetaccount= entireaccount;
        localStorage.clear();
        header.replaceWith(displayHeader());
        removeCurrentMain();
        displayMain();
        // console.log(resetaccount.projects);
        // document.getElementById('username').value = "";
    })
}

function onFileSelected(event){
    let selectedFile = event.target.files[0];
    let reader = new FileReader();
    reader.onload= function(event){
        newprofilepic.pic= event.target.result;
    }
    reader.readAsDataURL(selectedFile);
}