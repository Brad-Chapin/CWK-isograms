function isIsogram(str){
  str = str.toLowerCase();
  let checked = [];
  for (let i = 0; i <str.length; i++) {
    if (checked.indexOf(str[i]) == -1){
      checked.push(str[i]);
    } else {
      return false;
    }
  }
  return true;
}
