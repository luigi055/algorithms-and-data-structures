import PriorityQueue, {Node} from './index';

describe("Testing PriorityQueue Class", () => {
  let priorityQueue;
  beforeEach(() => {
    priorityQueue = new PriorityQueue()
  })
  describe("Insertion", () => {

    it("should enqueue the first value", () => {
      const firstNode = new Node(55, "something")
      priorityQueue.enqueue(55, "something")

      expect(priorityQueue.values).toEqual([firstNode])
    })

    it("should enqueue a second value lower than the first one", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(40, "something2")
      priorityQueue.enqueue(55, "something")
      priorityQueue.enqueue(40, "something2")

      expect(priorityQueue.values).toEqual([secondNode, firstNode])
    })

    it("should enqueue a second value larger than the first one and the second should bubble up to the root since is bigger", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      priorityQueue.enqueue(55, "something")
      priorityQueue.enqueue(60, "something2")

      expect(priorityQueue.values).toEqual([firstNode, secondNode])
    })

    it("should enqueue a third value in the binary heap which is smaller than root", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(44, "something3")
      priorityQueue.enqueue(55, "something")
      priorityQueue.enqueue(60, "something2")
      priorityQueue.enqueue(44, "something3")

      expect(priorityQueue.values).toEqual([thirdNode,secondNode,firstNode])
    })

    it("should enqueue a third value in the binary heap which is larger than root", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something2")
      priorityQueue.enqueue(55, "something")
      priorityQueue.enqueue(60, "something2")
      priorityQueue.enqueue(70, "something2")

      expect(priorityQueue.values).toEqual([firstNode,secondNode,thirdNode])
    })

    it("should enqueue a fourth value in the binary heap which is smaller than its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(40, "something4")
      priorityQueue.enqueue(55, "something")
      priorityQueue.enqueue(60, "something2")
      priorityQueue.enqueue(70, "something3")
      priorityQueue.enqueue(40, "something4")


      expect(priorityQueue.values).toEqual([fourthNode,firstNode,thirdNode,secondNode])
    })

    it("should enqueue a fourth value in the binary heap which is larger than its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(65, "something4")
      priorityQueue.enqueue(55, "something")
      priorityQueue.enqueue(60, "something2")
      priorityQueue.enqueue(70, "something3")
      priorityQueue.enqueue(65, "something4")

      expect(priorityQueue.values).toEqual([firstNode,secondNode,thirdNode,fourthNode])
    })

    it("should enqueue a fourth value in the binary heap which is larger than the fathers of its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      priorityQueue.enqueue(55, "something")
      priorityQueue.enqueue(60, "something2")
      priorityQueue.enqueue(70, "something3")
      priorityQueue.enqueue(80, "something4")

      expect(priorityQueue.values).toEqual([firstNode,secondNode,thirdNode,fourthNode])
    })

    it("should enqueue a fifth value in the binary heap which is smaller than its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      const fifthNode = new Node(62, "something5")
      priorityQueue.enqueue(55, "something")
      priorityQueue.enqueue(60, "something2")
      priorityQueue.enqueue(70, "something3")
      priorityQueue.enqueue(80, "something4")
      priorityQueue.enqueue(62, "something5")


      expect(priorityQueue.values).toEqual([firstNode,secondNode,thirdNode,fourthNode,fifthNode])
    })

    it("should enqueue a fifth value in the binary heap which is larger than its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      const fifthNode = new Node(73, "something5")
      priorityQueue.enqueue(55, "something")
      priorityQueue.enqueue(60, "something2")
      priorityQueue.enqueue(70, "something3")
      priorityQueue.enqueue(80, "something4")
      priorityQueue.enqueue(73, "something5")

      expect(priorityQueue.values).toEqual([firstNode,secondNode,thirdNode,fourthNode,fifthNode])
    })

    it("should enqueue a fifth value in the binary heap which is larger than the father of its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      const fifthNode = new Node(85, "something5")
      priorityQueue.enqueue(55, "something")
      priorityQueue.enqueue(60, "something2")
      priorityQueue.enqueue(70, "something3")
      priorityQueue.enqueue(80, "something4")
      priorityQueue.enqueue(85, "something5")

      expect(priorityQueue.values).toEqual([firstNode,secondNode,thirdNode,fourthNode,fifthNode])
    })

    it("should enqueue a sixth value in the binary heap which is smaller than its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      const fifthNode = new Node(85, "something5")
      const sixthNode = new Node(58, "something6")

      priorityQueue.enqueue(55, "something")
      priorityQueue.enqueue(60, "something2")
      priorityQueue.enqueue(70, "something3")
      priorityQueue.enqueue(80, "something4")
      priorityQueue.enqueue(85, "something5")
      priorityQueue.enqueue(58, "something6")

      expect(priorityQueue.values).toEqual([firstNode,secondNode,sixthNode,fourthNode,fifthNode,thirdNode])
    })

    it("should enqueue a sixth value in the binary heap which is larger than its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      const fifthNode = new Node(85, "something5")
      const sixthNode = new Node(40, "something6")

      priorityQueue.enqueue(55, "something")
      priorityQueue.enqueue(60, "something2")
      priorityQueue.enqueue(70, "something3")
      priorityQueue.enqueue(80, "something4")
      priorityQueue.enqueue(85, "something5")
      priorityQueue.enqueue(40, "something6")

      expect(priorityQueue.values).toEqual([sixthNode,secondNode,firstNode,fourthNode,fifthNode,thirdNode])
    })

    it("should enqueue a sixth value in the binary heap which is larger than the father of its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      const fifthNode = new Node(85, "something5")
      const sixthNode = new Node(2, "something6")

      priorityQueue.enqueue(55, "something")
      priorityQueue.enqueue(60, "something2")
      priorityQueue.enqueue(70, "something3")
      priorityQueue.enqueue(80, "something4")
      priorityQueue.enqueue(85, "something5")
      priorityQueue.enqueue(2, "something6")

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

      priorityQueue.enqueue(55, "something")
      priorityQueue.enqueue(60, "something2")
      priorityQueue.enqueue(70, "something3")
      priorityQueue.enqueue(80, "something4")
      priorityQueue.enqueue(85, "something5")
      priorityQueue.enqueue(90, "something6")
      priorityQueue.enqueue(81, "something6")

      expect(priorityQueue.values).toEqual([firstNode,secondNode,thirdNode,fourthNode,fifthNode,sixthNode,seventhNode])
    })

    it("should enqueue a seventh value in the binary heap which is smaller than its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      const fifthNode = new Node(85, "something5")
      const sixthNode = new Node(90, "something6")
      const seventhNode = new Node(65, "something6")

      priorityQueue.enqueue(55, "something")
      priorityQueue.enqueue(60, "something2")
      priorityQueue.enqueue(70, "something3")
      priorityQueue.enqueue(80, "something4")
      priorityQueue.enqueue(85, "something5")
      priorityQueue.enqueue(90, "something6")
      priorityQueue.enqueue(65, "something6")

      expect(priorityQueue.values).toEqual([firstNode,secondNode,seventhNode,fourthNode,fifthNode,sixthNode,thirdNode])
    })

    it("should enqueue a seventh value in the binary heap which is smaller than the father of its father", () => {
      const firstNode = new Node(55, "something")
      const secondNode = new Node(60, "something2")
      const thirdNode = new Node(70, "something3")
      const fourthNode = new Node(80, "something4")
      const fifthNode = new Node(85, "something5")
      const sixthNode = new Node(90, "something6")
      const seventhNode = new Node(5, "something6")

      priorityQueue.enqueue(55, "something")
      priorityQueue.enqueue(60, "something2")
      priorityQueue.enqueue(70, "something3")
      priorityQueue.enqueue(80, "something4")
      priorityQueue.enqueue(85, "something5")
      priorityQueue.enqueue(90, "something6")
      priorityQueue.enqueue(5, "something6")

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
      priorityQueue.enqueue(12, "something")
      priorityQueue.enqueue(25, "something2")
      priorityQueue.enqueue(17, "something3")
      priorityQueue.enqueue(5, "something4")
      priorityQueue.enqueue(1, "something5")
      priorityQueue.enqueue(8, "something6")
      priorityQueue.enqueue(36, "something7")
      priorityQueue.enqueue(19, "something7")
      priorityQueue.enqueue(9, "something7")
      priorityQueue.enqueue(100, "something7")
      priorityQueue.enqueue(15, "something7")
      priorityQueue.enqueue(6, "something7")
      priorityQueue.enqueue(11, "something7")
      priorityQueue.enqueue(13, "something7")
      priorityQueue.enqueue(4, "something7")

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
      priorityQueue.enqueue(12, "something")
      priorityQueue.enqueue(4, "something2")

      const extractedElement = priorityQueue.dequeue()

      expect(extractedElement).toEqual(secondNode)

      expect(priorityQueue.values).toEqual([firstNode])

    })

    it("should extract the most priority value in the MinBinaryHeap of three elements", () => {
      const firstNode = new Node(12, "something")
      const secondNode = new Node(4, "something2")
      const thirdNode = new Node(6, "something3")
      priorityQueue.enqueue(12, "something")
      priorityQueue.enqueue(4, "something2")
      priorityQueue.enqueue(6, "something3")

      const extractedElement = priorityQueue.dequeue()

      expect(extractedElement).toEqual(secondNode)

      expect(priorityQueue.values).toEqual([thirdNode,firstNode])
    })

    it("should extract the most priority value in the MinBinaryHeap of forth elements", () => {
      const firstNode = new Node(12, "something")
      const secondNode = new Node(4, "something2")
      const thirdNode = new Node(6, "something3")
      const fourthNode = new Node(2, "something4")
      priorityQueue.enqueue(12, "something")
      priorityQueue.enqueue(4, "something2")
      priorityQueue.enqueue(6, "something3")
      priorityQueue.enqueue(2, "something4")

      const extractedElement = priorityQueue.dequeue()

      expect(extractedElement).toEqual(fourthNode)

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
      priorityQueue.enqueue(41, "something")
      priorityQueue.enqueue(39, "something2")
      priorityQueue.enqueue(33, "something3")
      priorityQueue.enqueue(18, "something4")
      priorityQueue.enqueue(27, "something5")
      priorityQueue.enqueue(12, "something6")
      priorityQueue.enqueue(55, "something7")

      const extractedElement = priorityQueue.dequeue()

      expect(extractedElement).toEqual(sixthNode)
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
      priorityQueue.enqueue(12, "something")
      priorityQueue.enqueue(25, "something2")
      priorityQueue.enqueue(17, "something3")
      priorityQueue.enqueue(5, "something4")
      priorityQueue.enqueue(1, "something5")
      priorityQueue.enqueue(8, "something6")
      priorityQueue.enqueue(36, "something7")
      priorityQueue.enqueue(19, "something8")
      priorityQueue.enqueue(9, "something9")
      priorityQueue.enqueue(100, "something10")
      priorityQueue.enqueue(15, "something11")
      priorityQueue.enqueue(6, "something12")
      priorityQueue.enqueue(11, "something13")
      priorityQueue.enqueue(13, "something14")
      priorityQueue.enqueue(4, "something15")

      const extractedElement = priorityQueue.dequeue()

      expect(extractedElement).toEqual(fifthNode)

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
      priorityQueue.enqueue(12, "something")
      priorityQueue.enqueue(25, "something2")
      priorityQueue.enqueue(17, "something3")
      priorityQueue.enqueue(5, "something4")
      priorityQueue.enqueue(1, "something5")
      priorityQueue.enqueue(8, "something6")
      priorityQueue.enqueue(36, "something7")
      priorityQueue.enqueue(19, "something8")
      priorityQueue.enqueue(9, "something9")
      priorityQueue.enqueue(100, "something10")
      priorityQueue.enqueue(15, "something11")
      priorityQueue.enqueue(6, "something12")
      priorityQueue.enqueue(11, "something13")
      priorityQueue.enqueue(13, "something14")
      priorityQueue.enqueue(4, "something15")

      const extractedFirstElement = priorityQueue.dequeue()
      const extractedSecondElement = priorityQueue.dequeue()
      const extractedThirdElement = priorityQueue.dequeue()

      expect(extractedFirstElement).toEqual(fifthNode)
      expect(extractedSecondElement).toEqual(fifteenthNode)
      expect(extractedThirdElement).toEqual(fourthNode)

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