//*trying to do this without any tutorials*
//i forbid the usage of any tutorials to make this
//currently very simple and very useless
let currentUser;

function getUsername()
{
    //try to ask for username and then print to console the current username
    try{
        currentUser = prompt("enter your username:");
    }finally{
        console.log("logged in as:", currentUser);
    }
}
function popup()
{
    getUsername();
}
function openChatRoom() 
{
    if(currentUser!=null && currentUser!="")
        window.open("index.html","Chat Room","width=300,height=200");  
    else{
        popup();
    }
}