function emailParse(s) {
  let emailElements = s.toLowerCase().split("@");
  return `User name is ${emailElements[0]} and domain is ${emailElements[1]}`
}
