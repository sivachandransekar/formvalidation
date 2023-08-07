function formvalidate(){
    var entername=document.forms["form"]["first-name"].value;
    console.log(entername);
    var enteremail=document.forms["form"]["reg-email"].value;
    var enterpassword=document.forms["form"]["reg-password"].value;
    var enterlast=document.forms["form"]["last-name"].value;
    var enterphonenumber=document.forms["form"]["reg-phone"].value;
    var enterconformpassword=document.forms["form"]["reg-confirmpassword"].value;
    var gendervalue=document.forms["form"]["gender"].value;
    

    
    if(entername==""){
        document.getElementById("firstname-span").style.display="block";
          return false;
    } 
    else{
        document.getElementById("firstname-span").style.display="none";

    }
    if(enteremail=="" ){
        document.getElementById("email-span").style.display="block";
       
          return false;
    } 
    else{
        document.getElementById("email-span").style.display="none";
       
    }
            // if(enteremail !="@" ){
            //     document.getElementById("email11-span").style.display="block";
            
            //     return false;
            // } 
            // else{
            //     document.getElementById("email11-span").style.display="none";
            
            // }
    

    if(enterpassword==""){
        document.getElementById("password-span").style.display="block";
          return false;
    } 
    else{
        document.getElementById("password-span").style.display="none";

    }
            if(enterpassword.length<8){
                document.getElementById("password1-span").style.display="block";
                return false;
            } 
            else{
                document.getElementById("password1-span").style.display="none";

            }
    if(enterlast==""){
       document.getElementById("lastname-span").style.display="block";
            return false;
            } 
    else{
                document.getElementById("lastname-span").style.display="none";
        
            } 
     if(enterphonenumber==""){
           document.getElementById("phone-number-span").style.display="block";
                     return false;
                     } 
         else{
                         document.getElementById("phone-number-span").style.display="none";
                 
                     }  
      if(isNaN(enterphonenumber) || enterphonenumber < 10){
             document.getElementById("phone1-number-span").style.display="block";
                                  return false;
                                  } 
          else{
                 document.getElementById("phone1-number-span").style.display="none";
                              
            }
            if(enterconformpassword==""){
                document.getElementById("conformpassword-span").style.display="block";
                  return false;
            } 
            else{
                document.getElementById("conformpassword-span").style.display="none";
        
            }
                    if(enterconformpassword.length<8){
                        document.getElementById("conformmpassword1-span").style.display="block";
                        return false;
                    } 
                    else{
                        document.getElementById("conformmpassword1-span").style.display="none";
        
                    }
                 
                    if(gendervalue==""){
                        document.getElementById("gender-span").style.display="block";
                                  return false;
                                  } 
                      else{
                                      document.getElementById("gender-span").style.display="none";
                              
                                  }  
    
}

