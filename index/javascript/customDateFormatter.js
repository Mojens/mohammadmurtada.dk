export function localDateTimeToDate(date) {
    let dateWOT = date.split('T');
    let dateWOTSplitted = dateWOT[0].split('-');
    return dateWOTSplitted[2] + '-' + dateWOTSplitted[1] + '-' + dateWOTSplitted[0];
}