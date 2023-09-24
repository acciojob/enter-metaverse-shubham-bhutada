//your JS code here. If required.
const para = document.getElementById("status");
const button = document.getElementById("enterBtn");

button.addEventListner("click", () => {
	let h1 = document.createElement("h1");
	h1.innerText = "Enteered Metaverse";
	document.body.insertBefore(h1, para);
	para.remove();
})