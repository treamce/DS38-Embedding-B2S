//console.log('Hello Back to School');
// create some constanyts which will be used layter on to find out abolut the structure of the workb ook
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

//create a function which will log information about the workbook

function logWorkbookInformation() {
    workbook = viz.workbook;
    console.log(`The workbook name is : "${workbook.name}"`)

    //find array of dashboards within workbook 


    let sheets = workbook.publishedSheetsInfo;
    sheets.forEach((element) => {
        index = element.index;
        console.log(`The sheet with index [${index}] is "${element.name}"`);
    }) ;

    //find active sheet 
    vizActiveSheet = workbook.activeSheet;
    console.log(`the active sheet is "${vizActiveSheet.name}`)
}

viz.addEventListener("firstinteractive", logWorkbookInformation);
