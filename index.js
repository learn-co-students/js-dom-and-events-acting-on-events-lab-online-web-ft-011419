function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  const employeeInfo = document.querySelector('input').value
  return employeeInfo
}

function addNewElementAsLi(){
  const unorderedList = document.querySelector("ul")
  const list = document.createElement("li")

  list.innerHTML = retrieveEmployeeInformation()
  unorderedList.appendChild(list);
}

function addNewLiOnClick(){
  const submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function(event){
    addNewElementAsLi()
    document.querySelector('input').value = ""
  })
}

function clearEmployeeListOnLinkClick(){
  clear = document.querySelector('a')
  list = document.querySelector('ul')
  clear.addEventListener("click", function(event){
    list.innerHTML = ""
  })
}
