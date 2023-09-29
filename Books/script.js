function saveToLocalStorage() {
   console.log("test of function entry ");

   var name = document.getElementById('name').value;
   var cat = document.getElementById('cat').value;
   var auth = document.getElementById('auth').value;
   var price = document.getElementById('price').value;
   var newBook = { name: name, cat: cat, auth: auth, price: price };
   console.log(newBook);

   var books = JSON.parse(localStorage.getItem('books'));
   books.push(newBook);
   localStorage.setItem('books', JSON.stringify(books));
   alert("Book added successfully");
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
      html += "<td>" + '<button class="btn btn-info" onclick="editBook()" > Edit</button>'+'<button class="btn btn-danger" onclick="deleteBook()"> Delete</button>'+ "</td>";
      html += "</tr>";

       });
       tableBookshtml.innerHTML=html;
       
}

// Call the function to display books from localStorage when the page is loaded
window.onload = function() {
   getBooksFromLocalStorage();
};
