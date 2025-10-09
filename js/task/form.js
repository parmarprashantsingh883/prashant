function reg_form(str){
    if(str.firstname.value=="");{
        document.getElementById('message').innerHTML="! Please enter Some Value in User Name";
        str.firstname.focus();
	return false;
    }
}