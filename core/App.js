const fs = require("fs");
const path = require("path");

const guid = require("../util/guid");
const WindowManager = require("./WindowManager");

class App {
    constructor(name) {
        if (!name) throw new Error("Missing App Name");

        this.name = name;
        this.icon = path.join(__dirname, "..", "apps", name, "icon.png");
        this.content = fs.readFileSync(path.join(__dirname, "..", "apps", name, "index.html"), "utf8");
        this.id = guid();

        console.log(this.name);
    }

    onClick() {
        WindowManager.createWindow({
            title: this.name,
            size: [1280, 720],
            content: this.content
        }).openIn(".desktop");
    }
}

module.exports = App;
