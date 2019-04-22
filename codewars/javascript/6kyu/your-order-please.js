function order(words){
  return words.split(" ").sort((a,b) => a.replace(/[A-Z]/ig,"") - b.replace(/[A-Z]/ig,"")).join(" ");
}