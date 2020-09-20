class Section {
    constructor(name, day, time_start, time_end, link) {
        this.name = name;
        this.day = day;
        this.time_start = time_start;
        this.time_end = time_end;
        this.link = link;
    }

    get name() {
        return this.name;
    }

    get day() {
        return this.day;
    }

    get time_start() {
        return this.time_start;
    }

    get time_end() {
        return this.time_end;
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

    set time_start(time_start) {
        this.time_start = time_start;
    }

    set time_end(time_end) {
        this.time_end = time_end;
    }

    set link(link) {
        this.link = link;
    }
}

// saving objects
var testSect1 = new Section("16.001",1,10,0,11,0,"fake_link");
var testSect2 = new Section("5.111",2, 10,30,12,0,"fake_link");

var sects = [testSect1, testSect2];
var testWeek = [[],[testSect1],[testSect2],[],[],[],[]];


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