class Unit {
 constructor(name) {
 this.name = name
 this.hp = 100
 this.atk = 10
 this.job = 'Squire'
 this.alive = true
 this.mag = 5
 }
 attack(target){
   if(!target.alive) return ${target.name} has already fallen!
 target.hp -= this.atk
 if (target.hp <=0) {
   target.alive = false
   return ${target.name} has fallen!
 }
 return ${this.name} attacked ${target.name}
 }
}
class Squire extends Unit{ //inheritence
 constructor(name){
 super(name)
 }
}
class Knight extends Unit {
 constructor(name){
 super(name) //constructer of parent class / Unit.constructer
 this.job = “Knight” //modifications to original class, when class is referenced
 this.atk += 10
 }
}
class Mage extends Unit {
 constructor(name) {
   super(name)
   this.hp -= 25
   this.mag += 25
   this.job = “Mage”
 }
 castSpell(target){
   if(!target.alive) return ${target.name} has fallen!
 target.hp -= this.mag
 if (target.hp <=0) {
   target.alive = false
   return ${target.name} has fallen!
 }
 return ${this.name} casted Fire on ${target.name}
 }
}
let knight = new Knight(‘Nadira’)
let squire = new Squire(‘Smith’)
let mage = new Mage (‘Muhammad’)
// class Unit{
//   constructor(name){
//     this.name=name
//     this.hp = 100
//     this.atk = 10
//     this.job = 'Squire'
//     this.alive = true
//     this.mag = 5
//     console.log(name)
//   }
//   class Squire extends Unit {
//     constructor(name){
//       super(name)
//     }
//   }
//
//
// let squire = new Squire
