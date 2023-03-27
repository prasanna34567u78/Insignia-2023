// this is a .gs File.
// For your reference converted to JS file

function setUniqueId(e) {

  //Access spreadsheet By Selecting the ID
  const ss = SpreadsheetApp.openById('1Sldi4HqCYqYIpSJvWmaPHH0y8MgCOxZojN5WBRoLDFA')
  //We select the sheet containing responses from the form
  const sheet = ss.getSheetByName('Form Responses 1')

  // Get the response ID
  const responseId = e.response.getId()
  // Logic for creating a randim unique id
  const randomUnique = `demo-${Math.random().toString(36).slice(2)}-${Date.now()}`

  // we are saving the autoincremented id in the third column
  const row = sheet.getLastRow()

  // get previous row if row=0 then prev row=0 else prev row = row-1
  const previousRow = row === 0 ? 0 : row - 1

  // Retrieve Last row ID
  const lastAutoincrementId = sheet.getRange(previousRow, 3).getValue() || 0

  // increment current row's id by one and set it
  sheet.getRange(row, 2).setValue(lastAutoincrementId + 1)

  // set response id in fourth column
  sheet.getRange(row, 4).setValue(responseId)

  // set radom unique id in fifth column
  sheet.getRange(row, 5).setValue(randomUnique)
}