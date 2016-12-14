function myFunction() {
  const spreadsheet = SpreadsheetApp.openById("XXXXXXXXXXXXX"),
        sheets = spreadsheet.getSheets();
  
  sheets.forEach(sheet => {
    Logger.log(sheet);
  })
}
