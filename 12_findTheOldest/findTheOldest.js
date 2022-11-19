const findTheOldest = function(_people) {
    sorted = _people.sort((a, b) => {
      let ageOfA;
      let ageOfB;
      if (!a.yearOfDeath) {
        ageOfA = new Date().getFullYear() - a.yearOfBirth;
      }
      else ageOfA = a.yearOfDeath - a.yearOfBirth;
  
      if (!b.yearOfDeath) {
        ageOfB = new Date().getFullYear() - b.yearOfBirth;
      }
      else ageOfB = b.yearOfDeath - b.yearOfBirth;
      return ageOfA>ageOfB ? -1 : 1
    })  
      return sorted[0];
  };

// Do not edit below this line
module.exports = findTheOldest;
