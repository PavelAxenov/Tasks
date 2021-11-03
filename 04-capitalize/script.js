/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    return str.replace(/(^|\s)\S/g, function(a) {
        return a.toUpperCase()
    });    
};
// Взять все символы без пробелов (\ S), стоящие в начале строки (^)
// или после любого символа пробела (\ s)
// и преобразовать их в верхний регистр (toUpperCase)


// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"

// Код почему-то не работает ↓↓

    // const words = str.split(" ");
    // for (let i = 0; i < words.length; i++) {
    //     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    // }
    // words.join(" ");
    //console.log(arrayWords);




