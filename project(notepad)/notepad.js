console.log(`Notes App`);
showNotes();

//If user adds a note add it to the local storage

let addBtn = document.getElementById(`addbtn`);
addBtn.addEventListener("click", function (e) {

  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes= localStorage.getItem(`notes`);
  if (notes == null) {
    notesObj = [];
  } 
  else {
    notesObj = JSON.parse(notes);
  }

  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }

  notesObj.push(myObj);
  localStorage.setItem(`notes`, JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value="";
  // console.log(notesObj);
  showNotes();
});

//Function to show elements from localStorage
function showNotes(){
  let notes = localStorage.getItem(`notes`);
  if(notes ==null){
      notesObj=[];
  } 
  else{
      notesObj=JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element,index) {
      html += 
              ` <div class="card noteCard mx-2 my-2" style="width: 18rem;">
              <div class="card-body">
              <h5 class= " card-title" > ${element.title}</h5>
                <p class="card-text"> ${element.text}</p>
                <button id="${index}"onclick=" deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
              </div>
            </div>`;
  });
  let notesElm = document.getElementById('notes');
  if(notesObj.length != 0){
      notesElm.innerHTML = html;
  }
  else{
      notesElm.innerHTML=`Nothing to show ! Use "Add a Note" section above to add notes`;
  }
}

//Function to delete a note

function deleteNote(index){
    console.log(`I am deleting.`,index);

    let notes = localStorage.getItem(`notes`);
   if(notes ==null){
       notesObj=[];
   } 
   else{
       notesObj=JSON.parse(notes);
   }

   notesObj.splice(index,1);
   localStorage.setItem(`notes`, JSON.stringify(notesObj));
   showNotes();
}

//Search functonallity

let search = document.getElementById(`search`);
search.addEventListener("input",function(){

    let inputVal = search.value.toLowerCase();
    console.log(`Input event fired`,inputVal);
    let noteCards = document.getElementsByClassName(`noteCard`);
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName(`p`)[0].innerText;
        console.log(cardTxt);
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else {
            element.style.display = "none";
        }
    })

})

/*
Further Features:
1. Add title
2. Mark as important
3. Seperate Notes by User
4. Sync and host to a web server
<h5 class="card-title">Note ${index + 1}</h5>
*/