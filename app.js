const addButton = document.querySelector(".add");
const uploadButton = document.querySelector(".upload");
const form = document.querySelector("form");
const main = document.querySelector("main");

let books = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function createCards(book) {
  let card = document.createElement("div");

  let readColor = book.read ? "#ecf9ff" : "yellow";
  let readStatus = book.read ? "Read" : "Not Read";

  let name = document.createElement("h2");
  name.textContent = book.name;
  name.classList.add("name");

  let author = document.createElement("h2");
  author.textContent = book.author;
  author.classList.add("author");

  let pages = document.createElement("h2");
  pages.textContent = book.pages;
  pages.classList.add("pages");

  let readButton = document.createElement("button");
  readButton.textContent = readStatus;
  readButton.style.backgroundColor = readColor;
  readButton.classList.add("readButton");

  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("removeButton");

  card.appendChild(name);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(readButton);
  card.appendChild(removeButton);

  card.setAttribute("id", books.length);

  main.appendChild(card);

  readButton.addEventListener("click", (e) => {
    let is_read = e.target.textContent;
    if (is_read === "Read") {
      e.target.textContent = "Not Read";
      e.target.style.backgroundColor = "yellow";
    } else {
      e.target.textContent = "Read";
      e.target.style.backgroundColor = "#ecf9ff";
    }
  });

  removeButton.addEventListener("click", (e) => {
    console.log(e.target.parentElement.id);
    main.removeChild(removeButton.parentElement);
  });
}

addButton.addEventListener("click", () => {
  form.classList.add("active");
});

uploadButton.addEventListener("click", (e) => {
  e.preventDefault();
  let newBook = new Book(
    form.name.value,
    form.author.value,
    form.pages.value,
    form.isRead.checked ? true : false
  );
  books.push(newBook);
  form.classList.remove("active");
  createCards(newBook);
  form.reset();
});
