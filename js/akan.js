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
  
  //Validitation and allocation of names
    if (dd <= 0 || dd >= 31){
    document.getElementById("feedback").innerText = "Please enter a valid date!"
    document.getElementById("feedback").style.color = "red"
    document.getElementById("feedback").style.paddingLeft = "36%"
    } else if(mm === "------"){
    document.getElementById("feedback").innerText = "Please select a month!"
    document.getElementById("feedback").style.color = "red"
    document.getElementById("feedback").style.paddingLeft = "40%"
    } else if(yy <= 0 || yy> 2020){
    document.getElementById("feedback").innerText = "Please enter a valid year!"
    document.getElementById("feedback").style.color = "red"
    document.getElementById("feedback").style.paddingLeft = "38%"
    }else if (male === true){
    document.getElementById("display").innerHTML = "Born on a " + days[dayOfTheWeek] + "Your Akan name is " + maleNames[dayOfTheWeek] + "!"
    }else if (female === true){
      document.getElementById("display").innerHTML = "You were born on a " + days[dayOfTheWeek] + "Your Akan name is " + femaleNames[dayOfTheWeek] + "!"
    }else{
      document.getElementById("feedback").innerText = "Please select Gender "
      document.getElementById("feedback").style.color = "red"
      document.getElementById("feedback").style.paddingLeft = "32%"
    }
  }

 /* document).ready(function(){
    $("#myBirthDate").mask("99/99/9999");
});


function getAkanName(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    var myBirthday = document.getElementById("myBirthDate").value;
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    if(myBirthday === ""){
        document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh snap!</strong> You Didn't Submit a Valid Date!</div>";
        $('#message').addClass("animated shake");
    }
    else {
        for(var i=0;i<myGender.length;i++){
            if(myGender[i].checked){
                if(myGender[i].value === "Male"){
                    document.getElementById('message').innerHTML = "<span><i class=\"fa fa-male\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
                    $('#message span:first-child').addClass("animated fadeInDown");
                    $('#message span:last-child').addClass("animated fadeInUp");
                }
                else {
                    document.getElementById('message').innerHTML = "<span><i class=\"fa fa-female\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
                    $('#message span:first-child').addClass("animated fadeInDown");
                    $('#message span:last-child').addClass("animated fadeInUp");
                }
                break;
            }    
            else {
                document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh snap!</strong> You Should Select a Gender Too Determine Your Akan Name!</div>";
                $('#message').addClass("animated shake");
            }
        }
    }
}

function clearAkanMessage(){
    document.getElementById('message').innerHTML = "";
}
*/