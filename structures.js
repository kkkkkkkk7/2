//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  return str.replace(/(^|\s)\S/g, function(str) {return str.toUpperCase()})
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {}

//Определите, пуст ли объект
function isEmpty(obj) {
	  for (let key in obj)  {
      return false;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
	 for (var n in obj) {
        if (isNumeric(obj[n])) {
            obj[n] *= 2;
		}
	}
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
const arr = [1, 2, 3, 4];
const x = 0;
const y = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue, x);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
	  pal = '';
  for (i = str.length - 1; i >= 0; --i) {
    pal += str[i];
  }
  return str == pal;
}