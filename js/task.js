

// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите ‘Верно’, в противном случае выведите ‘Неверно’.
// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение ‘1’, то в переменную result запишем ‘зима’, если имеет значение ‘2’ – ‘весна’ и так далее. Решите задачу через switch-case.
let a = +prompt('a');

// 1
let task1 = (a === 0) ? 'Верно' : 'Неверно';
console.log(task1)

// 2
let task2 = (a > 0) ? 'Верно' : 'Неверно';
console.log(task2)

// 3
let task3 = (a < 0) ? 'Верно' : 'Неверно';
console.log(task3)

// 4
let task4 = (a >= 0) ? 'Верно' : 'Неверно';
console.log(task4)

// 5
let task5 = (a <= 0) ? 'Верно' : 'Неверно';
console.log(task5)

// 6
let task6 = (a !== 0) ? 'Верно' : 'Неверно';
console.log(task6)

// 7
let task7 = (a == 'test') ? 'Верно' : 'Неверно';
console.log(task7)

// 8
let task8 = (a === '1') ? 'Верно' : 'Неверно';
console.log(task8)

// 9
let task9 = (a > 0 && a < 5) ? 'Верно' : 'Неверно';
console.log(task9)

// 10
if (a === 0 || a === 7) {
    console.log(a + 7 );
}
else{
    console.log(a / 10)
}

// 11
let b = +prompt('b')
if (a <= 1 && b >= 3){
    console.log(a + b);
}
else{
    console.log(a - b)
}

// 12
let task11 = (a>2<11 || b>=6<14 ) ? 'Верно' : 'Неверно';
console.log(task11)

// 13
let num = +prompt('Enter 1, 2, 3 or 4')
switch (num) {
    case 1:
        console.log('Зима')
        break;
    case 2:
        console.log('Весна')
        break;
    case 3:
        console.log('Лето')
        break;
    case 4:
        console.log('Осень')
        break;
    default:
        console.log('Incorrect number')
}






