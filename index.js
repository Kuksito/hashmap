export class HashMap {
  loadFactor = 0.75;
  capacity = 16;
  buckets = Array.from({ length: this.capacity }, () => []);
  count = 0;

  loadLevel() {
    const level = this.count / this.capacity;
    return level;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const obj = { key, value };

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    if (this.buckets[index].length === 0) {
      this.buckets.splice(index, 1, obj);
      this.count++;
    } else {
      if (this.buckets.some((obj) => obj.key === key)) {
        obj.value = value;
        this.buckets.splice(index, 1, obj);
      } else {
        console.log("Error! bucket is not empty");
      }
    }

    if (this.loadLevel > this.loadFactor) {
      this.grow;
    } else {
      console.log(false);
    }

    console.log(this.buckets);
  }

  get(key) {
    const obj = this.buckets.find((bucket) => bucket.key === key);
    if (obj == undefined) return console.log(null);
    else console.log(obj.value);
  }

  has(key) {
    const obj = this.buckets.find((bucket) => bucket.key === key);
    if (obj == undefined) return console.log(false);
    else console.log(true);
  }

  remove(key) {
    const obj = this.buckets.find((bucket) => bucket.key === key);
    const index = this.buckets.indexOf(obj);
    if (index === -1) {
      console.log(false);
    } else {
      this.buckets[index] = [];
      this.count--;
      console.log(true);
    }
    console.log(this.buckets);
  }

  length() {
    return console.log(`the length is: ${this.count}`);
  }

  clear() {
    this.buckets = Array.from({ length: 16 }, () => []);
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.buckets.length; i++) {
      keys[i] = this.buckets[i]["key"];
    }
    let filtered = keys.reduce((item, el) => {
      if (el !== undefined) {
        item.push(el);
      }
      return item;
    }, []);
    console.log(filtered);
  }

  values() {
    const values = [];
    this.buckets.forEach((bucket) => {
      if (bucket.value !== undefined) {
        values.push(bucket.value);
      }
    });
    console.log(values);
  }

  entries() {
    const entries = this.buckets.map((bucket) => {
      if (bucket.length != 0) return [bucket.key, bucket.value];
    });
    const filtered = entries.filter((arr) => arr);

    console.log(filtered);
  }

  grow() {
    let bucketsCopy = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity);
    this.count = 0;

    for (let bucket of bucketsCopy) {
      if (bucket) {
        for (let [key, value] of bucket) {
          this.set(key, value);
        }
      }
    }
  }
}
