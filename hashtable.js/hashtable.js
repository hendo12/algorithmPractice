function hashStringToInt(s, tableSize) {
  let hash = 17;

  for(let i = 0; i < s.length; i++) {
    hash = (hash * s.charCodeAt(i)) % tableSize;
  }

  return hash;
}

class HashTable {

  table = new Array(100);

  setItem = (key, value) => {
    const idx = hashStringToInt(key, this.table.length);
    table[idx] = value;
  }

  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);
    return this.table[idx];
  }
}

const myTable = new HashTable();
myTable.setItem('firstName', 'henry');
myTable.getItem('firstName');

console.log(myTable);