import PriorityQueue, {Node} from './index';

describe("Testing MinBinaryHeap Class", () => {
  let priorityQueue;
  beforeEach(() => {
    priorityQueue = new PriorityQueue()
  })
  describe("Insertion", () => {

    it("should enqueue the first value", () => {
      const firstNode = new Node(55, "something")
      priorityQueue.enqueue(firstNode)

      expect(priorityQueue.values).toEqual([firstNode])
    })

    it("should enqueue a second value lower than the first one", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(40, "something2")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)

      expect(priorityQueue.values).toEqual([secondNode, firstNode])
    })

    it("should enqueue a second value larger than the first one and the second should bubble up to the root since is bigger", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)

      expect(priorityQueue.values).toEqual([firstNode, secondNode])
    })

    it("should enqueue a third value in the binary heap which is smaller than root", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(44, "something2")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)

      expect(priorityQueue.values).toEqual([thirdNode,secondNode,firstNode])
    })

    it("should enqueue a third value in the binary heap which is larger than root", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something2")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)

      expect(priorityQueue.values).toEqual([firstNode,secondNode,thirdNode])
    })

    it("should enqueue a fourth value in the binary heap which is smaller than its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something2")
      const fourthNode = new Node(40, "something2")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)
      priorityQueue.enqueue(fourthNode)


      expect(priorityQueue.values).toEqual([fourthNode,firstNode,thirdNode,secondNode])
    })

    it("should enqueue a fourth value in the binary heap which is larger than its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(65, "something4")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)
      priorityQueue.enqueue(fourthNode)

      expect(priorityQueue.values).toEqual([firstNode,secondNode,thirdNode,fourthNode])
    })

    it("should enqueue a fourth value in the binary heap which is larger than the fathers of its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)
      priorityQueue.enqueue(fourthNode)

      expect(priorityQueue.values).toEqual([firstNode,secondNode,thirdNode,fourthNode])
    })

    it("should enqueue a fifth value in the binary heap which is smaller than its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      const fifthNode = new Node(62, "something5")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)
      priorityQueue.enqueue(fourthNode)
      priorityQueue.enqueue(fifthNode)


      expect(priorityQueue.values).toEqual([firstNode,secondNode,thirdNode,fourthNode,fifthNode])
    })

    it("should enqueue a fifth value in the binary heap which is larger than its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      const fifthNode = new Node(73, "something5")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)
      priorityQueue.enqueue(fourthNode)
      priorityQueue.enqueue(fifthNode)

      expect(priorityQueue.values).toEqual([firstNode,secondNode,thirdNode,fourthNode,fifthNode])
    })

    it("should enqueue a fifth value in the binary heap which is larger than the father of its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      const fifthNode = new Node(85, "something5")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)
      priorityQueue.enqueue(fourthNode)
      priorityQueue.enqueue(fifthNode)

      expect(priorityQueue.values).toEqual([firstNode,secondNode,thirdNode,fourthNode,fifthNode])
    })

    it("should enqueue a sixth value in the binary heap which is smaller than its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      const fifthNode = new Node(85, "something5")
      const sixthNode = new Node(58, "something6")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)
      priorityQueue.enqueue(fourthNode)
      priorityQueue.enqueue(fifthNode)
      priorityQueue.enqueue(sixthNode)

      expect(priorityQueue.values).toEqual([firstNode,secondNode,sixthNode,fourthNode,fifthNode,thirdNode])
    })

    it("should enqueue a sixth value in the binary heap which is larger than its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      const fifthNode = new Node(85, "something5")
      const sixthNode = new Node(40, "something6")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)
      priorityQueue.enqueue(fourthNode)
      priorityQueue.enqueue(fifthNode)
      priorityQueue.enqueue(sixthNode)

      expect(priorityQueue.values).toEqual([sixthNode,secondNode,firstNode,fourthNode,fifthNode,thirdNode])
    })

    it("should enqueue a sixth value in the binary heap which is larger than the father of its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      const fifthNode = new Node(85, "something5")
      const sixthNode = new Node(2, "something6")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)
      priorityQueue.enqueue(fourthNode)
      priorityQueue.enqueue(fifthNode)
      priorityQueue.enqueue(sixthNode)

      expect(priorityQueue.values).toEqual([sixthNode,secondNode,firstNode,fourthNode,fifthNode,thirdNode])
    })

    it("should enqueue a seventh value in the binary heap which is smaller than its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      const fifthNode = new Node(85, "something5")
      const sixthNode = new Node(90, "something6")
      const seventhNode = new Node(81, "something6")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)
      priorityQueue.enqueue(fourthNode)
      priorityQueue.enqueue(fifthNode)
      priorityQueue.enqueue(sixthNode)
      priorityQueue.enqueue(seventhNode)

      expect(priorityQueue.values).toEqual([firstNode,secondNode,thirdNode,fourthNode,fifthNode,sixthNode,seventhNode])
    })

    it("should enqueue a seventh value in the binary heap which is smaller than its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      const fifthNode = new Node(85, "something5")
      const sixthNode = new Node(90, "something6")
      const seventhNode = new Node(65, "something7")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)
      priorityQueue.enqueue(fourthNode)
      priorityQueue.enqueue(fifthNode)
      priorityQueue.enqueue(sixthNode)
      priorityQueue.enqueue(seventhNode)

      expect(priorityQueue.values).toEqual([firstNode,secondNode,seventhNode,fourthNode,fifthNode,sixthNode,thirdNode])
    })

    it("should enqueue a seventh value in the binary heap which is smaller than the father of its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      const fifthNode = new Node(85, "something5")
      const sixthNode = new Node(90, "something6")
      const seventhNode = new Node(5, "something7")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)
      priorityQueue.enqueue(fourthNode)
      priorityQueue.enqueue(fifthNode)
      priorityQueue.enqueue(sixthNode)
      priorityQueue.enqueue(seventhNode)

      expect(priorityQueue.values).toEqual([seventhNode,secondNode,firstNode,fourthNode,fifthNode,sixthNode,thirdNode])
    })


    it("should create a correct MinBinaryHeap", () => {
      const firstNode = new Node(12, "something")
      const secondNode = new Node(25, "something2")
      const thirdNode = new Node(17, "something3")
      const fourthNode = new Node(5, "something4")
      const fifthNode = new Node(1, "something5")
      const sixthNode = new Node(8, "something6")
      const seventhNode = new Node(36, "something7")
      const eighthNode = new Node(19, "something7")
      const ninthNode = new Node(9, "something7")
      const tenthNode = new Node(100, "something7")
      const eleventhNode = new Node(15, "something7")
      const twelvethNode = new Node(6, "something7")
      const thirdteenthNode = new Node(11, "something7")
      const fourteenthNode = new Node(13, "something7")
      const fifteenthNode = new Node(4, "something7")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)
      priorityQueue.enqueue(fourthNode)
      priorityQueue.enqueue(fifthNode)
      priorityQueue.enqueue(sixthNode)
      priorityQueue.enqueue(seventhNode)
      priorityQueue.enqueue(eighthNode)
      priorityQueue.enqueue(ninthNode)
      priorityQueue.enqueue(tenthNode)
      priorityQueue.enqueue(eleventhNode)
      priorityQueue.enqueue(twelvethNode)
      priorityQueue.enqueue(thirdteenthNode)
      priorityQueue.enqueue(fourteenthNode)
      priorityQueue.enqueue(fifteenthNode)

      expect(priorityQueue.values).toEqual([
        fifthNode,
        fourthNode,
        fifteenthNode,
        ninthNode,
        firstNode,
        sixthNode,
        twelvethNode,
        secondNode,
        eighthNode,
        tenthNode,
        eleventhNode,
        thirdNode,
        thirdteenthNode,
        seventhNode,
        fourteenthNode
      ])

    })
  })

  describe("dequeue method", () => {
    it("should return null when try to extract an empty MinBinaryHeap", () => {
      const extractedElement = priorityQueue.dequeue()

      expect(extractedElement).toBe(null)

      expect(priorityQueue.values).toEqual([])

    })

    it("should extract the most priority value in the MinBinaryHeap", () => {
      const firstNode = new Node(12, "something")
      const secondNode = new Node(4, "something2")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)

      const extractedElement = priorityQueue.dequeue()

      expect(extractedElement).toEqual(secondNode)

      expect(priorityQueue.values).toEqual([firstNode])

    })

    it("should extract the most priority value in the MinBinaryHeap of three elements", () => {
      const firstNode = new Node(12, "something")
      const secondNode = new Node(4, "something2")
      const thirdNode = new Node(6, "something3")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)

      const extractedElement = priorityQueue.dequeue()

      expect(extractedElement).toBe(secondNode)

      expect(priorityQueue.values).toEqual([thirdNode,firstNode])
    })

    it("should extract the most priority value in the MinBinaryHeap of forth elements", () => {
      const firstNode = new Node(12, "something")
      const secondNode = new Node(4, "something2")
      const thirdNode = new Node(6, "something3")
      const fourthNode = new Node(2, "something4")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)
      priorityQueue.enqueue(fourthNode)

      const extractedElement = priorityQueue.dequeue()

      expect(extractedElement).toBe(fourthNode)

      expect(priorityQueue.values).toEqual([secondNode,firstNode,thirdNode])

    })

    it("should remove the max number and bubble down (sink down) the new root ", () => {
      const firstNode = new Node(41, "something")
      const secondNode = new Node(39, "something2")
      const thirdNode = new Node(33, "something3")
      const fourthNode = new Node(18, "something4")
      const fifthNode = new Node(27, "something5")
      const sixthNode = new Node(12, "something6")
      const seventhNode = new Node(55, "something7")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)
      priorityQueue.enqueue(fourthNode)
      priorityQueue.enqueue(fifthNode)
      priorityQueue.enqueue(sixthNode)
      priorityQueue.enqueue(seventhNode)

      const extractedElement = priorityQueue.dequeue()

      expect(extractedElement).toBe(sixthNode)
      expect(priorityQueue.values).toEqual([ fourthNode, fifthNode, secondNode, firstNode, thirdNode, seventhNode ]);
    })

    it("should extract successfully a big MinBinaryHeap", () => {
      const firstNode = new Node(12, "something")
      const secondNode = new Node(25, "something2")
      const thirdNode = new Node(17, "something3")
      const fourthNode = new Node(5, "something4")
      const fifthNode = new Node(1, "something5")
      const sixthNode = new Node(8, "something6")
      const seventhNode = new Node(36, "something7")
      const eighthNode = new Node(19, "something8")
      const ninthNode = new Node(9, "something9")
      const tenthNode = new Node(100, "something10")
      const eleventhNode = new Node(15, "something11")
      const twelvethNode = new Node(6, "something12")
      const thirdteenthNode = new Node(11, "something13")
      const fourteenthNode = new Node(13, "something14")
      const fifteenthNode = new Node(4, "something15")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)
      priorityQueue.enqueue(fourthNode)
      priorityQueue.enqueue(fifthNode)
      priorityQueue.enqueue(sixthNode)
      priorityQueue.enqueue(seventhNode)
      priorityQueue.enqueue(eighthNode)
      priorityQueue.enqueue(ninthNode)
      priorityQueue.enqueue(tenthNode)
      priorityQueue.enqueue(eleventhNode)
      priorityQueue.enqueue(twelvethNode)
      priorityQueue.enqueue(thirdteenthNode)
      priorityQueue.enqueue(fourteenthNode)
      priorityQueue.enqueue(fifteenthNode)

      const extractedElement = priorityQueue.dequeue()

      expect(extractedElement).toBe(fifthNode)

      expect(priorityQueue.values).toEqual([
        fifteenthNode,
        fourthNode,
        twelvethNode,
        ninthNode,
        firstNode,
        sixthNode,
        fourteenthNode,
        secondNode,
        eighthNode,
        tenthNode,
        eleventhNode,
        thirdNode,
        thirdteenthNode,
        seventhNode
      ])
    })
    it("should extract successfully 3 values in a MinBinaryHeap", () => {
      const firstNode = new Node(12, "something")
      const secondNode = new Node(25, "something2")
      const thirdNode = new Node(17, "something3")
      const fourthNode = new Node(5, "something4")
      const fifthNode = new Node(1, "something5")
      const sixthNode = new Node(8, "something6")
      const seventhNode = new Node(36, "something7")
      const eighthNode = new Node(19, "something8")
      const ninthNode = new Node(9, "something9")
      const tenthNode = new Node(100, "something10")
      const eleventhNode = new Node(15, "something11")
      const twelvethNode = new Node(6, "something12")
      const thirdteenthNode = new Node(11, "something13")
      const fourteenthNode = new Node(13, "something14")
      const fifteenthNode = new Node(4, "something15")
      priorityQueue.enqueue(firstNode)
      priorityQueue.enqueue(secondNode)
      priorityQueue.enqueue(thirdNode)
      priorityQueue.enqueue(fourthNode)
      priorityQueue.enqueue(fifthNode)
      priorityQueue.enqueue(sixthNode)
      priorityQueue.enqueue(seventhNode)
      priorityQueue.enqueue(eighthNode)
      priorityQueue.enqueue(ninthNode)
      priorityQueue.enqueue(tenthNode)
      priorityQueue.enqueue(eleventhNode)
      priorityQueue.enqueue(twelvethNode)
      priorityQueue.enqueue(thirdteenthNode)
      priorityQueue.enqueue(fourteenthNode)
      priorityQueue.enqueue(fifteenthNode)

      const extractedFirstElement = priorityQueue.dequeue()
      const extractedSecondElement = priorityQueue.dequeue()
      const extractedThirdElement = priorityQueue.dequeue()

      expect(extractedFirstElement).toBe(fifthNode)
      expect(extractedSecondElement).toBe(fifteenthNode)
      expect(extractedThirdElement).toBe(fourthNode)

      expect(priorityQueue.values).toEqual([
        twelvethNode,
        ninthNode,
        sixthNode,
        eighthNode,
        firstNode,
        thirdteenthNode,
        fourteenthNode,
        secondNode,
        seventhNode,
        tenthNode,
        eleventhNode,
        thirdNode
      ])
    })
  })
})