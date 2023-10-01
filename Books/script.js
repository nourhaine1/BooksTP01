
var ListOfBooks = JSON.parse(localStorage.getItem('books'));
let modal = document.getElementById("exampleModal");
let modalTitle = document.getElementById("modalTitle");
let index= null;
function openModal(type,indexnow) {
   modal.style.display ="block";
   var name = document.getElementById('name').value='';
   var cat = document.getElementById('cat').value='';
   var auth = document.getElementById('auth').value='';
   var price = document.getElementById('price').value='';
   if (type == "add"){
      modalTitle.textContent="Add book";
   }
   else if (type == "edit"){
      modalTitle.textContent="Edit book";
      index = indexnow; 
 let book =ListOfBooks[indexnow];
 document.getElementById('name').value=book.name;
 document.getElementById('cat').value=book.cat;
 document.getElementById('auth').value=book.auth;
  document.getElementById('price').value=book.price;

   }

}
function closeModal() {
   modal.style.display="none";
}
function saveToLocalStorage() {

   console.log("test of function entry ");

   var name = document.getElementById('name').value;
   var cat = document.getElementById('cat').value;
   var auth = document.getElementById('auth').value;
   var price = document.getElementById('price').value;
   var newBook = { name: name, cat: cat, auth: auth, price: price };
   console.log(newBook);
   var books = JSON.parse(localStorage.getItem('books'));

   if (index ===null){
      books.push(newBook);
      alert("Book added successfully");

   }
   else {
      books[index] = newBook;
      alert("Book edited successfully");

   }
   localStorage.setItem('books', JSON.stringify(books));
   window.location.reload();
}

function getBooksFromLocalStorage() {
   var ListOfBooks = JSON.parse(localStorage.getItem('books'));
   console.log(ListOfBooks);
var html='';
   var tableBookshtml = document.querySelector('#tableBooks tbody');
   ListOfBooks.forEach(function (element, index) {
      html += "<tr>";
      html += "<td>" + element.name + "</td>"; html += "<td>" + element.auth + 
      "</td>"; html += "<td>" + element.cat + "</td>"; 
      html += "<td>" + element.price+ "</td>";
      html += "<td>" + ''+'<button type="button" class="btn btn-danger" onclick="deleteBook(' + index + ')"> Delete</button>'+ '<button type="button" class="btn btn-info"  onclick="openModal(\'edit\', ' + index + ')"data-toggle="modal" data-target="#editModal"> Edit</button>'+"</td>";
     
     // html += "<td>" + ''+'<button class="btn btn-danger" onclick="deleteBook('+index +')"> Delete</button>'+ "</td>";
      html += "</tr>";

       });
       tableBookshtml.innerHTML=html;
       
}


// Call the function to display books from localStorage when the page is loaded
window.onload = function() {
   getBooksFromLocalStorage();
};

function deleteBook(ind){
 console.log(" ********************* the index here is " + ind.type);
index=parseInt(ind);
   ListOfBooks.splice(index, 1); // Remove the book at the given index
  localStorage.setItem("books", JSON.stringify(ListOfBooks));
  alert("Book deleted successfully.");
  window.location.reload();

   //getBooksFromLocalStorage();
  }

//function editBook(index, book) 
