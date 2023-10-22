/// Add this to the `.sort(sortAlphabetical)`
function sortAlphabetical(a: string, b: string) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

export default sortAlphabetical