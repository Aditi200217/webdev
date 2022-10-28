//to dos:
// store all the data to local storage
// give an option to delete the book 
// add a scroll  bar to the view
console.log(`This is app.js`);
showBklist();

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
  constructor() { }
  // Implement the clear function
  clear() {
    let libraryForm = document.getElementById(`libraryForm`);
    libraryForm.reset();
  }
  // Implement the validate function
  validate(book) {
    if (book.name.length < 3 || book.author.length < 4) {
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



  //Function to show elemrents from local storage
  function showBklist(){
    let table = localStorage.getItem(`tableBody`);
    if (table==null){
      tableObj = [];
    }
    else {
       tableObj = JSON.parse(table);}
      
    let html = ""
    tableObj.forEach(function(element,index){
      html += `<tr>                   
      <td>${element.bkName}</td>
      <td>${element.bkAuthor}</td>
      <td>${element.bkType}</td>
      <td><button id="${index}"onclick=" deleteBook(this.id)" class="btn btn-primary">Delete Book</button></td>
      </tr>`;
    })
    let bkElm = document.getElementById('tableBody');
    if (tableObj.length != 0){
      bkElm.innerHTML = html;
    }
    else{
      bkElm.innerHTML = "Please Add a book to the list"
    }

  }


  //Function to delete book

  function deleteBook(index){
    // console.log(`I am deleting `,index);
  
    let table = localStorage.getItem(`tableBody`);
    if (table == null){
      tableObj = [];
    }
    else {
      tableObj = JSON.parse(table);
    }
  
    tableObj.splice(index,1);
    localStorage.setItem(`tableBody`,JSON.stringify(tableObj));
    showBklist();
  }

// Add submit event listner to libraryForm

let libraryForm = document.getElementById(`libraryForm`);
libraryForm.addEventListener(`submit`, libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log(`You have submitted library form`);
  let name = document.getElementById(`bookName`).value;
  let author = document.getElementById(`author`).value;
  let type;
  let fiction = document.getElementById('fiction')  
  let programming = document.getElementById('programming')  
  let biopic= document.getElementById('biopic')  

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
    // Add book list to local storage
  
  let table = localStorage.getItem(`tableBody`);
  if (table==null){
    tableObj = [];
  }
  else {
     tableObj = JSON.parse(table);}
    
     let bookObj = {
       bkName : name,
       bkAuthor : author,
       bkType : type
     }

     tableObj.push(bookObj);
     localStorage.setItem(`tableBody`,JSON.stringify(tableObj));
     console.log(tableObj);
     display.add(book);
     display.clear();
     display.show(`success`, " Your book has beem successfully added.");
  } else {
    // Show error to the user
    display.show(`danger`, "Sorry you cannot add this book.");
  }

  e.preventDefault();
}

