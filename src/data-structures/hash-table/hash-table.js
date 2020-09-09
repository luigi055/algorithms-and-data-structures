export default class HashTable {
  constructor(size=53) {
    this.keyMap = new Array (size);
  }

  _hash(key) {
    let total = 0;
    let WIERD_PRIMER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WIERD_PRIMER + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    if (key === "") return;
    
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }

    const hasKey = this.keyMap[index].some((pair) => pair[0] === key);

    if (hasKey) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          this.keyMap[index][i][1] = value;
        }
      }
    }


    this.keyMap[index].push([key,value])
  }

  get(key) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      return undefined
    }
    
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1];
      }
    }
  }

  values() {
    let values = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          values.push(this.keyMap[i][j][1])
        }
      }
    }

    return values
  }
}