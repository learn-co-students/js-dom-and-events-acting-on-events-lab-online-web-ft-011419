function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()
let input =document.querySelector('input')

function retrieveEmployeeInformation(){
  return input.value
}
function addNewElementAsLi(){
  let ul = document.querySelector('.employee-list')
  let employee = retrieveEmployeeInformation()

  let li = document.createElement('li')
  li.innerHTML = employee
  return ul.appendChild(li)
}
  //input.addEventListener('click', function (event) {
    //console.log(e.which)
  //})
//}