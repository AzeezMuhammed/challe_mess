const alertEl = document.getElementById('error-message');
const btn = document.getElementById('add-to-cart');
const alertMsgEl = alertEl.querySelector("div");

btn.addEventListener("click", () => {
	alertEl.classList.toggle("show-me");
	alertEl.addEventListener("click", (e) => {	
		if (e.target != alertMsgEl) {
		 alertEl.classList.remove("show-me");
		}
	});
});