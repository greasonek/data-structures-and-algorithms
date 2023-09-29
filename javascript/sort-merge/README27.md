# Merge Sort

## Author: Emily Greason

### Algorithm

- create a function called mergeSort that takes in an array as an argument
  - declare n to be the array.length
- if the array length is greater than 1, divide the array into left (0-mid) and right(mid-n)
  - call the function on the left then right side of the array
- create a function called merge that takes in the left, right and array; this merges the left and right sub arrays
  - create variables i,j,k -> all = 0
- create a while loop, while i is less than the left.length and j is less than right.length
- if the left at i is less than or = to the right at k and array at k is equal to left at i, i is i + 1 (incrementing i++)
- else if the array at k is equal to right at j, j is j + 1 (j++)
  - k is k + 1 (k++)
- if i is equal to left. length then array.length is equal to right.length
  - otherwise, array.length is equal to left.length
