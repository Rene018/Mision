var arr = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let turn = false
function vTurn(a1, a2) {
    if (a1 === false) {
        a.innerHTML = '<h1>X</h1>'
        a1 = true
    } else {
        a2.innerHTML = '<h1>O</h1>'
        a1 = false
    }
}
const $el1 = document.querySelector('#el1')
const $el2 = document.querySelector('#el2')
const $el3 = document.querySelector('#el3')
const $el4 = document.querySelector('#el4')
const $el5 = document.querySelector('#el5')
const $el6 = document.querySelector('#el6')
const $el7 = document.querySelector('#el7')
const $el8 = document.querySelector('#el8')
const $el9 = document.querySelector('#el9')
const btn = document.querySelector('#winner')

$el1.addEventListener('click', function () {
    if (arr[0][0] === "") {
        if (turn === false) {
            $el1.innerHTML = '<h1>X</h1>'
            arr[0][0] = turn
            turn = true


        } else {
            $el1.innerHTML = '<h1>O</h1>'
            arr[0][0] = turn
            turn = false
        }
    }
})
$el2.addEventListener('click', function () {
    if (arr[0][1] === "") {
        if (turn === false) {
            $el2.innerHTML = '<h1>X</h1>'
            arr[0][1] = turn
            turn = true
        } else {
            $el2.innerHTML = '<h1>O</h1>'
            arr[0][1] = turn
            turn = false
        }
    }
})
$el3.addEventListener('click', function () {
    if (arr[0][2] === "") {
        if (turn === false) {
            $el3.innerHTML = '<h1>X</h1>'
            arr[0][2] = turn
            turn = true
        } else {
            $el3.innerHTML = '<h1>O</h1>'
            arr[0][2] = turn
            turn = false
        }
    }
})
$el4.addEventListener('click', function () {
    if (arr[1][0] === "") {
        if (turn === false) {
            $el4.innerHTML = '<h1>X</h1>'
            arr[1][0] = turn
            turn = true
        } else {
            $el4.innerHTML = '<h1>O</h1>'
            arr[1][0] = turn
            turn = false
        }
    }
})
$el5.addEventListener('click', function () {
    if (arr[1][1] === "") {
        if (turn === false) {
            $el5.innerHTML = '<h1>X</h1>'
            arr[1][1] = turn
            turn = true
        } else {
            $el5.innerHTML = '<h1>O</h1>'
            arr[1][1] = turn
            turn = false
        }
    }
})
$el6.addEventListener('click', function () {
    if (arr[1][2] === "") {
        if (turn === false) {
            $el6.innerHTML = '<h1>X</h1>'
            arr[1][2] = turn
            turn = true
        } else {
            $el6.innerHTML = '<h1>O</h1>'
            arr[1][2] = turn
            turn = false
        }
    }
})
$el7.addEventListener('click', function () {
    if (arr[2][0] === "") {
        if (turn === false) {
            $el7.innerHTML = '<h1>X</h1>'
            arr[2][0] = turn
            turn = true
        } else {
            $el7.innerHTML = '<h1>O</h1>'
            arr[2][0] = turn
            turn = false
        }
    }
})
$el8.addEventListener('click', function () {
    if (arr[2][1] === "") {
        if (turn === false) {
            $el8.innerHTML = '<h1>X</h1>'
            arr[2][1] = turn
            turn = true
        } else {
            $el8.innerHTML = '<h1>O</h1>'
            arr[2][1] = turn
            turn = false
        }
    }
})
$el9.addEventListener('click', function () {
    if (arr[2][2] === "") {
        if (turn === false) {
            $el9.innerHTML = '<h1>X</h1>'
            arr[2][2] = turn
            turn = true
        } else {
            $el9.innerHTML = '<h1>O</h1>'
            arr[2][2] = turn
            turn = false
        }
    }

})
btn.addEventListener('click',function (p) {
    console.log(arr);
})

if(arr[0][0]!="" && arr[0][0]==false){
    console.log('hola');
}