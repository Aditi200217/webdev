//to dos:
// store all the data to local storage
// give an option to delete the book 
// add a scroll  bar to the view
console.log(`This is app.js`);

// Constructor
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

//Display constructor
class Display {
    constructor() {}
    //Add methords to display prototypes
    add(book) {
        console.log(`Adding to UI`);
        tableBody = document.getElementById(`tableBody`);

        let uiString = `<tr>                   
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`;
        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryForm = document.getElementById(`libraryForm`);
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        } else {
            return true;
        }
    }
    show(type, msg) {
        let message = document.getElementById(`message`);
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message :</strong> ${msg}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;

        setTimeout(function () {
            message.innerHTML = "";
        }, 2000);
    }
}





// Add submit event listner to libraryForm

let libraryForm = document.getElementById(`libraryForm`);
libraryForm.addEventListener(`submit`, libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log(`You have submitted library form`);
  let name = document.getElementById(`bookName`).value;
  let author = document.getElementById(`author`).value;
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (biopic.checked) {
    type = biopic.value;
  }

  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();

  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show(`success`, " Your book has beem successfully added.");
  } else {
    // Show error to the user
    display.show(`danger`, "Sorry you cannot add this book.");
  }
  display.add(book);
  display.clear();

  e.preventDefault();
}
