'use strict';
const assert = require('assert');

// This is an object that has types of jobs and the values each provide.
const jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code will go here
// DONE  Build a class for CrewMember.
// DONE Make sure CrewMembers can enter Ships.
class CrewMember {
  constructor(name, job, specialSkill, ship){
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = ship;
  }

  enterShip = (vessel) => {
    // No way to get a ship yet because Ship class is incomplete
    // We're really adding crew members and assigning them to a ship here
    // Push crew member into the crew array on the ship
    this.ship = vessel;
    vessel.crew.push(this)
    

  }

}
// DONE Build a class for Ship.
  // Should have name, type, ability and empty crew (don't have to pass)
// DONE Make sure to return a mission statement.
class Ship {
  constructor (name, type, ability){
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
  }

  missionStatement = () => {
    // Mission statement = ability
    
    // Can't perform mission unless there's a crew
    if (this.crew.length === 0) {
      return "Can't perform a mission yet."
    }
    else {
      return this.ability;
    }

  }
}


// Begin by reading the tests and building a function that will full each one.
// As you build, you might not have to build them in order, maybe you do...
// These are the tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      // this creates a CrewMember and passes the following arguments into its constructor:
      // 'Rick Martinez', 'pilot', 'chemistry'
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      // this creates a new Ship. Can you build a class that can be called so that this Ship can be built?
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      const crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');

      // at this point, I haven 2 ships and 2 crew members, but I haven't added any crew to this ships. Can't perform mission unless ship has crew members.
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
