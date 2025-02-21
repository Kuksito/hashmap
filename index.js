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
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity; //or capacity = 16;??
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const obj = { key, value };

    if (buckets[index].length === 0) {
      buckets.splice(index, 1, obj);
      count++;
    } else {
      if (this.buckets.some((obj) => obj.key === key)) {
        obj.value = value;
        this.buckets.splice(index, 1, obj);
      } else {
        throw new Error("bucket is not empty");
      }
    }
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
    return this.count;
    //return number of stored keys (do i let the var?)
  }

  clear() {
    //remove all entries in the hash map (what's entries?? the keys??)
  }

  keys() {
    //return [keys inside hashmap]
  }

  values() {
    //return [values]
  }

  entries() {
    //return [key, value] e.g.: [[firstKey, firstValue], [secondKey, secondValue]]
  }

  //implement near the end with some methods?? grow buckets ->
  //double capacity when hashmap reaches loadFactor
  //if (array.length > capacity * loadFactor)
  //{ let newArray = []; newArray.copy(array); newArray.length = array.length*2}
}
