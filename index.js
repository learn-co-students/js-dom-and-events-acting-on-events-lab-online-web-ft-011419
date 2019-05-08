function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input');
let employeeList = document.querySelector('.employee-list');

function retrieveEmployeeInformation() {
  return input.value;
};

function addNewElementAsLi() {
  let employee = retrieveEmployeeInformation();
  employeeList.insertAdjacentHTML('beforeend', `<li>${employee}</li>`);
};

function addNewLiOnClick() {
  document.querySelector('form').addEventListener('click', function(event){
    addNewElementAsLi();
    input.value = "";
  });
};

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(event){
    employeeList.innerHTML = "";
  });
};
