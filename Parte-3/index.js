function watchButton(){
	let smtbtn=document.getElementById("submit");
	smtbtn.addEventListener("click", function (event){
		event.preventDefault();
		let name=document.getElementsByClassName("userName");
		let comment=document.getElementById("userComment");
		dispName = document.createElement("label");
		dispName.textContent = name[0].value;
		dispName.style.fontWeight = "bold";
		dispComment = document.createElement("label");
		dispComment.textContent = comment.value;
		let sectionC=document.getElementsByClassName("seccionComments");
		sectionC[0].append(dispName);
		sectionC[0].append(dispComment);
		name[0].value="";
		comment.value="";
	});
}

function init(){
	watchButton();
}

init();