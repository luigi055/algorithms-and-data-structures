import HashTable from './hash-table'

describe("testing Hash Table", () => {

  let hashTable;
  beforeEach(() => {
    hashTable = new HashTable()
  })

  it ("should return undefined when try to get a value that doesn't exist" , () => {
  
   expect(hashTable.get("")).toBe(undefined)

  })
  
  it ("should return undefined when set and empty string key" , () => {
    hashTable.set("", "nice");
  
   expect(hashTable.get("")).toBe(undefined)

  })
  it("should set a value as string", () => {
    hashTable.set("something", "nice");

   expect(hashTable.get("something")).toBe("nice")
  })

  it("should set a value as number", () => {
    hashTable.set(2, "nice");

   expect(hashTable.get(2)).toBe("nice");
  })

  it("should override the first key value pair", () => {
    hashTable.set("key-1", "value");
    hashTable.set("key-1", "new value");

   expect(hashTable.get("key-1")).toBe("new value");
  })
 
  it("should store many key value pairs", () => {
    const pair1 = ["name", "pedro"]
    const pair2 = ["lastName", "La Rosa"]
    const pair3 = ["age", 30]
    const pair4 = ["address", "barcelona"]
    const pair5 = ["job", "Programmer"]

    hashTable.set(...pair1)
    hashTable.set(...pair2)
    hashTable.set(...pair3)
    hashTable.set(...pair4)
    hashTable.set(...pair5)

    expect(hashTable.get(pair1[0])).toBe(pair1[1])
    expect(hashTable.get(pair2[0])).toBe(pair2[1])
    expect(hashTable.get(pair3[0])).toBe(pair3[1])
    expect(hashTable.get(pair4[0])).toBe(pair4[1])
    expect(hashTable.get(pair5[0])).toBe(pair5[1])
  })
  
  describe("Testing values method", () => {
    it ("should return empty array when invoke values method of the an empty hash table", () => {
      expect(hashTable.values()).toEqual([])
    })

    it ("should return all the values that the hashTable has", () => {
      const pair1 = ["name", "pedro"]
      const pair2 = ["lastName", "La Rosa"]
      const pair3 = ["age", 30]
      const pair4 = ["address", "barcelona"]
      const pair5 = ["job", "Programmer"]
      
      hashTable.set(...pair1)
      hashTable.set(...pair2)
      hashTable.set(...pair3)
      hashTable.set(...pair4)
      hashTable.set(...pair5)

      expect(hashTable.values()).toEqual([pair2[1], pair5[1], pair1[1], pair3[1], pair4[1],])
    })
  })
})