//Решение

function lastNonEmptyString(str) {   
    // Блок на условия(только маленькие буквы английского алфавита), если не подходит выводим консоль с ошибкой и закрываем функцию //
    if (!/^[a-z]+$/.test(str)) {
        console.log('Не подходит по условию');
        return;
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Блок подсчета букв //
    //1. Создаем пустой объект для хранения колличества букв
    //2. Циклом проходимся по сторке
    //3. Смотрим, если нет ключа-буквы в объекте charCount, то добавляем ключ в виде буквы и присваиваем значение 0, если уже есть такой ключ , то к значению + 1
    //4. Находим максимальное значение среди ключей
    //5. Находим ключи-буквы с максимальным значением
    //6. Условие если у нас повторяющаяся ключ-буква с максимальным значением только одна, мы ее выводим , чтобы не проваливаться дальше по функции

    //1
    const charCount = {};
    //2
    for (let char of str) {
        //3
        charCount[char] = (charCount[char] || 0) + 1;
    }
    //4
    const maxCount = Math.max(...Object.values(charCount));
    //5
    const maxChars = Object.keys(charCount).filter(char => charCount[char] === maxCount);
    //6
    if(maxChars.length === 1) {
        console.log('Ответ если одна буква:', maxChars[0]);
        return;
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Блок порядка вхождения букв //
    //1. Создаем пустой массив для порядка букв
    //2. Проходимся циклом по строке начиная с конца, это нужно для того чтобы найти последнее вхождение буквы
    //3. Условие, maxChars.includes(str[i]) - это проверяет есть ли символ который сейчас проходит итерацию в массиве буквы с максимальным вхождение,
    // !lastOrder.includes(str[i]) - проверка чтобы не повторялись символы в массиве lastOrder
    //4. Если условие пройдены, то добавляем букву в массив lastOrder, но используя unshift, а не push, для того чтобы добавить в начало массива, для соблюдения порядка

    //1
    const lastOrder = [];
    //2
    for (let i = str.length - 1; i >= 0; i--) {
        //3
        if (maxChars.includes(str[i]) && !lastOrder.includes(str[i])) {
            //4
            lastOrder.unshift(str[i]);
        }
    }
///////////////////////////////////////////////////////////////////
    // Возвращаем результат //
    const result = lastOrder.join('');
    console.log('Ответ:', result);
    return result;
}


// тесты
lastNonEmptyString('Hello')
lastNonEmptyString('a') // a
lastNonEmptyString('zzzzzzz') // z
lastNonEmptyString('aaaaaarebebecezenezcerecdedebebadedeaaa') // 'e'
lastNonEmptyString('aabcbbca') // ba
lastNonEmptyString('youbetterpass') // tes
lastNonEmptyString('iapziorefeiofzraoarzf') // ioarzf
lastNonEmptyString('abcd') // abcd
lastNonEmptyString('dacocsowdree') // code
lastNonEmptyString('dacowefcsotewstlreactivezzucsqwlqqqyykbtrreelyphgwarveoie') // e
