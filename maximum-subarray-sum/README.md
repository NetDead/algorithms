# Проблема максимального подмассива (Maximum subarray problem)

Задача подмассива с максимальной суммой, также известная как задача о сумме максимального сегмента, представляет собой задачу нахождения непрерывного подмассива с наибольшей суммой в заданном одномерном массиве `[1...n]` чисел.

## Варианты решения

### Алгоритм Кадане

#### Вариации
  1. Пустые массивы не допускаются ([no empty subarrays admitted](https://en.m.wikipedia.org/wiki/Maximum_subarray_problem#No_empty_subarrays_admitted)).
  2. Пустые массивы допускаются ([empty subarrays admitted](https://en.m.wikipedia.org/wiki/Maximum_subarray_problem#Empty_subarrays_admitted)). В этом случае для массива с отрицательными значениями возвращается 0.

#### Сложность алгоритма

`O(n) / O(1)`

#### Описание алгоритма на Wikipedia

https://en.m.wikipedia.org/wiki/Maximum_subarray_problem

#### Codewars kata

https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

### TODO

Реализовать вариацию алгоритма Кадане для многомерных массивов от Тадао Такаоки

https://www.sciencedirect.com/science/article/pii/S1571066104003135

https://link.springer.com/chapter/10.1007/978-3-540-74456-6_40
