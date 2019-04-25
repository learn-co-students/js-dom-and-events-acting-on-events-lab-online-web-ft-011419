function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    });
};

preventRefreshOnSubmit();

let input = document.querySelector('input');
let employeeList = document.querySelector('.employee-list');

function retrieveEmployeeInformation() {
  return input.value;
};

function addNewElementAsLi() {
  let employee = retrieveEmployeeInformation();

  employeeList.insertAdjacentHTML('beforeend', `${employee}`);
};

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener('click', function(){
    addNewElementAsLi();
    input.value = "";
  });
};

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(){
    employeeList.innerHTML = "";
  });
};
