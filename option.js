
const cellNamePlaceholder = document.querySelector("#active-cell");
const fontSizeInput = document.querySelector("#fontsize");
const fontFamilyInput = document.querySelector("#fontFamily");
const form = document.querySelector("#form");

let activeElement = null;

const state = {};

const defaultProperties = {
    fontfamily: 'sans-serif',
    fontSize: 16,
    color: "#000000",
    textalign: "left",
    backgroundColor: "#ffffff",
    isBold: false,
    isItalic: false,
    isUnderlined: false
}


function onCellFocus(event) {
    const elementId = event.target.id;
    cellNamePlaceholder.innerText = elementId;
    activeElement = event.target;
    if (state[elementId]) {
        resetOptions(state[elementId]);
    } else {
        resetOptions(defaultProperties);
    }
}

function resetOptions(optionState) {
    form.fontFamily.value = optionState.fontFamily;
    form.fontSize.value = optionState.fontSize;
    form.textalign.value = optionState.textalign;
    form.bold.checked = optionState.isBold;
    form.italic.checked = optionState.isItalic;
    form.underlined.checked = optionState.isUnderlined;
    form.textcolor.value = optionState.color;
    form.bgcolor.value = optionState.backgroundColor;
}

function onFormChange() {
    if (!activeElement) {
        alert("Please select a cell to make changes");
        form.reset();
        return;
    }

    let currentState = {
        textColor: form.textcolor.value,
        backgroundColor: form.bgcolor.value,
        fontSize: form.fontSize.value,
        fontFamily: form.fontFamily.value,
        isBold: form.bold.checked,
        isItalic: form.italic.checked,
        isUnderlined: form.underlined.checked,
        textalign: form.textalign.value

    }
    applyStylesToCell(currentState);

    //update the state object for the current cell.
    state[activeElement.id] = currentState;

}

function applyStylesToCell(styleObject) {
    console.log(styleObject);
    // it will take the style object and applies it to the currently selected cell.
    activeElement.style.fontSize = `${styleObject.fontSize}`;
    activeElement.style.fontFamily = styleObject.fontFamily;
    activeElement.style.color = styleObject.color;
    activeElement.style.backgroundColor = styleObject.backgroundColor;
    activeElement.style.textAlign = styleObject.textalign;
    if(styleObject.isItalic){
        activeElement.style.fontStyle = "italic";    
    }
    if(styleObject.isBold){
        activeElement.style.fontWeight = "bold";
    }
    if(styleObject.isUnderlined){
        activeElement.style.textDecoration = "underline";
    }

    
}
