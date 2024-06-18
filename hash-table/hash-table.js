export class HashTable {
  store = [];

  // Собираем уникальное числовое значение для ключа,
  // суммируя код для каждого символа переданной строки.
  // Например, для 'foo': 'f' (102) + 'o' (111) + 'o' (111) = 324
  hash(key) {
    let sum = 0;

    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }

    return sum;
  }

  add(key, value) {
    // Определяем место в массиве, где индекс = хэш
    // для 'foo': this.store[324] || []
    // Итоговый this.store = [<324 empty items>, []];
    this.store[this.hash(key)] = this.store[this.hash(key)] || [];

    // Добавляем в конец массива по индексу 324 объект
    // Итоговый this.store = [<324 empty items>, [{ key: 'foo', value: 42 }]];
    this.store[this.hash(key)].push({ key, value });
  }

  get(key) {
    // 1. Получаем хэш ключа this.hash(key)
    // 2. Обращаемся к элементу store с этим индексом и получаем массив объектов.
    //    this.store[this.hash('foo')] = this.store[324] = [{ key: 'foo', value: 42 }]
    // 3. Среди объектов находим тот, у которого key = строке и возвращаем value
    return this.store[this.hash(key)].find(item => item.key === key).value;
  }
}
