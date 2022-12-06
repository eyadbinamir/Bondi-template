setTimeout(() => {
	let toTop = document.querySelector("svg.toTop");
	toTop.onclick = () => {
		window.scrollTo({ top: 0 });
	};

	window.addEventListener("scroll", () => {
		if (window.scrollY >= 500 && window.scrollY <= 800) {
			toTop.style.bottom = `${(window.scrollY - 600) * 0.25}px`;
		} else if (window.scrollY <= 600) {
			toTop.style.bottom = `${(window.scrollY - 600) * 0.25}px`;
		} else if (window.scrollY >= 650) {
			toTop.style.bottom = `50px`;
		}
	});
}, 100);

let ourWorkLIs = document.querySelectorAll(".our-work ul li");
let tmpcard = document.querySelectorAll(".cards-container div.card");
let card = [];
tmpcard.forEach((element) => {
	card.push(element);
});
ourWorkLIs.forEach((button) => {
	button.addEventListener("click", () => {
		ourWorkLIs.forEach((li) => {
			li.classList.remove("active");
		});
		button.classList.add("active");
		card.forEach((card) => {
			if (button.attributes["data"].value == "all") {
				card.style.display = "flex";
				setTimeout(() => {
					card.style.opacity = "1";
				}, 0);
			} else if (
				card.attributes["data-content"].value != button.attributes["data"].value
			) {
				card.style.display = "none";
				card.style.opacity = "0";
			} else if (
				card.attributes["data-content"].value == button.attributes["data"].value
			) {
				card.style.display = "none";
				card.style.opacity = "0";
				setTimeout(() => {
					card.style.display = "flex";
				}, 0);
				setTimeout(() => {
					card.style.opacity = "1";
				}, 100);
			}
		});
	});
});
