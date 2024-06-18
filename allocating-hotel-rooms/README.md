# Allocating Hotel Rooms

**Task**

Allocate customers to hotel rooms based on their arrival and departure days. Each customer wants their own room, so two customers can stay in the same room only if the departure day of the first customer is earlier than the arrival day of the second customer. The number of rooms used should be minimized.

**Input**

A list or array of n customers, `1 ≤ n ≤ 1000`. Each customer is represented by (arrival_day, departure_day), which are positive integers satisfying arrival_day ≤ departure_day.

**Output**

A list or array of size n, where element i indicates the room that customer i was allocated. Rooms are numbered `1,2, ..., k` for some `1 ≤ k ≤ n`. Any allocation that minimizes the number of rooms k is a valid solution.

**Example:**

Suppose customers is `[(1,5), (2,4), (6,8), (7,7)]`.
Clearly customers 1 and 2 cannot get the same room. Customer 3 can use the same room as either of them, because they both leave before customer 3 arrives. Then customer 4 can be given the other room.
So any of `[1,2,1,2]`, `[1,2,2,1]`, `[2,1,2,1]`, `[2,1,1,2]` is a valid solution.

NOTE: The list of customers is not necessarily ordered by arrival_time.

## Варианты решения

По сути, стоит задача поиска и последующего распределения непересекающихся множеств. Алгоритм:

1. Объявляем константу `reservedRooms`, в которой в виде массива будут храниться комнаты с расписанием въезда/выезда. На выходе должно получиться примерно так `[[[0,1], [2,3]], [[1,10]], [[1,1], [2,6]], ...]`. В начале программы массив пустой.
2. Наша задача — вернуть массив чисел, причём длина этого массива идентична длине массива постояльцев. Для этого используем метод `reduce`, чтобы не добавлять новую константу.
3. На каждом этапе цикла мы пытаемся найти индекс свободной комнаты для текущего постояльца (ТП). Для этого мы ищем индекс (`findIndex()`) комнаты, каждый (`every()`) массив с расписанием которой отвечает следующим условиям: дата прибытия > дата отбытия ТП или дата отбытия < дата прибытия ТП.
4. Если такая комната найдена, то добавляем в неё расписание текущего постояльца.
5. В reduce возвращаем цифру: индекс существующей комнаты, увеличенный на 1, либо возвращаемое значение `reservedRooms.push([customer])` (новая длина массива, или, другими словами, индекс последней комнаты).

#### Codewars kata

https://www.codewars.com/kata/6638277786032a014d3e0072
