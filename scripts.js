/* Use this area for pseudo - coding:

click add contact 
stringify contact as object
save to local storage

click display contact
parse obect, append html to display div



*/

// Query selectors
var registerButton = document.querySelector('#register-btn')
var displayButton = document.querySelector('#display-btn')
var userDisplay = document.querySelector('.display-area')
var contacts = []



// Event listeners

registerButton.addEventListener('click', saveContact)
displayButton.addEventListener('click', showContacts)



// Functions

function saveContact(){
  console.log('!!!');
  var name = document.querySelector('#name').value
  var email = document.querySelector('#email').value
  var contact = { name: name, email: email }
  contacts.push(contact)
  var contactsToSave = JSON.stringify(contacts)
  localStorage.setItem('contacts', contactsToSave)
}

function showContacts() {
  var contacts = JSON.parse(localStorage.getItem('contacts'))
  userDisplay.innerHTML = ''
  for(let i = 0; i < contacts.length; i++){
    userDisplay.innerHTML += `
    <div>
    <p>Name: ${contacts[i].name}</p>
    <p>Email: ${contacts[i].email}</p>
    <div>
    `
  }
}
