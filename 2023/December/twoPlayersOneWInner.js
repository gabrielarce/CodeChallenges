// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious.Death is defined as having health <= 0.

// Each fighter will be a Fighter object / instance.See the Fighter class below in your chosen language.

// Both health and damagePerAttack(damage_per_attack
//     for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your
// function also receives a third argument, a string, with the name of the fighter that attacks first.

// Example:
//     declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

// Lew attacks Harry;
// Harry now has 3 health.
// Harry attacks Lew;
// Lew now has 6 health.
// Lew attacks Harry;
// Harry now has 1 health.
// Harry attacks Lew;
// Lew now has 2 health.
// Lew attacks Harry: Harry now has - 1 health and is dead.Lew wins.
// function Fighter(name, health, damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//     this.toString = function() { return this.name; }
// }

function declareWinner(fighter1, fighter2, firstAttacker) {
  // Determine the order of attack
  let fighters = [fighter1, fighter2];
  let attackerIndex = fighter1.name === firstAttacker ? 0 : 1;
  let defenderIndex = 1 - attackerIndex;

  // Simulate the fight
  while (fighter1.health > 0 && fighter2.health > 0) {
    // Attacker attacks defender
    fighters[defenderIndex].health -= fighters[attackerIndex].damagePerAttack;

    // Swap attacker and defender
    [attackerIndex, defenderIndex] = [defenderIndex, attackerIndex];
  }

  // Determine the winner
  const winner = fighter1.health > 0 ? fighter1 : fighter2;
  return winner.name;
}
