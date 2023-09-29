//your JS code here. If required.
const para = document.getElementById("status");
const button = document.getElementById("enterBtn");

button.addEventListner("click", () => {
	let h1 = document.createElement("h1");
	let p = document.createElement("p");
	h1.innerText = "Entered Metaverse";
	h1.id = "status";
	p.appendChild(h1);
	document.body.insertBefore(p, para);
	para.remove();
})