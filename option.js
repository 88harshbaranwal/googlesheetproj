const cellNAmePlaceholder = document.querySelector("#active-cell");
const fontSizeInput = document.querySelector("#fontsize");
const state = {};
let activeCellElement = null;
const defaultProperties = {
    fontfamily:'sans',
    fontSize:16,
    color:"#000",
    backgroundColor: "#fff",
    isBold: false,
    isItalic: false,
    inUnderlined: false
}
function onCellFocus(event){
    const elementId = event.target.id;
    cellNAmePlaceholder.innerText = event.target.id; 
    activeCellElement = event.target;
    if(state[elementId]){
        resetOption(state[elementId]);
    }else{

    }
}
function resetOption(optionState){
    fontSizeInput.value = optionState.fontsize;   
}
function onChangeFontSize(){

}