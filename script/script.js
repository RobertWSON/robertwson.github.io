console.log("This is working");

/* Toggle between adding and removing the "responsive" class to nav when the user clicks on the icon
*/
function myMenu()  {
    var respond = document.getElementsById("myTopnav");
    if  (respond.className === "nav")   {
        respond.className += "responsive";
    }   else    {
            respond.className = "nav";
    }
}