
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
    var day_arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

    var date = new Date();
    var day_idx = date.getDay();
    var current_hour = date.getHours();
    var current_mins = date.getMinutes();

    chrome.storage.sync.set({day_idx: day_idx, current_hr: current_hour, current_min: current_mins}, function() { console.log("Day-time saved."); });
    
    let dateTime = document.createElement('p');
    dateTime.textContent = day_arr[day_idx]+' '+current_hour.toString()+":"+current_mins.toString();
    
    timeDiv.appendChild(dateTime);
}
getDTime();
