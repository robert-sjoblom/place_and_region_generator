const terrain = [
  "Bay", "Bluffs", "Bog", "Cliffs", "Desert", "Downs", "Dunes", "Expanse", "Fells",
  "Fen", "Flats", "Foothills", "Forest", "Groves", "Heath", "Heights", "Hills",
  "Hollows", "Jungle", "Lake", "Lowland", "March", "Marsh", "Meadows", "Moor",
  "Morass", "Mounds", "Mountains", "Peaks", "Plains", "Prairie",
  "Quagmire", "Range", "Reach", "Sands", "Savanna", "Scarps", "Sea",
  "Slough", "Sound", "Steppe", "Swamp", "Sweep", "Teeth", "Thicket",
  "Upland", "Wall", "Waste", "Wasteland",
]

const adjective = [
  "Ageless", "Ashen", "Black", "Blessed", "Blighted", "Blue", "Broken",
  "Burning", "Cold", "Cursed", "Dark", "Dead", "Deadly", "Deep",
  "Desolate", "Diamond", "Dim", "Dismal", "Dun", "Eerie", "Endless",
  "Fallen", "Far", "Fell", "Flaming", "Forgotten", "Forsaken",
  "Frozen", "Glittering", "Golden", "Green", "Grim", "Holy", "Impassable",
  "Jagged", "Light", "Long", "Misty", "Perilous", "Purple", "Red",
  "Savage", "Shadowy", "Shattered", "Shifting", "Shining", "Silver",
  "White", "Wicked", "Yellow"
]

const noun = [
  "Ash", "Bone", "Darkness", "Dead", "Death", "Desolation", "Despair",
  "Devil", "Doom", "Dragon", "Fate", "Fear", "Fire", "Fury", "Ghost",
  "Giant", "God", "Gold", "Heaven", "Hell", "Honor", "Hope", "Horror",
  "King", "Life", "Light", "Lord", "Mist", "Peril", "Queen", "Rain",
  "Refuge", "Regret", "Savior", "Shadow", "Silver", "Skull", "Sky",
  "Smoke", "Snake", "Sorrow", "Storm", "Sun", "Thorn", "Thunder",
  "Traitor", "Troll", "Victory", "Witch"
]

export function rollDice(sides) {
  return 1 + Math.floor(Math.random() * sides)
}

export const randomElement = array => array[Math.floor(Math.random() * array.length)];

export const randomRegion = () => {
  const nameTemplate = rollDice(12);

  switch (nameTemplate) {
    case 1:
    case 2:
    case 3:
    case 4:
      return `${randomElement(adjective)} ${randomElement(terrain)}`
    case 5:
    case 6:
      return `${randomElement(terrain)} of (the) ${randomElement(noun)}`
    case 7:
    case 8:
      return `The ${randomElement(terrain)} ${randomElement(adjective)}`
    case 9:
    case 10:
      return `${randomElement(noun)} ${randomElement(terrain)}`
    case 11:
      return `${randomElement(noun)}'s ${randomElement(terrain)} of (the) ${randomElement(noun)}`
    case 12:
      return `${randomElement(adjective)} ${randomElement(terrain)} of (the) ${randomElement(noun)}`
    default:
      return ""
  }
}