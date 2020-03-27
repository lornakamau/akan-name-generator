document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault()
  })
  
  //get input from HTML
  function readData(){
  var dd = document.getElementById("dd").value;
  var mm = document.getElementById("mm").value;
  var yy = document.getElementById("yy").value;
  
  
  if (document.getElementById("male").checked){
    var male = true;
  }else{
    var female = true;
  }
  //calculation of day of the week
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var birthday = new Date(mm + '/' + dd + '/' + yy);
  var dayOfTheWeek = birthday.getDay();
  

if (dd <= 0 || dd >= 31){
    document.getElementById("feedback").innerText = "Please enter a valid date!"
    document.getElementById("feedback").style.color = "red"
    document.getElementById("feedback").style.paddingLeft = "36%"
  }
  else if(mm === "------"){
    document.getElementById("feedback").innerText = "Please select a month!"
    document.getElementById("feedback").style.color = "red"
    document.getElementById("feedback").style.paddingLeft = "40%"
  }
  else if(yy <= 0 || yy> 2020) {
    document.getElementById("feedback").innerText = "Please enter a valid year!"
    document.getElementById("feedback").style.color = "red"
    document.getElementById("feedback").style.paddingLeft = "38%"
  }
  else if( (mm === "February") && (dd <= 0 || dd > 29) && (0 == yy % 4) ){
      document.getElementById("feedback").innerText = "Please enter a valid date!"
      document.getElementById("feedback").style.color = "red"
      document.getElementById("feedback").style.paddingLeft = "38%"
  }
  else if( (mm === "February") && (dd <= 0 || dd > 28) && (0 != yy % 4) ){   
      document.getElementById("feedback").innerText = "Please enter a valid date!"
      document.getElementById("feedback").style.color = "red"
      document.getElementById("feedback").style.paddingLeft = "38%"
  }
  else if (male === true) {
    document.getElementById("display").innerHTML = "You were born on a " + days[dayOfTheWeek] + ".\n" +  "Your Akan name is " + maleNames[dayOfTheWeek] + "!"
    document.getElementById("display").style.color = "MediumBlue"
    document.getElementById("display").style.padding = "9% 22% 13% 22%"
    document.getElementById("display").style.fontSize = "35px"
    document.getElementById("display").style.fontFamily = "'Kalam', cursive"
    document.getElementById("display").style.textAlign = "center"
    }

    else if (female === true) { 
    document.getElementById("display").innerHTML = "You were born on a " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + femaleNames[dayOfTheWeek] + "!"
    document.getElementById("display").style.color = "DeepPink"
    document.getElementById("display").style.padding = "9% 22% 13% 22%"
    document.getElementById("display").style.fontSize = "35px"
    document.getElementById("display").style.fontFamily = "'Kalam', cursive"
    document.getElementById("display").style.textAlign = "center"
    }
  }
/*
  if(yy< 2020) {
    if(mm === "------"){
      document.getElementById("feedback").innerText = "Please select a month!"
      document.getElementById("feedback").style.color = "red"
      document.getElementById("feedback").style.paddingLeft = "40%"
    }
    if( (mm === "February") && (0 == yy % 4) && (0 != yy % 100) || (0 == yy % 400) ){
        if (dd <= 0 || dd > 29){
          document.getElementById("feedback").innerText = "Please enter a valid date!"
          document.getElementById("feedback").style.color = "red"
          document.getElementById("feedback").style.paddingLeft = "38%"
          }
    }
    if( (mm === "February") && (0 != yy % 4) ){   
        if (dd <= 0 || dd > 28){
          document.getElementById("feedback").innerText = "Please enter a valid date!"
          document.getElementById("feedback").style.color = "red"
          document.getElementById("feedback").style.paddingLeft = "38%"
          }
    }
    if ((mm != "February") && (dd <= 0 || dd >= 31)){
      document.getElementById("feedback").innerText = "Please enter a valid date!"
      document.getElementById("feedback").style.color = "red"
      document.getElementById("feedback").style.paddingLeft = "36%"
    }
  }
  else{
    document.getElementById("feedback").innerText = "Please enter a valid year!"
    document.getElementById("feedback").style.color = "red"
    document.getElementById("feedback").style.paddingLeft = "38%"
  }
}

      /*
  //Validitation and allocation of names
    if (mm != "February"){
      if (dd <= 0 || dd >= 31){
    document.getElementById("feedback").innerText = "Please enter a valid date!"
    document.getElementById("feedback").style.color = "red"
    document.getElementById("feedback").style.paddingLeft = "36%"
    } 

    else if(mm === "------"){
    document.getElementById("feedback").innerText = "Please select a month!"
    document.getElementById("feedback").style.color = "red"
    document.getElementById("feedback").style.paddingLeft = "40%"
    } 

    else if(mm === "February"){
      if( (0 == yy % 4) && (0 != yy % 100) || (0 == yy % 400) ){
        if (dd <= 0 || dd > 29){
      document.getElementById("feedback").innerText = "Please enter a valid year!"
      document.getElementById("feedback").style.color = "red"
      document.getElementById("feedback").style.paddingLeft = "38%"
      }
      else {
        document.getElementById("feedback").innerText = "Please enter a valid year!"
      document.getElementById("feedback").style.color = "red"
      document.getElementById("feedback").style.paddingLeft = "38%"
      }
    }

    else if(yy <= 0 || yy> 2020) {
    document.getElementById("feedback").innerText = "Please enter a valid year!"
    document.getElementById("feedback").style.color = "red"
    document.getElementById("feedback").style.paddingLeft = "38%"
    }
    else if (male === true) {
    document.getElementById("display").innerHTML = "You were born on a " + days[dayOfTheWeek] + ".\n" +  "Your Akan name is " + maleNames[dayOfTheWeek] + "!"
    document.getElementById("display").style.color = "MediumBlue"
    document.getElementById("display").style.padding = "9% 22% 13% 22%"
    document.getElementById("display").style.fontSize = "35px"
    document.getElementById("display").style.fontFamily = "'Kalam', cursive"
    document.getElementById("display").style.textAlign = "center"
    }

    else if (female === true) { 
    document.getElementById("display").innerHTML = "You were born on a " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + femaleNames[dayOfTheWeek] + "!"
    document.getElementById("display").style.color = "DeepPink"
    document.getElementById("display").style.padding = "9% 22% 13% 22%"
    document.getElementById("display").style.fontSize = "35px"
    document.getElementById("display").style.fontFamily = "'Kalam', cursive"
    document.getElementById("display").style.textAlign = "center"
    }
  }
} */
