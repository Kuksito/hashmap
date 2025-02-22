export class HashMap {
  loadFactor = 0.0625;
  capacity = 16;
  buckets = Array.from({ length: 16 }, () => []);
  bucketsCopy = Array.from({ length: 32 }, () => []);
  count = 0;

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity; //or capacity = 16;??
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
        // throw new Error("bucket is not empty");
        console.log("Error! bucket is not empty");
      }
    }
    console.log(index);
    return console.log(this.buckets);
  }

  get(key) {
    if (!key) return null;
    return key.value;
  }

  has(key) {
    if (key) return true;
    else return false;
  }

  remove(key) {
    if (key) {
      //remove entry w the key n return true
    } else {
      //return false
    }
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

  //implement near the end with some methods?? grow buckets ->
  //double capacity when hashmap reaches loadFactor
  //if (array.length > capacity * loadFactor)
  //{ let newArray = []; newArray.copy(array); newArray.length = array.length*2}
}
