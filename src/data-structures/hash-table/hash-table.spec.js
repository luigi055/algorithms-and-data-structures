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

    hashTable.set(...pair1)
    hashTable.set(...pair2)
    hashTable.set(...pair3)
    hashTable.set(...pair4)

    expect(hashTable.get(pair1[0])).toBe(pair1[1])
    expect(hashTable.get(pair2[0])).toBe(pair2[1])
    expect(hashTable.get(pair3[0])).toBe(pair3[1])
    expect(hashTable.get(pair4[0])).toBe(pair4[1])
  })
})