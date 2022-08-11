import MinBinaryHeap from "./index";

describe("Testing MinBinaryHeap Class", () => {
	let minBinaryHeap;
	beforeEach(() => {
		minBinaryHeap = new MinBinaryHeap();
	});
	describe("Insertion", () => {
		it("should insert the first value", () => {
			minBinaryHeap.insert(55);

			expect(minBinaryHeap.values).toEqual([55]);
		});

		it("should insert a second value lower than the first one", () => {
			minBinaryHeap.insert(55);
			minBinaryHeap.insert(22);

			expect(minBinaryHeap.values).toEqual([22, 55]);
		});

		it("should insert a second value larger than the first one and the second should bubble up push at the end", () => {
			minBinaryHeap.insert(55);
			minBinaryHeap.insert(60);

			expect(minBinaryHeap.values).toEqual([55, 60]);
		});

		it("should insert a third value in the binary heap which is smaller than root and replace the root", () => {
			minBinaryHeap.insert(55);
			minBinaryHeap.insert(60);
			minBinaryHeap.insert(44);

			expect(minBinaryHeap.values).toEqual([44, 60, 55]);
		});

		it("should insert a third value in the binary heap which is larger than root", () => {
			minBinaryHeap.insert(55);
			minBinaryHeap.insert(60);
			minBinaryHeap.insert(70);

			expect(minBinaryHeap.values).toEqual([55, 60, 70]);
		});

		it("should insert a fourth value in the binary heap which is smaller then the root", () => {
			minBinaryHeap.insert(55);
			minBinaryHeap.insert(60);
			minBinaryHeap.insert(70);
			minBinaryHeap.insert(40);

			expect(minBinaryHeap.values).toEqual([40, 55, 70, 60]);
		});

		it("should insert a fourth value in the binary heap which is larger than its father and stay the last", () => {
			minBinaryHeap.insert(55);
			minBinaryHeap.insert(60);
			minBinaryHeap.insert(70);
			minBinaryHeap.insert(65);

			expect(minBinaryHeap.values).toEqual([55, 60, 70, 65]);
		});

		it("should insert a fourth value in the binary heap which is larger than the fathers of its father", () => {
			minBinaryHeap.insert(55);
			minBinaryHeap.insert(60);
			minBinaryHeap.insert(70);
			minBinaryHeap.insert(80);

			expect(minBinaryHeap.values).toEqual([55, 60, 70, 80]);
		});

		it("should insert a fifth value in the binary heap which is smaller than its father", () => {
			minBinaryHeap.insert(55);
			minBinaryHeap.insert(60);
			minBinaryHeap.insert(70);
			minBinaryHeap.insert(80);
			minBinaryHeap.insert(62);

			expect(minBinaryHeap.values).toEqual([55, 60, 70, 80, 62]);
		});

		it("should insert a fifth value in the binary heap which is larger than its father", () => {
			minBinaryHeap.insert(55);
			minBinaryHeap.insert(60);
			minBinaryHeap.insert(70);
			minBinaryHeap.insert(80);
			minBinaryHeap.insert(73);

			expect(minBinaryHeap.values).toEqual([55, 60, 70, 80, 73]);
		});

		it("should insert a fifth value in the binary heap which is larger than the father of its father", () => {
			minBinaryHeap.insert(55);
			minBinaryHeap.insert(60);
			minBinaryHeap.insert(70);
			minBinaryHeap.insert(80);
			minBinaryHeap.insert(85);

			expect(minBinaryHeap.values).toEqual([55, 60, 70, 80, 85]);
		});

		it("should insert a sixth value in the binary heap which is smaller than its father", () => {
			minBinaryHeap.insert(55);
			minBinaryHeap.insert(60);
			minBinaryHeap.insert(70);
			minBinaryHeap.insert(80);
			minBinaryHeap.insert(85);
			minBinaryHeap.insert(58);

			expect(minBinaryHeap.values).toEqual([55, 60, 58, 80, 85, 70]);
		});

		it("should insert a sixth value in the binary heap which is larger than its father", () => {
			minBinaryHeap.insert(55);
			minBinaryHeap.insert(60);
			minBinaryHeap.insert(70);
			minBinaryHeap.insert(80);
			minBinaryHeap.insert(85);
			minBinaryHeap.insert(40);

			expect(minBinaryHeap.values).toEqual([40, 60, 55, 80, 85, 70]);
		});

		it("should insert a sixth value in the binary heap which is larger than the father of its father", () => {
			minBinaryHeap.insert(55);
			minBinaryHeap.insert(60);
			minBinaryHeap.insert(70);
			minBinaryHeap.insert(80);
			minBinaryHeap.insert(85);
			minBinaryHeap.insert(2);

			expect(minBinaryHeap.values).toEqual([2, 60, 55, 80, 85, 70]);
		});

		it("should insert a seventh value in the binary heap which is smaller than its father", () => {
			minBinaryHeap.insert(55);
			minBinaryHeap.insert(60);
			minBinaryHeap.insert(70);
			minBinaryHeap.insert(80);
			minBinaryHeap.insert(85);
			minBinaryHeap.insert(90);
			minBinaryHeap.insert(81);

			expect(minBinaryHeap.values).toEqual([55, 60, 70, 80, 85, 90, 81]);
		});

		it("should insert a seventh value in the binary heap which is smaller than its father", () => {
			minBinaryHeap.insert(55);
			minBinaryHeap.insert(60);
			minBinaryHeap.insert(70);
			minBinaryHeap.insert(80);
			minBinaryHeap.insert(85);
			minBinaryHeap.insert(90);
			minBinaryHeap.insert(65);

			expect(minBinaryHeap.values).toEqual([55, 60, 65, 80, 85, 90, 70]);
		});

		it("should insert a seventh value in the binary heap which is smaller than the father of its father", () => {
			minBinaryHeap.insert(55);
			minBinaryHeap.insert(60);
			minBinaryHeap.insert(70);
			minBinaryHeap.insert(80);
			minBinaryHeap.insert(85);
			minBinaryHeap.insert(90);
			minBinaryHeap.insert(5);

			expect(minBinaryHeap.values).toEqual([5, 60, 55, 80, 85, 90, 70]);
		});

		it("should create a correct MinBinaryHeap", () => {
			minBinaryHeap.insert(12);
			minBinaryHeap.insert(25);
			minBinaryHeap.insert(17);
			minBinaryHeap.insert(5);
			minBinaryHeap.insert(1);
			minBinaryHeap.insert(8);
			minBinaryHeap.insert(36);
			minBinaryHeap.insert(19);
			minBinaryHeap.insert(9);
			minBinaryHeap.insert(100);
			minBinaryHeap.insert(15);
			minBinaryHeap.insert(6);
			minBinaryHeap.insert(11);
			minBinaryHeap.insert(13);
			minBinaryHeap.insert(4);

			expect(minBinaryHeap.values).toEqual([
				1, 5, 4, 9, 12, 8, 6, 25, 19, 100, 15, 17, 11, 36, 13,
			]);
		});
	});

	describe("extractMax method", () => {
		it("should return null when try to extract an empty MinBinaryHeap", () => {
			const extractedElement = minBinaryHeap.extractMax();

			expect(extractedElement).toBe(null);

			expect(minBinaryHeap.values).toEqual([]);
		});

		it("should extract the most priority value in the MinBinaryHeap", () => {
			minBinaryHeap.insert(12);
			minBinaryHeap.insert(4);

			const extractedElement = minBinaryHeap.extractMax();

			expect(extractedElement).toBe(4);

			expect(minBinaryHeap.values).toEqual([12]);
		});

		it("should extract the most priority value in the MinBinaryHeap of three elements", () => {
			minBinaryHeap.insert(12);
			minBinaryHeap.insert(4);
			minBinaryHeap.insert(6);

			const extractedElement = minBinaryHeap.extractMax();

			expect(extractedElement).toBe(4);

			expect(minBinaryHeap.values).toEqual([6, 12]);
		});

		it("should extract the most priority value in the MinBinaryHeap of forth elements", () => {
			minBinaryHeap.insert(12);
			minBinaryHeap.insert(4);
			minBinaryHeap.insert(6);
			minBinaryHeap.insert(2);

			const extractedElement = minBinaryHeap.extractMax();

			expect(extractedElement).toBe(2);

			expect(minBinaryHeap.values).toEqual([4, 12, 6]);
		});

		it("should remove the max number and bubble down (sink down) the new root ", () => {
			minBinaryHeap.insert(41);
			minBinaryHeap.insert(39);
			minBinaryHeap.insert(33);
			minBinaryHeap.insert(18);
			minBinaryHeap.insert(27);
			minBinaryHeap.insert(12);
			minBinaryHeap.insert(55);

			const extractedElement = minBinaryHeap.extractMax();

			expect(extractedElement).toBe(12);
			expect(minBinaryHeap.values).toEqual([18, 27, 39, 41, 33, 55]);
		});

		it("should extract successfully a big MinBinaryHeap", () => {
			minBinaryHeap.insert(12);
			minBinaryHeap.insert(25);
			minBinaryHeap.insert(17);
			minBinaryHeap.insert(5);
			minBinaryHeap.insert(1);
			minBinaryHeap.insert(8);
			minBinaryHeap.insert(36);
			minBinaryHeap.insert(19);
			minBinaryHeap.insert(9);
			minBinaryHeap.insert(100);
			minBinaryHeap.insert(15);
			minBinaryHeap.insert(6);
			minBinaryHeap.insert(11);
			minBinaryHeap.insert(13);
			minBinaryHeap.insert(4);

			const extractedElement = minBinaryHeap.extractMax();

			expect(extractedElement).toBe(1);

			expect(minBinaryHeap.values).toEqual([
				4, 5, 6, 9, 12, 8, 13, 25, 19, 100, 15, 17, 11, 36,
			]);
		});
		it("should extract successfully 3 min values in a MinBinaryHeap", () => {
			minBinaryHeap.insert(12);
			minBinaryHeap.insert(25);
			minBinaryHeap.insert(17);
			minBinaryHeap.insert(5);
			minBinaryHeap.insert(1);
			minBinaryHeap.insert(8);
			minBinaryHeap.insert(36);
			minBinaryHeap.insert(19);
			minBinaryHeap.insert(9);
			minBinaryHeap.insert(100);
			minBinaryHeap.insert(15);
			minBinaryHeap.insert(6);
			minBinaryHeap.insert(11);
			minBinaryHeap.insert(13);
			minBinaryHeap.insert(4);

			const extractedFirstElement = minBinaryHeap.extractMax();
			const extractedSecondElement = minBinaryHeap.extractMax();
			const extractedThirdElement = minBinaryHeap.extractMax();

			expect(extractedFirstElement).toBe(1);
			expect(extractedSecondElement).toBe(4);
			expect(extractedThirdElement).toBe(5);

			expect(minBinaryHeap.values).toEqual([
				6, 9, 8, 19, 12, 11, 13, 25, 36, 100, 15, 17,
			]);
		});

		it("should create a binary heap from an array", () => {
			minBinaryHeap = MinBinaryHeap.from([
				12, 25, 17, 5, 1, 8, 36, 19, 9, 100, 15, 6, 11, 13, 4,
			]);

			expect(minBinaryHeap.values).toEqual([
				1, 5, 4, 9, 12, 8, 6, 25, 19, 100, 15, 17, 11, 36, 13,
			]);
		});
	});
});
