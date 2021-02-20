/**
 * This functions are adaptep from the website https://coderszine.com/convert-csv-to-json-using-javascript/
 * The original funcitons are in JavaScript and I translate to TypeScript.
 */

/**
 * Fuction to get a JSON from a CSV data.
 * @param csvData the csv datasource.
 * @returns return the JSON object of the csv data.
 */
export function csvToJson(csvData: string): string[] {
  let data = csvToArray(csvData);
  let objData = [];
  for (let i = 1; i < data.length; i++) {
    objData[i - 1] = {};
    for (let k = 0; k < data[0].length && k < data[i].length; k++) {
      let key = data[0][k];
      objData[i - 1][key] = data[i][k];
    }
  }
  return objData;
}

/**
 * This funciton convert the csv into a array of arrays.
 * @param csvData the csv data
 * @param delimiter the delimiter of the csv. This param is optional and the default value is `,`.
 * @returns the csv data content in arrays.
 */
function csvToArray(csvData: string, delimiter?: string): string[][] {
  delimiter = delimiter || ',';
  let pattern = new RegExp(
    '(\\' + delimiter + '|\\r?\\n|\\r|^)' + '(?:"([^"]*(?:""[^"]*)*)"|' + '([^"\\' + delimiter + '\\r\\n]*))',
    'gi'
  );
  let data: string[][] = [[]];
  let matches = null;
  while ((matches = pattern.exec(csvData))) {
    let matchedDelimiter = matches[1];
    if (matchedDelimiter.length && matchedDelimiter != delimiter) {
      data.push([]);
    }
    if (matches[2]) {
      matchedDelimiter = matches[2].replace(new RegExp('""', 'g'), '"');
    } else {
      matchedDelimiter = matches[3];
    }
    data[data.length - 1].push(matchedDelimiter);
  }
  return data;
}
