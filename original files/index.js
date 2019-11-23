// data sourced from https://www.osrsbox.com/projects/osrsbox-db/

const db = require("./refinedmonstersdb.json");

const monsters = Object.keys(db).map(monster => db[monster]);

const input = "sire";

const includesBa = monsters.filter(monster =>
  monster.name.toLowerCase().includes(input.toLowerCase())
);

console.log(includesBa);

console.log(db["Abyssal Sire (lvl: 350)"]);
