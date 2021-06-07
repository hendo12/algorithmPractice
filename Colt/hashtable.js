class HashTable {
    constructor(size=17) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;

        for(let i = 0;  i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);

        if(this.keyMap[index]) {
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        let result = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i].length === 1) {
                result.push(this.keyMap[i][0]);
            } else if(this.keyMap[i].length > 1){
                for(let ii = 0; ii < this.keyMap[i].length; ii++) {
                    result.push(this.keyMap[i][ii][0]);
                }
            }
        }

        return result;
    }

    values() {
        let result = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    if(!result.includes(this.keyMap[i][j][1])) {
                        result.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }

        return result;
    }
}