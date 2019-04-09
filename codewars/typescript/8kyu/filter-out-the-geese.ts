export function gooseFilter (birds: string[]): string[] {
    const geese: [string] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // return an array containing all of the strings in the input array except those that match strings in geese
    return birds.filter((bird: string) => geese.indexOf(bird) === -1)    
  }