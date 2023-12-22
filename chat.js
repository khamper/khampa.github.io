let message = "Servers are unreachable.";
let currentUser;

var prvr = 0;

function connectToServer()
{
    currentUser="debug";//for now
    console.log("logged in as:", currentUser);
    // TODO: add proper code here
}

function popup()
{
    if(prvr===1)
    {
        connectToServer();
    } else{
        alert(message);
    }
}