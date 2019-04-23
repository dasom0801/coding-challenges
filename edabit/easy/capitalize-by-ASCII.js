function asciiCapitalize(str) {
  return str.split(" ")
    .map(s=> s.split("")
    .map(s => !(s.charCodeAt() % 2) ? s.toUpperCase() : s.toLowerCase()).join(""))
    .join(" ");
}