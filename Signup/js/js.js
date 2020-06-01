
// Erasing Placeholder
function validate1(){
    var fn = document.getElementById('FN').value,
        ln = document.getElementById('LN').value,
        em = document.getElementById('EM').value,
        ps = document.getElementById('PS').value,
        mo = document.getElementById('MO').value,
        span = document.getElementById('span'),
        passlength = ps.length;


    if(fn===""||ln===""||em===""||ps===""||mo===""||ps==0){
      span.innerHTML = "You can not leave any field empty!";
      return false;
    }

    else if(fn.search(/[0-9]/)>0||ln.search(/[0-9]/)>0){
        span.innerHTML = "You Can't input numbers in first or last name fields!";
        return false;
    }

    else if(passlength!=8){
            span.innerHTML = "Your password must include 8 characters!";
            return false;
    }

    else if(ps[0].match(/^[A-Z]/)==null){
            span.innerHTML = "Your password must start with uppercase character!";
            return false;
    }

    else if(ps.search(/[0-9]/)==-1){
      span.innerHTML = "Your password must include one digit at least!";
      return false;
    }

    else if(ps.search(/[-_#&*]/)==-1){
      span.innerHTML = "Your password must includeone special character at least like - , _ , #, &, and *";
      return false;
    }

    else if(ps.search(" ")>0){
      span.innerHTML = "No white spaces allowed in the password";
      return false;
    }

    else if(mo.match(/[A-Z]/) || mo.match(/[a-z]/) || mo.match(/[-_#&*@!$%^&]/)){
      span.innerHTML = "Your mobile number must include only digits";
      return false;
    }

    else if(mo.length!=11){
      span.innerHTML = "Your mobile number must be 11 digit";
      return false;
    }
}

function show_hide(){
     if( passbutton.innerHTML == 'Show Password' ) {
            passbutton.innerHTML = 'Hide Password';
            document.getElementById('PS').type="text";
            return false;
        } else {
            passbutton.innerHTML = 'Show Password';
            document.getElementById('PS').type="password";
            return false;
        }
}

function form_action(){
  alert("Your Account has been created successfully");
  location.replace("../index.html");
  return true;
}
