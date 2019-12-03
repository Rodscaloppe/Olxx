class GeradorScriptElementFactory {

    constructor(props) {
        this.elementosInput = window.document.querySelectorAll("input");
        this.elementosButton = window.document.querySelectorAll("button");
        this.elementosSelect = window.document.querySelectorAll("select");

        this.elementos = [];
        this.templateFunc = "public get #function()  { return browser.element('#ref') }";

    }

    init(propName) {
        this.getElementsByInput(propName);
    }

    getElementsByButton(propName) { 
        return this.getElements(propName, "Button");
    }

    getElementsBySelect(propName) {
        return this.getElements(propName, "Select");
    }

    getElementsByInput(propName) {
        return this.getElements(propName, "Input");
    }

    getElements(propName, sufix) {

        this.elementosInput.forEach(item => {

            var attributeValue = item.getAttribute(propName); // cb(item);
            var functionName = attributeValue + sufix;

            functionName = functionName
                .replace(/\#/g, "")
                .replace(/\ /g, "_")
                .replace(/\./g, "_")
                .replace(/\-/g, "_");

            var ref = null;

            if (propName == "id") {
                ref = "#" + attributeValue;
            } else {
                ref = '[' + propName + '="' + attributeValue + '"]'; // [data-test-id="jao"]
            }

            this.elementos.push(
                this.templateFunc
                    .replace("#ref", ref)
                    .replace("#function", functionName)
            );

        });
    }

    getRawScript(separator = "\n") {
        return this.elementos.join(separator);
    }

    clear() {
        this.elementos = [];
    }
}


var gerador = new GeradorScriptElementFactory();

gerador.init("id");

gerador.getRawScript();

// gerador.clear();
// gerador.init("button");
// gerador.getRawScript();
