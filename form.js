// let form = document.getElementById('Class').onsubmit

var sections = []

function submitForm() {
    var monday = document.getElementById("ClassMonday").value;

    var className = document.getElementById("ClassName").value;
    var classTime = document.getElementById("ClassTime").value;
    var classEndTime = document.getElementById("ClassEndTime").value;
    var classLink = document.getElementById("ClassLink").value;
    
    // console.log("hello!");
    // console.log(monday);
}

// function test() {
//     console.log("hello world!");
// }
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#submit').addEventListener('click', function (event) {
        submitForm();
    });
  });

// console.log("hello world")