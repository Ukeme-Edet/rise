const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > 0) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

cards.forEach((card) => {
	observer.observe(card);
});

const paragraphs = document.querySelector(".intro").querySelectorAll("p");

paragraphs.forEach((paragraph, i) => {
	if (i % 2 === 0) paragraph.style.textAlign = "left";
});

//fixes the situation where the progress bar is not at 0% when the page is loaded
window.addEventListener("DOMContentLoaded", () => {
	progress.style.width = "0%";
});

const progress = document.querySelector(".progress");
window.addEventListener("scroll", () => {
	const max = document.body.scrollHeight - innerHeight;
	progress.style.width = `${(window.scrollY / max) * 100}%`;
});
