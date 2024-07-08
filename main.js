const myLibrary = [
	new Manga("Miss Kobayashi's Dragon Maid", "Coolkyousinnjya", "15", "No"),
	new Manga("Great Teacher Onizuka", "Tooru Fujisawa", "25", "Yes"),
	new Manga("Made in Abyss", "Akihito Tsukushi", "12", "Yes"),
	new Manga("Tomo-chan Is a Girl!", "Fumita Yanagida", "8", "Yes"),
	new Manga("Yotsuba&!", "Kiyohiko Azuma", "15", "Yes"),
];

function Manga(title, author, volumes, readYet) {
	this.title = title;
	this.author = author;
	this.volumes = volumes;
	this.readYet = readYet;
	this.info = function () {
		return title + " by " + author + ", " + volumes + " volumes, " + readYet;
	};
	this.toggleRead = function () {
		if (this.readYet == "Yes") {
			this.readYet = "No";
		} else this.readYet = "Yes";
	};
}

function displayManga() {
	i = 0;
	myLibrary.forEach((manga, i) => {
		createMangaCard(manga, i);
	});
}

function createMangaCard(newManga, i) {
	const cardbox = document.getElementById("cardbox");
	const newcard = document.createElement("div");
	const title = document.createElement("div");
	title.textContent = `${newManga.title}`;
	const author = document.createElement("div");
	author.textContent = `by ${newManga.author}`;
	const volumes = document.createElement("div");
	volumes.textContent = `${newManga.volumes} volumes`;
	const readYet = document.createElement("div");
	readYet.textContent = `Read yet? ${newManga.readYet}`;
	const deleteCard = document.createElement("button");
	deleteCard.textContent = `Delete`;
	const toggleRead = document.createElement("button");
	toggleRead.textContent = `Read?`;

	deleteCard.addEventListener("click", function () {
		myLibrary.splice(i, 1);
		refreshLibrary();
	});
	toggleRead.addEventListener("click", function () {
		myLibrary[i].toggleRead();
		console.log(myLibrary[i].readYet);
		refreshLibrary();
	});
	newcard.appendChild(title);
	newcard.appendChild(author);
	newcard.appendChild(volumes);
	newcard.appendChild(readYet);
	newcard.appendChild(deleteCard);
	newcard.appendChild(toggleRead);
	cardbox.appendChild(newcard);
}

function showForm() {
	formDisplay = document.getElementById("formElement").style.display;
	if (formDisplay == "none")
		document.getElementById("formElement").style.display = "flex";
	else document.getElementById("formElement").style.display = "none";
}

formElement.addEventListener("submit", (e) => {
	console.log(title);
	readYet = "";
	title = title.value;
	author = author.value;
	volumes = volumes.value;
	if (readNo.checked == true) {
		readYet = "No";
	} else readYet = "Yes";
	console.log(title, author, volumes, readYet);
	addMangaToLibrary(title, author, volumes, readYet);
	clearValues();
	e.preventDefault();
});

function addMangaToLibrary(title, author, volumes, readYet) {
	newManga = new Manga(title, author, volumes, readYet);
	myLibrary.push(newManga);
	createMangaCard(newManga);
}
function refreshLibrary() {
	const cardbox = document.getElementById("cardbox");
	cardbox.innerHTML = "";
	displayManga();
}
function clearValues() {
	formElement.reset();
}
function displayLib() {
	console.log(myLibrary);
}

displayManga();
