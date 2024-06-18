# Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

```
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
```
For better understanding, please follow the numbers of the next array consecutively:

```
array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
```

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

## Решение

Идея состоит в том, чтобы уменьшить квадрат, отделяя от него (и параллельно записывая в новый массив) верхний горизонтальный и правый вертикальный ряд, после чего перевернуть итоговый квадрат и выполнить операцию заново.

1. Записываем в `result` первый ряд и удаляем его из текущего массива `result.push(...arr.shift())`.
2. Проходим циклом по оставшимся элементам и добавляем в `result` последний элемент каждого массива в этом элементе `arr.map(row => result.push(row.pop()))`.
3. Переворачиваем массив и массивы внутри `arr.reverse().map(row => row.reverse())`.
4. Повторяем операцию до тех пор, пока в исходном массиве не останется элементов.

#### Codewars kata

https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
