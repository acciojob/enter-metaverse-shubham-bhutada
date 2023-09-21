//your JS code here. If required.
const status = document.getElementById("status");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListner("click", ()=> {
	status.innerHTML = "<h1 id="status">Entered Metaverse</h1>";
})