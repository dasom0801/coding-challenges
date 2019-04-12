function alphabetPosition(text) {
  return text.toUpperCase().replace(/[^A-Z]/g,'').split('').map(str => str.charCodeAt() - 64).join(" ");
}