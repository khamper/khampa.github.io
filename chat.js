//*trying to do this without any tutorials*
//i forbid the usage of any tutorials to make this
//currently very simple and very useless

let currentUser;

function login() 
{
    if(currentUser!=null) 
    {
        alert("you have already logged in");
    }
    else{
        try{
            while(currentUser==null || currentUser=="")
                currentUser = prompt("enter your username:");
        }finally{
            console.log("logged in as:", currentUser);
            alert("you may now enter the chat room");
        }
    }
}
function enterChatRoom()
{
    if(currentUser!=null)
    {
        window.open("chatroom.html","Chat Room","width=","height=");
    }
    else{
        alert("you must log in first");
    }
}