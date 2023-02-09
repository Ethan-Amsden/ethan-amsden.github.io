"use strict";

// cc_form_validator.js
// By: Ethan Amsden, Ben Hillman
// Date: 12/8/22

const $ = selector => document.querySelector(selector);

// Function to validate Data in Form.
function validateForm() 
{
	// input variables
	const email = $("#floatingInputEmail").value;
	const fname = $("#floatingInputFirstName").value;
	const lname = document.getElementById("floatingInputLastName").value;
	const chname = document.getElementById("floatingInputCharacterName").value;	

	// pattern variable
	const emailPattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
	
	let isValid = true;
    
	if(!isNaN(fname)) {
		var fnameError = document.getElementsByTagName("span")[1].textContent = "Please enter a first name";
	}
	else {
		fnameError = document.getElementsByTagName("span")[1].textContent = "";
	};

	if(!isNaN(lname)) {
		var lnameError = document.getElementsByTagName("span")[2].textContent = "Please enter a last name";
	}
	else {
		lnameError = document.getElementsByTagName("span")[2].textContent = "";
	};

	if(!isNaN(chname)) {
		var chnameError = document.getElementsByTagName("span")[3].textContent = "Please enter a character name";
	}
	else {
		chnameError = document.getElementsByTagName("span")[3].textContent = "";
	};	

	if(!emailPattern.test(email)) {
		isValid = false;
		emailError = document.getElementsByTagName("span")[0].textContent = "Please Enter a valid email address";	
	}
	else {
		emailError = document.getElementsByTagName("span")[0].textContent = "";
	};
	
};

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#formsubmit").addEventListener("click", validateForm);
	$("#floatingInputEmail").focus();
});