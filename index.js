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
  const list = document.querySelector("ul")
  const newList = document.createElement("li")
  newList.innerHTML = retrieveEmployeeInformation()
  list.appendChild(newList)
}

function addNewLiOnClick() {
  const submit = document.querySelector('input[type="submit"]')
  submit.addEventListener("click", function(event){
    addNewElementAsLi()
    document.querySelector("input").value = ""
  })
}

function clearEmployeeListOnLinkClick(){
  const clear = document.querySelector("a")
  const ul = document.querySelector("ul")
  clear.addEventListener("click", function(event) {
    ul.innerHTML = ""
  })
}