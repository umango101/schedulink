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
        return this.name = name;
    }

    set day(day) {
        return this.day = day;
    }

    set time_start(time_start) {
        return this.time_start = time_start;
    }

    set time_end(time_end) {
        return this.time_end = time_end;
    }

    set link(link) {
        return this.link = link;
    }
}