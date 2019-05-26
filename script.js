function calbmr()
{
    var age=document.getElementById("age").value;
    var gender=document.getElementById("gender").value;
    var weight=document.getElementById("weight").value;
    var height=document.getElementById("height").value;

    if(gender=="Female" || gender=="Others")
    {
        var BMR= (10*weight)+(6.25*height)-(5*age)+5;
    }
    else{
        BMR=(10*weight)+(6.25*height)-(5*age)-161;
    }
    document.getElementById("print").innerHTML="BMR value is :"+BMR+" cal.";
   
}
var totcal=0;
function caloriein()
   {   var nme= document.getElementById("Name").value;
       var q =document.getElementById("Quantity").value;
       var c = document.getElementById("CAL").value;
       totcal =totcal+ (q*c);
       var node = document.createElement("LI");
       var textnode=document.createTextNode(nme+"- "+ (q*c));
       node.appendChild(textnode);
       document.getElementById("foodlist").appendChild(node);
        document.getElementById("Name").value="";
		document.getElementById("CAL").value="";
        document.getElementById("Quantity").value="";
        
   }


      
       function output()
       {
        
	    document.getElementById("id2").innerHTML= "Your total calorie consumtion for today is "+totcal+" cal.";

        totcal=0;
    
       }
     
       
    





