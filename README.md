Дана строка "str"
Выполняйте следующую операцию, пока «str» не станет пустым:
Для каждого символа алфавита от «A» до «Z» удалите первое появление этого символа в строке (если он существует).
 
Пример:
str = "aabcbbca". Мы делаем следующие операции:
 
Удаляем выделенные символы str = «(a)a(b)(c)bbca». Результат строки str = "abbca".
Удаляем выделенные символы str = "(a)(b)b(c)a". Результат строки str = "ba".
Удаляем выделенные символы str = "(b)(a)". Результат строки str = "".
Верните значение строки str прямо перед применением последней операций. В приведенном выше примере ответ - «ba».
 
Дополнительно:
строка не может быть пустой
строка содержит только английские быквы в нижнем регистре
 
function lastNonEmptyString(str) {
  
}
 
тесты
console.log(lastNonEmptyString('a')) // a
console.log(lastNonEmptyString('zzzzzzz')) // z
console.log(lastNonEmptyString('aaaaaarebebecezenezcerecdedebebadedeaaa')) // 'e'
console.log(lastNonEmptyString('aabcbbca')) // ba
console.log(lastNonEmptyString('youbetterpass')) // tes
console.log(lastNonEmptyString('iapziorefeiofzraoarzf')) // ioarzf

