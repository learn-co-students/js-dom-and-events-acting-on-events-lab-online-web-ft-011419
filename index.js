function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}
function addNewElementAsLi() {

  let list = document.querySelector('ul.employee-list');
  let li = document.createElement("li");
  li.innerHTML = retrieveEmployeeInformation();
  list.appendChild(li)
}
function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener("click", function(event) {
    addNewElementAsLi();
    document.querySelector('input').value = ''
  })
}
function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(event) {
    document.querySelector('ul.employee-list').innerHTML = "";
  })
}
