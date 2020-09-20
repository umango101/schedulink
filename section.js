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

    get name() {
        return this.name;
    }

    get day() {
        return this.day;
    }

    get time_start_hr() {
        return this.time_start_hr;
    }
    get time_start_min() {
        return this.time_start_min;
    }

    get time_end_hr() {
        return this.time_end_hr;
    }

    get time_end_min() {
        return this.time_end_min;
    }

    get link() {
        return this.link;
    }

    set name(name) {
        this.name = name;
    }

    set day(day) {
        this.day = day;
    }

    set time_start_hr(time_start) {
        this.time_start_hr = time_start;
    }
    set time_start_min(time_start) {
        this.time_start_min = time_start;
    }

    set time_end_hr(time_end) {
        this.time_end_hr = time_end;
    }
    set time_end_min(time_end) {
        this.time_end_min = time_end;
    }

    set link(link) {
        this.link = link;
    }
}

// saving objects
var testSect1 = new Section("16.001",1,10,0,11,0,"fake_link");
var testSect2 = new Section("5.111",0, 01,0,3,0,"fake_link");

var sects = [testSect1, testSect2];


function saveSectionsList(sections) {
    var JSONsects = JSON.stringify(sections);
    chrome.storage.sync.set({sections: JSONsects}, function() {console.log("Sections list saved");});
}

function loadSectionsList() {
    sections = []
    chrome.storage.sync.get('sections', function(data) {
        sections = JSON.parse(data.sections);
    });
    return sections;
}