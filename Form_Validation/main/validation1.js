function validate2() {
 
    valCheck = true;
   
    var f = alphaNumCheck(document.getElementById("firstname").value);
    var l = alphaNumCheck(document.getElementById("lastname").value);
    var g = checkg(document.forms["Form"]["gender"].value); 
    var s = checkg(document.forms["Form"]["state"].value);  
    var image1 = getImage(Boolean(f),"firstname" );
    var image2 = getImage(Boolean(l),"lastname" );
    var first=getNotification(Boolean(f), "firstname") ;
    var last=getNotification(Boolean(l), "lastname") ;
    document.getElementById("First").appendChild(image1);
    document.getElementById("First").appendChild(first);
    document.getElementById("Last").appendChild(image2);
    document.getElementById("Last").appendChild(last);
    var image3 = getImage(Boolean(g),"gender" );
    var image4 = getImage(Boolean(s),"state" );
    var gend = getNotification2(Boolean(g), "gender") ;
    var stat  = getNotification2(Boolean(s), "state") ;
    document.getElementById("Gen").appendChild(image3);
    document.getElementById("Gen").appendChild(gend);
    document.getElementById("St").appendChild(image4);
    document.getElementById("St").appendChild(stat);
    if(!f) return false;
    if(!l) return false;
    if(!g) return false;
    if(!s) return false;
      return  location.href = "./validation2.html";
}

function getNotification(bool, ID) {
   // alert("Ran");
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Enter A Valid Name";
    return label;
}
function getNotification2(bool, ID) {
     var label = document.getElementById("labelNotify" + ID);
     if (label == null) {
         label = document.createElement("LABEL");
         label.id = "labelNotify" + ID;
         label.setAttribute( 'class', 'errorMessage' );
       }
 
     label.innerHTML = bool ? "" : "Please select a Value";
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

function checkg(entry)
{
    if(entry[0]=="-") return false;
    return true;
}
function alphaNumCheck(entry) {
    
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}

