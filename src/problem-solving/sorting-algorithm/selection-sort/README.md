# Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

Selection sort has the property of minimizing the number of swaps. In applications where the cost of swapping items is high, selection sort very well may be the algorithm of choice.

## Algorithm

```
for i = 1:n,
    k = i
    for j = i+1:n, if a[j] < a[k], k = j
    → invariant: a[k] smallest of a[i..n]
    swap a[i,k]
    → invariant: a[1..i] in final position
end
```

[More about Selection Sort](https://www.toptal.com/developers/sorting-algorithms/selection-sort)