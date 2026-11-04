function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Enquiries');
  const d = e.parameter;
  sheet.appendRow([new Date(), d.name, d.phone, d.email, d.projectType, d.message]);
  return ContentService.createTextOutput('ok');
}

function doGet() {
  return ContentService.createTextOutput('Anantvijayam enquiry endpoint is live.');
}
