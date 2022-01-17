var overlay = document.getElementById("overlaycontainer")
var body = document.getElementById("body")
overlay.style.display="none"
function orderoverlay()
{


    if(overlay.style.display == "none")
    {
        overlay.style.display ="block"
        body.style.backgroundColor ="black"
        body.style.opacity = "0.75"

    }
    else
    {
        console.log("")
        overlay.style.display ="none"
        body.style.opacity =0;
    }

}


function orderValidation()
{
  var username = document.order.name;
  var email = document.order.email;
  var selectedburger = document.order.burger_selected;

  var orderbtn = document.order.orderbtn;


  if(username.value.length<2 || username.value.length>40)
  {
    alert("name must be at least 2 character and max 40 character");
  }
  else if(email.value.length = 0)
  {
    alert("input email!");
  }
  else if(selectedburger.value.length = 0)
  {
    alert("please input selected burger");
  }
  else if(document.order.qty.value < 1 || document.order.qty.value.length == 0)
  {
    alert("quantity cannot be empty / zero");
  }
  else if(!document.getElementById("agreement").checked)
  {
    alert("agree to Terms and Aggreements");
  }
  else if(document.order.address.value.length == 0)
  {
    alert("please input address")
  }
  else if(document.order.email.value.length == 0)
  {
    alert("please input email")
  }
  else
  {
    alert("order success");
    location.href = "Home.html";    
    return false;
  }
}
