function toggleMode() {
	const html = document.documentElement;
	html.classList.toggle("light");

	const img = document.querySelector("#profile img");

	if (html.classList.contains("light")) {
		img.setAttribute(
			"src",
			"https://media.licdn.com/dms/image/D4D03AQGCdfT1sEBxGA/profile-displayphoto-shrink_100_100/0/1687813480909?e=1700697600&v=beta&t=ya9IwI1e6BMNzy_dUJ0k7NFA9nbApH4jVK25PyUu1i4"
		);
		img.setAttribute(
			"alt",
			"Foto de Vinícius Vaz sentado e sorrindo com fundo e camiseta claros."
		);
	} else {
		img.setAttribute("src", "./assets/avatar.png");
	}
}
