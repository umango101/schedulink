
// gets #changeColor button
let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
})

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.backgroundColor = "'+color+'";'});
        
    });
};

let timeDiv = document.getElementById('timeDiv');
function getDTime() {
    var date = new Date();
    var day_wk = date.getDay();
    var current_hour = date.getHours();
    var current_mins = date.getMinutes();

    let dateTime = document.createElement('p');
    dateTime.textContent = day_wk.toString()+' '+current_hour.toString()+":"+current_mins.toString();

    timeDiv.appendChild(dateTime);
}
getDTime();
