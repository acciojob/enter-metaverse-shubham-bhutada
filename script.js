//your JS code here. If required.
const status = document.getElementById("status");
const enterBtn = document.getElementById("enterBtn");

function changePara() {
	// status.innerHTML = "<h1 id="status">Entered Metaverse</h1>";
	let h1 = document.createElement("h1");
	h1.innerText = "Entered Metaverse";
	h1.id = "status";
	document.body.insertBefore(h1, enterBtn)
	status.remove();
		
}