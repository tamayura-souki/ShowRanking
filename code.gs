function doGet() {
  var htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  htmlOutput
    .setTitle('ShowRanking')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  return htmlOutput;
}
 
function getSpreadsheetValues(sheet_id){
  return SpreadsheetApp.openById(sheet_id).getDataRange().getValues();
}