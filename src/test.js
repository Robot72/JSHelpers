function checkNumber(value) {
    return typeof value === 'number';
}

function typeCheck(f, check) {



}


var user = {
    name: 'Alexandra',
    secondname: 'Johnson',
    birthday: '11.11.1900',
};

function printProfile(first, second) {
    return 'Профиль пользователя ' + this[first] + ' ' + this[second];
}

var d = function () {
    return printProfile.apply(user, ['name', 'secondname'])
}


// вспомогательная функция для проверки на число
function checkNumber(value) {
  return typeof value == 'number';
}

// декоратор, проверяющий типы для f
// второй аргумент checks - массив с функциями для проверки
function typeCheck(f, checks) {
  return function() {
    for (var i = 0; i < arguments.length; i++) {

      if (!checks[i](arguments[i])) {
        alert( "Некорректный тип аргумента номер " + i );
        return;
      }
    }
    return f.apply(this, arguments);
  }
}

function sum(a, b) {
  return a + b;
}

// обернём декоратор для проверки
sum = typeCheck(sum, [checkNumber, checkNumber]); // оба аргумента - числа