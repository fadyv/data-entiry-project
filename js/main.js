(function($) {

	"use strict";


})(jQuery);



var password = document.getElementById('password');
var repassword = document.getElementById('repassword');
var password1 = document.getElementById('password1');
var repassword1 = document.getElementById('repassword1');
var submit = document.getElementById('repassword');
var body = document.getElementById('body');
var passValidation = document.getElementById('passValidation');





// validation for password
function val(){

	if(password.value == repassword.value){

		passValidation.classList.replace('d-flex','d-none');

	}else
	passValidation.classList.replace('d-none','d-flex');

};






function Search() {
	var filter = document.getElementById('search').value;
	var myTable = document.getElementById('table');
	var tr = myTable.getElementsByTagName('tr');

	for (var i = 0; i < tr.length; i++) {

		let td=tr[i].getElementsByTagName('td')[0];

		if (td) {

			let textvalue= td.textContent ||td.innerHTML;

			if (textvalue.indexOf(filter) > -1) {
				tr[i].style.display="";
				
			}else{
				tr[i].style.display="none";
				
			}

		}
		
		
	}


	
}



