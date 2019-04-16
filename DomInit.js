const genDom = new GeneratorDom();
document.getElementById("options").appendChild(genDom.init());
document.getElementById("clearButton").addEventListener("click", function() {
    genDom.clear();
});
document.getElementById("leftButton").addEventListener("click", function() {
    genDom.alignLeft(true);
});
document.getElementById("rightButton").addEventListener("click", function() {
    genDom.alignLeft(false);
});
document.getElementById("defaultButton").addEventListener("click", function() {
    genDom.clear();
    genDom.alignLeft(true);
    genDom.generator.addElement(findElement("<font color=\"red\">Red foreground</font>"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Mode"), genDom.leftAlign);
    genDom.generator.addElement(findElement("<font color=\"black\">Reset foreground</font>"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Space character"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Left chevron character"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Left chevron character"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Space character"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Short filename"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Space character"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Right chevron character"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Right chevron character"), genDom.leftAlign);
    genDom.update();
    genDom.alignLeft(false);
    genDom.generator.addElement(findElement("Modified flag"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Help flag"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Read-only flag"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Space character"), genDom.leftAlign);
    genDom.generator.addElement(findElement("<font color=\"blue\">Blue foreground</font>"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Git branch"), genDom.leftAlign);
    genDom.generator.addElement(findElement("<font color=\"black\">Reset foreground</font>"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Space character"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Long filename"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Colon character"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Colon character"), genDom.leftAlign);
    genDom.generator.addElement(findElement("<font color=\"green\">Green foreground</font>"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Current line number"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Slash character"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Total line number"), genDom.leftAlign);
    genDom.generator.addElement(findElement("<font color=\"black\">Reset foreground</font>"), genDom.leftAlign);
    genDom.generator.addElement(findElement("Pipe character"), genDom.leftAlign);
    genDom.generator.addElement(findElement("File type"), genDom.leftAlign);
    genDom.update();
});

function findElement(title) {
    return options.find(elem => {
        return elem.title === title;
    });
};
