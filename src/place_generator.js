import { randomElement, rollDice } from './region_generator';

const place = [
  "Barrier", "Beach", "Bowl", "Camp", "Cave", "Circle", "City", "Cliff",
  "Crater", "Crossing", "Crypt", "Den", "Ditch", "Falls", "Fence", "Field",
  "Fort", "Gate", "Grove", "Hill", "Hole", "Hut", "Keep", "Lake", "Marsh",
  "Meadow", "Mountain", "Pit", "Post", "Ridge", "Ring", "Rise", "Road", "Rock",
  "Ruin", "Shrine", "Spire", "Spring", "Stone", "Tangle", "Temple", "Throne",
  "Tomb", "Tower", "Town", "Tree", "Vale", "Valley", "Village", "Wall"
]

const adjective = [
  "Ancient", "Ashen", "Black", "Bloody", "Blue", "Bright", "Broken", "Burning",
  "Clouded", "Copper", "Cracked", "Dark", "Dead", "Doomed", "Endless",
  "Fallen", "Far", "Fearsome", "Floating", "Forbidden", "Frozen", "Ghostly",
  "Gloomy", "Golden", "Grim", "Hidden", "High", "Iron", "Jagged", "Lonely",
  "Lost", "Low", "Near", "Petrified", "Red", "Screaming", "Sharp", "Shattered",
  "Shifting", "Shining", "Shivering", "Shrouded", "Silver", "Stalwart",
  "Stoney", "Sunken", "Thorny", "Thundering", "White", "Withered",
]

const noun = [
  "Arm", "Ash", "Blood", "Child", "Cinder", "Corpse", "Crystal", "Dagger",
  "Death", "Demon", "Devil", "Doom", "Eye", "Fear", "Finger", "Fire", "Foot",
  "Ghost", "Giant", "Goblin", "God", "Gold", "Hand", "Head", "Heart", "Hero",
  "Hope", "King", "Knave", "Knight", "Muck", "Mud", "Priest", "Queen",
  "Maiden", "Sailor", "Silver", "Skull", "Smoke", "Souls", "Spear", "Spirit",
  "Stone", "Sword", "Thief", "Troll", "Warrior", "Water", "Witch", "Wizard",
]


export const randomPlace = () => {
  const nameTemplate = rollDice(12);

  switch (nameTemplate) {
    case 1:
    case 2:
      return `The ${randomElement(place)}`
    case 3:
    case 4:
      return `The ${randomElement(adjective)} ${randomElement(place)}`
    case 5:
    case 6:
      return `The ${randomElement(place)} of (the) ${randomElement(noun)}`
    case 7:
    case 8:
      return `The ${randomElement(noun)}'s ${randomElement(place)}`
    case 9:
    case 10:
      return `${randomElement(place)} of the ${randomElement(adjective)} ${randomElement(noun)}`
    case 11:
    case 12:
      return `The ${randomElement(adjective)} ${randomElement(noun)}`
    default:
      return ""
  }
}