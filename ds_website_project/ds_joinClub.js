/*
filename: ds_joinClub.js
Author: Ethan Amsden
Date: 

Note:
*/

window.onload = function() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("No invalid data detected. Will retain data for setting up account." \
	  + " We will send you and email soon informing you that you have now joined the club.");
      return false;
   };
};