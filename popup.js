class Section {
    constructor(name, day, time_start_hr, time_start_min, time_end_hr, time_end_min, link) {
        this.name = name;
        this.day = day;
        this.time_start_hr = time_start_hr;
        this.time_start_min = time_start_min;
        this.time_end_hr = time_end_hr;
        this.time_end_min = time_end_min;
        this.link = link;
    }
    get_name() {
        return this.name;
    }
    get_day() {
        return this.day;
    }
    get_time_start_hr() {
        return this.time_start_hr;
    }
    get_time_start_min() {
        return this.time_start_min;
    }
    get_time_end_hr() {
        return this.time_end_hr;
    }
    get_time_end_min() {
        return this.time_end_min;
    }
    get_link() {
        return this.link;
    }
}

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
function getCurrentTime() {
    var date = new Date();
    var day_idx = date.getDay();
    var current_hour = date.getHours();
    var current_mins = date.getMinutes();

    //chrome.storage.sync.set({day_idx: day_idx, current_hr: current_hour, current_min: current_mins}, function() { console.log("Day-time saved."); });
    
    let dateTime = document.createElement('p');
    //dateTime.textContent = day_arr[day_idx]+' '+current_hour.toString()+":"+current_mins.toString();
    
    timeDiv.appendChild(dateTime);

    return [day_idx, current_hour, current_mins];
}

function loadSectionsList() {
    var sections = []
    chrome.storage.sync.get('sections', function(data) {
        sects = JSON.parse(data.sections);
        var i;
        for(i=0;i<sects.length;i++) {
            sections.push(sects[i]);
        }
    });
    return sections;
}
function saveSectionsList(sections) {
    var JSONsects = JSON.stringify(sections);
    chrome.storage.sync.set({sections: JSONsects}, function() {console.log("Sections list saved");});
}




var testSect1 = new Section("16.001",1,10,0,11,0,"fake_link");
var testSect2 = new Section("5.111",0, 1,0,3,0,"fake_link");

var sects = [testSect1, testSect2];
saveSectionsList(sects);

function createToDisplayLists() {
    // this list, as of now, returns the list of sections to display



    // actual
    var sections = loadSectionsList();
    console.log(sections);
    var toDisplay = [];
    var timeTup = getCurrentTime();
    var day_idx = timeTup[0];
    var hr = timeTup[1];
    var min = timeTup[2];  
    var i;
    for (i=0; i < 2;i++) {
        sect = sections[i];
        console.log(sect);
        section_idx = sect.day;
        if(section_idx == day_idx) {
            console.log(sect.name);
            start_hr = sect.time_start_hr;
            start_min = sect.time_start_min;
            end_hr = sect.time_end_hr;
            end_hr = sect.time_end_min;
            // broken bc time loops, if events are >1hr
            if(start_hr <= hr && start_min <= min && end_hr > hr && end_min > min) {
                console.log()
                toDisplay.push(sect); 
            }
        }
    }
    console.log(toDisplay);
    return toDisplay;
}

createToDisplayLists();