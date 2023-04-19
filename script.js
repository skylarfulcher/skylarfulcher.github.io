function showMore () {
	let extraP=document.getElementById("aboutextra");
	let link=document.getElementById("aboutlink");
	if (extraP.classList.contains("hidden")){
		extraP.classList.remove("hidden");
		link.innerHTML="See less";
	} else {
		extraP.classList.add("hidden");
		link.innerHTML ="See more";
	}
}
function showMoreAgain() {
	let extracP=document.getElementById("careerextra");
	let link2=document.getElementById("link2");
	if (extracP.classList.contains("hidden")){
		extracP.classList.remove("hidden");
		link2.innerHTML="See less";
	} else {
		extracP.classList.add("hidden");
		link2.innerHTML ="See more";
	}
}

function showGrade () {
	let q1 =document.getElementById("q1");
	let q2 =document.getElementById("q2");
	let q3 =document.getElementById("q3");
	let q4 =document.getElementById("q4");
	let quizP =document.getElementById("score");
	
	let firstQ= document.getElementById("in-line").value;
	let secondQ= document.getElementById("margin").value;
	let thirdQ= document.getElementById("block-lvl").value;
	let fourthQ= document.getElementById("array").value;
	let count= 0;
	if (firstQ == "div") {
		q1.innerHTML = "Question 1: Correct";
		count= count+1;
	} else {
		q1.innerHTML = "Question 1: Incorrect";
	}
	if (secondQ == "margin : 10px;") {
		q2.innerHTML = "Question 2: Correct";
		count= count+1;
	} else {
		q2.innerHTML = "Question 2: Incorrect";
	}
	if (thirdQ == "small") {
		q3.innerHTML = "Question 3: Correct";
		count= count+1;
	} else {
		q3.innerHTML = "Question 3: Incorrect";
	}
	if (fourthQ == "None of these") {
		q4.innerHTML = "Question 4: Correct";
		count= count+1;
	} else {
		q4.innerHTML = "Question 4: Incorrect";
	}

		quizP.innerHTML = "Score :" +count+ "/4";
}

setInterval(changeSlide, 10000);
function changeSlide(){
	let pic1=document.getElementById("joey1");
	let pic2=document.getElementById("joey2");
	let pic3=document.getElementById("joey3");
	let pic4=document.getElementById("joey4");
	
	if(!pic1.classList.contains("hidden")){
		pic1.classList.add("hidden");
		pic2.classList.remove("hidden");
	} else if (!pic2.classList.contains("hidden")){
		pic2.classList.add("hidden");
		pic3.classList.remove("hidden");
	} else if (!pic3.classList.contains("hidden")){
		pic3.classList.add("hidden");
		pic4.classList.remove("hidden");
	} else if (!pic4.classList.contains("hidden")){
		pic4.classList.add("hidden");
		pic1.classList.remove("hidden");
	}
}

	