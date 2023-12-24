//*trying to do this without any tutorials*
//i forbid the usage of any tutorials to make this
//currently very simple and very useless

let currentUser;

function getUsername()
{
    try{
        currentUser = prompt("enter your username:");
    }finally{
        console.log("logged in as:", currentUser);
    }
    openChatRoom();
}
function openChatRoom() 
{
    if(currentUser!=null && currentUser!="")
        window.open("chatroom.html","Chat Room","width=300,height=200").innerHTML= "o priviec, " + currentUser;
    else{
        getUsername();
    }
}