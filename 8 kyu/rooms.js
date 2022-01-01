// Grasshopper - Create the rooms

// Escape the room
// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

var rooms = {
    room1: {name: "React", description: "Library", completed: false},
    room2: {name: "Redux", description: "State Container", completed: false},
    room3: {name: "Node", description: "Run-time environment", completed: false}
}

class Room  {
    constructor() {
      this.name = '';
      this.description = '';
      this.completed= '';
    }
  }
  var rooms = {
    bedroom : new Room(),
    kitchen : new Room(),
    bathroom : new Room(),
}

var rooms = {}
for (var i = 0; i < 3; i++) {
    rooms[`room${i}`] = {'a': 1, 'b': 2, 'c': 3}
}