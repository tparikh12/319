function validate2() {
    valCheck = true;
    var resultEmailCheck = emailCheck(document.forms["contact information"]["email"].value);
    var p = PhoneCheck(document.getElementById("phone").value);
    var s = stateCheck(document.getElementById("address").value);

    var image1 = getImage(Boolean(resultEmailCheck), "email");
    var labelNotifyEmail1=getNotification(Boolean(resultEmailCheck), "email") ;
    document.getElementById("Email").appendChild(image1);
    document.getElementById("Email").appendChild(labelNotifyEmail1);

    var image2 = getImage(Boolean(s), "address");
    var labelNotifyEmail2=getNotification2(Boolean(s), "address") ;
    document.getElementById("Address").appendChild(image2);
    document.getElementById("Address").appendChild(labelNotifyEmail2);

    var image3= getImage(Boolean(p), "phone");
    var labelNotifyEmail3=getNotification1(Boolean(p), "phone") ;
    document.getElementById("Phone").appendChild(image3);
    document.getElementById("Phone").appendChild(labelNotifyEmail3);
}

function getNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Email should be in form xxx@xxx.xxx, which x should be alphanumeric!";
    return label;
}
function getNotification1(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Enter in the right form xxxxxxxxxx or xxx-xxx-xxxx";
    return label;
}
function getNotification2(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Enter the Right Address";
    return label;
}


function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}

function emailCheck(email) {
    atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
        periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    valCheck = false;
    return false;
}


function alphaNumCheck(entry) {
    
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function PhoneCheck(entry)
{   if(isNaN(entry)) return false;
    var ch = entry.split("-");
    if(ch[0].length==entry.length)
    {
    if(entry.length!=10) return false;
    if(!isNaN(entry)) return true;
    return false;}
    else if(ch.length==3)
    {
      if(ch[0].length==3)
      {
          if(ch[1].length==3)
          {
              if(ch[2].length==4)
              
              {
                  return true;
              }

          }
      }
    }
   return false;
}
function stateCheck(entry)
{ 
    var ch = entry.split(",")
    return ch.length ==2;
}
function deleteCookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
