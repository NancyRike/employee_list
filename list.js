function createNode(element) {
  return document.createElement(element);
}

function append(parent, el){
  return parent.appendChild(el);
}
var ul = document.getElementById('staff_list');
var url = 'http://dummy.restapiexample.com/api/v1/employees';
fetch(url)
  .then((response) => response.json())
  .then(function (data){
    console.log(data);
    let stafflist = data.data;
    return stafflist.map(function(slist) {
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = slist.profile_image;
      span.innerHTML = `Name: ${slist.employee_name} Age: ${slist.employee_age} Salary: ${slist.employee_salary}`;
      append(li , img);
      append(li, span);
      append(ul, li);

    })
    var save_local = {Name, salary, Age}
    localStorage.setItem('the_value',JSON.stringify(save_local));
    var save_local = JSON.parse(localStorage.getItem("the_value"));

  })
  .catch(function (error) {
    console.log(error);

  })
var postform = document.getElementById('postform');
postform.addEventListener('submit', function(e){
  e.preventDefault();
  var formData =  new FormData(this);

  fetch('http://dummy.restapiexample.com/api/v1/create',{
    Method : 'post',
    body : 'formData',
  })
  .then(function (response) {
    return response.text
  })
  .then(function (text) {
    console.log(text);

  })
  .catch(function (error) {

  });
});
// }
// var user = {
//   'name' : " ",
//   'salary': " ",
//   'age': " ",
// };
// var request = new Request (url, {
//   Method: 'POST',
//   body: JSON.stringify(user),
//   headers : ({
//     'Content-Type': 'application/json'
//     })
// })
//
// fetch (request)
//     .then(response => response.json())
//     .then(response => console.log(response));
