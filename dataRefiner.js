const db = require("./osrsmonstersdb.json");
const fs = require("fs");

// console.log(Object.keys(db).length)

const keys = Object.keys(db);

const newDb = {};

keys.map(key => {
  const curMonster = db[key];
  const newKey = `${curMonster.name} (lvl: ${curMonster.combat_level})`;
  const name = curMonster.name;

  const drops = Object.keys(curMonster.drops).map(itemKey => {
    return curMonster.drops[itemKey];
  });

  newDb[newKey] = {
    name,
    drops,
    key: newKey
  };
});

const stringifiedDb = JSON.stringify(newDb);
console.log(stringifiedDb);
setTimeout(() => {
  fs.writeFile("refinedmonstersdb.json", stringifiedDb, "utf8", err => {
    if (err) {
      console.log(err);
    }
    console.log("finished");
  });
}, 2000);

// console.log(newDb["Corrupted Bat (lvl: 48)"])
