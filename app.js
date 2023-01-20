function sub(){
    var i1 = document.getElementById("validationCustom01").value; 
    var i2 = document.getElementById("validationCustom03").value; 
    var i3 = document.getElementById("validationCustom04").value; 
    var i4 = document.getElementById("validationCustom05").value;
         if(i1=="" && i2=="" && i3=="" && i4==""){
            //alert();
            document.getElementById("place1").innerHTML="ERROR!!!";
            document.getElementById("place2").innerHTML="Fill form accurately!!!";
            document.getElementById("place1").style.color ="red";
            document.getElementById("place2").style.color ="red";
        }
        else if(i1!="" && i2!="" && i3!="" && i4!=""){
            document.getElementById("place1").innerHTML="HURRAY!!!";
            document.getElementById("place2").innerHTML="ORDER PLACED!!";
            document.getElementById("place1").style.color ="GREEN";
            document.getElementById("place2").style.color ="GREEN";
        }
    }