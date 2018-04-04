const HOURHAND = document.getElementById("hour");
const MINUTEHAND = document.getElementById("minute");
const SECONDHAND = document.getElementById("second");

function time(){

	var date = new Date();

	var hr = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var hrPosition = [(hr/12)*360];
	var minPosition = [(min/60)*360];
	var secPosition = [(sec/60)*360];

	HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
	MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
	SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

	setTimeout("time()", 1000);

}

time();