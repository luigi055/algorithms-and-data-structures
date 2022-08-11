import MaxBinaryHeap from "./index";

describe("Testing MaxBinaryHeap Class", () => {
	let maxBinaryHeap;

	beforeEach(() => {
		maxBinaryHeap = new MaxBinaryHeap();
	});

	describe("Insertion", () => {
		it("should insert the first value", () => {
			maxBinaryHeap.insert(55);

			expect(maxBinaryHeap.values).toEqual([55]);
		});

		it("should insert a second value lower than the first one", () => {
			maxBinaryHeap.insert(55);
			maxBinaryHeap.insert(22);

			expect(maxBinaryHeap.values).toEqual([55, 22]);
		});

		it("should insert a second value larger than the first one and the second should bubble up to the root since is bigger", () => {
			maxBinaryHeap.insert(55);
			maxBinaryHeap.insert(60);

			expect(maxBinaryHeap.values).toEqual([60, 55]);
		});

		it("should insert a third value in the binary heap which is smaller than root", () => {
			maxBinaryHeap.insert(55);
			maxBinaryHeap.insert(60);
			maxBinaryHeap.insert(44);

			expect(maxBinaryHeap.values).toEqual([60, 55, 44]);
		});

		it("should insert a third value in the binary heap which is larger than root", () => {
			maxBinaryHeap.insert(55);
			maxBinaryHeap.insert(60);
			maxBinaryHeap.insert(70);

			expect(maxBinaryHeap.values).toEqual([70, 55, 60]);
		});

		it("should insert a fourth value in the binary heap which is smaller than its father", () => {
			maxBinaryHeap.insert(55);
			maxBinaryHeap.insert(60);
			maxBinaryHeap.insert(70);
			maxBinaryHeap.insert(40);

			expect(maxBinaryHeap.values).toEqual([70, 55, 60, 40]);
		});

		it("should insert a fourth value in the binary heap which is larger than its father", () => {
			maxBinaryHeap.insert(55);
			maxBinaryHeap.insert(60);
			maxBinaryHeap.insert(70);
			maxBinaryHeap.insert(65);

			expect(maxBinaryHeap.values).toEqual([70, 65, 60, 55]);
		});

		it("should insert a fourth value in the binary heap which is larger than the fathers of its father", () => {
			maxBinaryHeap.insert(55);
			maxBinaryHeap.insert(60);
			maxBinaryHeap.insert(70);
			maxBinaryHeap.insert(80);

			expect(maxBinaryHeap.values).toEqual([80, 70, 60, 55]);
		});

		it("should insert a fifth value in the binary heap which is smaller than its father", () => {
			maxBinaryHeap.insert(55);
			maxBinaryHeap.insert(60);
			maxBinaryHeap.insert(70);
			maxBinaryHeap.insert(80);
			maxBinaryHeap.insert(62);

			expect(maxBinaryHeap.values).toEqual([80, 70, 60, 55, 62]);
		});

		it("should insert a fifth value in the binary heap which is larger than its father", () => {
			maxBinaryHeap.insert(55);
			maxBinaryHeap.insert(60);
			maxBinaryHeap.insert(70);
			maxBinaryHeap.insert(80);
			maxBinaryHeap.insert(73);

			expect(maxBinaryHeap.values).toEqual([80, 73, 60, 55, 70]);
		});

		it("should insert a fifth value in the binary heap which is larger than the father of its father", () => {
			maxBinaryHeap.insert(55);
			maxBinaryHeap.insert(60);
			maxBinaryHeap.insert(70);
			maxBinaryHeap.insert(80);
			maxBinaryHeap.insert(85);

			expect(maxBinaryHeap.values).toEqual([85, 80, 60, 55, 70]);
		});

		it("should insert a sixth value in the binary heap which is smaller than its father", () => {
			maxBinaryHeap.insert(55);
			maxBinaryHeap.insert(60);
			maxBinaryHeap.insert(70);
			maxBinaryHeap.insert(80);
			maxBinaryHeap.insert(85);
			maxBinaryHeap.insert(58);

			expect(maxBinaryHeap.values).toEqual([85, 80, 60, 55, 70, 58]);
		});

		it("should insert a sixth value in the binary heap which is larger than its father", () => {
			maxBinaryHeap.insert(55);
			maxBinaryHeap.insert(60);
			maxBinaryHeap.insert(70);
			maxBinaryHeap.insert(80);
			maxBinaryHeap.insert(85);
			maxBinaryHeap.insert(62);

			expect(maxBinaryHeap.values).toEqual([85, 80, 62, 55, 70, 60]);
		});

		it("should insert a sixth value in the binary heap which is larger than the father of its father", () => {
			maxBinaryHeap.insert(55);
			maxBinaryHeap.insert(60);
			maxBinaryHeap.insert(70);
			maxBinaryHeap.insert(80);
			maxBinaryHeap.insert(85);
			maxBinaryHeap.insert(90);

			expect(maxBinaryHeap.values).toEqual([90, 80, 85, 55, 70, 60]);
		});

		it("should insert a seventh value in the binary heap which is smaller than its father", () => {
			maxBinaryHeap.insert(55);
			maxBinaryHeap.insert(60);
			maxBinaryHeap.insert(70);
			maxBinaryHeap.insert(80);
			maxBinaryHeap.insert(85);
			maxBinaryHeap.insert(90);
			maxBinaryHeap.insert(81);

			expect(maxBinaryHeap.values).toEqual([90, 80, 85, 55, 70, 60, 81]);
		});

		it("should insert a seventh value in the binary heap which is larger than its father", () => {
			maxBinaryHeap.insert(55);
			maxBinaryHeap.insert(60);
			maxBinaryHeap.insert(70);
			maxBinaryHeap.insert(80);
			maxBinaryHeap.insert(85);
			maxBinaryHeap.insert(90);
			maxBinaryHeap.insert(86);

			expect(maxBinaryHeap.values).toEqual([90, 80, 86, 55, 70, 60, 85]);
		});

		it("should insert a seventh value in the binary heap which is larger than the father of its father", () => {
			maxBinaryHeap.insert(55);
			maxBinaryHeap.insert(60);
			maxBinaryHeap.insert(70);
			maxBinaryHeap.insert(80);
			maxBinaryHeap.insert(85);
			maxBinaryHeap.insert(90);
			maxBinaryHeap.insert(95);

			expect(maxBinaryHeap.values).toEqual([95, 80, 90, 55, 70, 60, 85]);
		});

		it("should insert a eight value in the binary heap which is larger than the root", () => {
			maxBinaryHeap.insert(55);
			maxBinaryHeap.insert(60);
			maxBinaryHeap.insert(70);
			maxBinaryHeap.insert(80);
			maxBinaryHeap.insert(85);
			maxBinaryHeap.insert(90);
			maxBinaryHeap.insert(95);
			maxBinaryHeap.insert(100);

			expect(maxBinaryHeap.values).toEqual([100, 95, 90, 80, 70, 60, 85, 55]);
		});

		it("should create a correct MaxBinaryHeap", () => {
			maxBinaryHeap.insert(12);
			maxBinaryHeap.insert(25);
			maxBinaryHeap.insert(17);
			maxBinaryHeap.insert(5);
			maxBinaryHeap.insert(1);
			maxBinaryHeap.insert(8);
			maxBinaryHeap.insert(36);
			maxBinaryHeap.insert(19);
			maxBinaryHeap.insert(9);
			maxBinaryHeap.insert(100);
			maxBinaryHeap.insert(15);
			maxBinaryHeap.insert(6);
			maxBinaryHeap.insert(11);
			maxBinaryHeap.insert(13);
			maxBinaryHeap.insert(4);

			expect(maxBinaryHeap.values).toEqual([
				100, 36, 25, 12, 19, 11, 17, 5, 9, 1, 15, 6, 8, 13, 4,
			]);
		});
	});

	describe("extractMax method", () => {
		it("should return null when try to extract an empty MaxBinaryHeap", () => {
			const extractedElement = maxBinaryHeap.extractMax();

			expect(extractedElement).toBe(null);

			expect(maxBinaryHeap.values).toEqual([]);
		});

		it("should extract the only value in the MaxBinaryHeap", () => {
			maxBinaryHeap.insert(12);

			const extractedElement = maxBinaryHeap.extractMax();

			expect(extractedElement).toBe(12);

			expect(maxBinaryHeap.values).toEqual([]);
		});

		it("should remove the max number and bubble down (sink down) the new root ", () => {
			maxBinaryHeap.insert(41);
			maxBinaryHeap.insert(39);
			maxBinaryHeap.insert(33);
			maxBinaryHeap.insert(18);
			maxBinaryHeap.insert(27);
			maxBinaryHeap.insert(12);
			maxBinaryHeap.insert(55);

			const extractedElement = maxBinaryHeap.extractMax();

			expect(extractedElement).toBe(55);
			expect(maxBinaryHeap.values).toEqual([41, 39, 33, 18, 27, 12]);
		});

		it("should extract successfully a big MaxBinaryHeap", () => {
			maxBinaryHeap.insert(12);
			maxBinaryHeap.insert(25);
			maxBinaryHeap.insert(17);
			maxBinaryHeap.insert(5);
			maxBinaryHeap.insert(1);
			maxBinaryHeap.insert(8);
			maxBinaryHeap.insert(36);
			maxBinaryHeap.insert(19);
			maxBinaryHeap.insert(9);
			maxBinaryHeap.insert(100);
			maxBinaryHeap.insert(15);
			maxBinaryHeap.insert(6);
			maxBinaryHeap.insert(11);
			maxBinaryHeap.insert(13);
			maxBinaryHeap.insert(4);

			const extractedElement = maxBinaryHeap.extractMax();

			expect(extractedElement).toBe(100);

			expect(maxBinaryHeap.values).toEqual([
				36, 19, 25, 12, 15, 11, 17, 5, 9, 1, 4, 6, 8, 13,
			]);
		});

		it("should create a binary heap from an array", () => {
			maxBinaryHeap = MaxBinaryHeap.from([
				12, 25, 17, 5, 1, 8, 36, 19, 9, 100, 15, 6, 11, 13, 4,
			]);

			expect(maxBinaryHeap.values).toEqual([
				100, 36, 25, 12, 19, 11, 17, 5, 9, 1, 15, 6, 8, 13, 4,
			]);
		});
	});
});
