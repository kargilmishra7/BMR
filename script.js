var BMR;
function calbmr()
{    var x;
    x = document.getElementById("age").value;
    if ( x < 1 || x > 120) 
     { document.getElementById("print").innerHTML="Input Invalid! Try again.";
     document.getElementById("age").value="";
     document.getElementById("gender").value="";
     document.getElementById("weight").value="";
     document.getElementById("height").value="";
    
    }
    
    else 
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
    document.getElementById("print").innerHTML=BMR;}

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
        var alert =document.getElementById("print").innerHTML;
        if(alert < totcal)
        {document.getElementById("warning").innerHTML=" ALERT:You've exceeded your standard daily consumption of calories.";}
        else{
            document.getElementById("warning").innerHTML="ALERT:You're yet to meet your standard daily expected calorie consumption." ;
        }
        
        }

       
    
      
       
    





