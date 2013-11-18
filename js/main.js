window.onload=init;

function init(){

	console.log("start init");

	var webworksreadyFired = false;
	document.addEventListener('webworksready', function(e) {
		if (webworksreadyFired) return;
			webworksreadyFired = true;
		console.log("after webworks ready");
		
		console.log("before bb init");	

		bb.init({
		
		
	});
		console.log("after bb init");

		bb.pushScreen('screen2.html','screen2');	

	//do something special	
		},false);

	//document.querySelector("#addBtn").addEventListener("click",showProfForm,false);


}



function showProfForm(ev){

	ev.preventDefault();
	$("#formlink").hide();
	
	$("#addProfile").css("visibility","visible");
	$("#addProfile").show();
		
	$("#main").css("background-color","#000");
	
}

function populateForm(){

	console.log("in return populate form")

	var html="";

	$("#addProfile").hide();
	$("#main").hide();
	$("#showProfile").show();
	$("#showProfile").css("visibility","visible");
	
	
	html="<li>First Name :"+fname.value+"</li>";
	html+="<li>Last Name :"+lname.value+"</li>";
	html+="<li>Email :"+email.value+"</li>";
	html+="<li>Welcome to the Inventory system</li>";
	$("#plist").html(html);

	return false;

}
