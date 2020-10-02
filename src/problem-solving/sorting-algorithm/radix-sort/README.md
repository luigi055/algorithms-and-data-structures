# Radix Sort

Radix sort is a special sorting algorithm that works on lists of numbers.
The lower bound for Comparison based sorting algorithm (Merge Sort, Heap Sort, Quick-Sort .. etc) is Ω(nLogn), i.e., they cannot do better than nLogn. 

Counting sort is a linear time sorting algorithm that sort in O(n+k) time when elements are in the range from 1 to k.

What if the elements are in the range from 1 to n2? 
We can’t use counting sort because counting sort will take O(n2) which is worse than comparison-based sorting algorithms. Can we sort such an array in linear time? 

Radix Sort is the answer. The idea of Radix Sort is to do digit by digit sort starting from least significant digit to most significant digit. Radix sort uses counting sort as a subroutine to sort.

## Big-O Complexity

|                 | Time Complexity |                 |  Space Complexity  |
| :-------------: | :-------------: | :-------------: | :----------------: |
|       Best      |     average     |       Worst     |        Worst       |
|      O(nk)      |      O(nk)      |      O(nk)      |       O(n+k)       |

- n = length of array.
- k = number of digits (average).

[Read more about the radix sort algorithm here](https://www.geeksforgeeks.org/radix-sort/)