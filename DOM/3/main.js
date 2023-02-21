var arr = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let turn = false
let ganador=false
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
function winner() {
    
if (arr[0][0]=='x'&&arr[0][1]=='x'&& arr[0][2]=='x') {
    console.log('gano x');
    ganador=true
}
if (arr[1][0]=='x'&&arr[1][1]=='x'&& arr[1][2]=='x') {
    console.log('gano x');
    ganador=true
}
if (arr[2][0]=='x'&&arr[2][1]=='x'&& arr[2][2]=='x') {
    console.log('gano x');
    ganador=true
}
if (arr[0][0]=='x'&&arr[1][0]=='x'&& arr[2][0]=='x') {
    console.log('gano x');
    ganador=true
}
if (arr[0][1]=='x'&&arr[1][1]=='x'&& arr[2][1]=='x') {
    console.log('gano x');
    ganador=true
}
if (arr[0][2]=='x'&&arr[1][2]=='x'&& arr[2][2]=='x') {
    console.log('gano x');
    ganador=true
}
if (arr[0][0]=='x'&&arr[1][1]=='x'&& arr[2][2]=='x') {
    console.log('gano x');
    ganador=true
}
if (arr[2][0]=='x'&&arr[1][1]=='x'&& arr[0][2]=='x') {
    console.log('gano x');
    ganador=true
}


if (arr[0][0]=='o'&&arr[0][1]=='o'&& arr[0][2]=='o') {
    console.log('gano o');
    ganador=true
}
if (arr[1][0]=='o'&&arr[1][1]=='o'&& arr[1][2]=='o') {
    console.log('gano o');
    ganador=true
}
if (arr[2][0]=='o'&&arr[2][1]=='o'&& arr[2][2]=='o') {
    console.log('gano o');
    ganador=true
}
if (arr[0][0]=='o'&&arr[1][0]=='o'&& arr[2][0]=='o') {
    console.log('gano o');
    ganador=true
}
if (arr[0][1]=='o'&&arr[1][1]=='o'&& arr[2][1]=='o') {
    console.log('gano o');
    ganador=true
}
if (arr[0][2]=='o'&&arr[1][2]=='o'&& arr[2][2]=='o') {
    console.log('gano o');
    ganador=true
}
if (arr[0][0]=='o'&&arr[1][1]=='o'&& arr[2][2]=='o') {
    console.log('gano o');
    ganador=true
}
if (arr[2][0]=='o'&&arr[1][1]=='o'&& arr[0][2]=='o') {
    console.log('gano o');
    ganador=true
}
}
$el1.addEventListener('click', function () {
   winner(ganador) 
    if (arr[0][0] === "" ||ganador==false) {
        if (turn === false) {
            $el1.innerHTML = '<h1>X</h1>'
            arr[0][0] = 'x'
            turn = true
        } else {
            $el1.innerHTML = '<h1>O</h1>'
            arr[0][0] = 'o'
            turn = false
        }
    }
    
})
$el2.addEventListener('click', function () {
    
    if (arr[0][1] === "" ||ganador===false) {
        if (turn === false) {
            $el2.innerHTML = '<h1>X</h1>'
            arr[0][1] = 'x'
            turn = true
        } else {
            $el2.innerHTML = '<h1>O</h1>'
            arr[0][1] = 'o'
            turn = false
        }
    }
    winner(ganador)
})
$el3.addEventListener('click', function () {
    
    if (arr[0][2] === "" ||ganador===false) {
        if (turn === false) {
            $el3.innerHTML = '<h1>X</h1>'
            arr[0][2] = 'x'
            turn = true
        } else {
            $el3.innerHTML = '<h1>O</h1>'
            arr[0][2] = 'o'
            turn = false
        }
    }
    winner(ganador)
})
$el4.addEventListener('click', function () {
    
    if (arr[1][0] === "" ||ganador===false) {
        if (turn === false) {
            $el4.innerHTML = '<h1>X</h1>'
            arr[1][0] = 'x'
            turn = true
        } else {
            $el4.innerHTML = '<h1>O</h1>'
            arr[1][0] = 'o'
            turn = false
        }
    }
    winner(ganador)
})
$el5.addEventListener('click', function () {
    
    if (arr[1][1] === "" ||ganador===false) {
        if (turn === false) {
            $el5.innerHTML = '<h1>X</h1>'
            arr[1][1] = 'x'
            turn = true
        } else {
            $el5.innerHTML = '<h1>O</h1>'
            arr[1][1] = 'o'
            turn = false
        }
    }
    winner(ganador)
})
$el6.addEventListener('click', function () {
    
    if (arr[1][2] === "" ||ganador===false) {
        if (turn === false) {
            $el6.innerHTML = '<h1>X</h1>'
            arr[1][2] = 'x'
            turn = true
        } else {
            $el6.innerHTML = '<h1>O</h1>'
            arr[1][2] = 'o'
            turn = false
        }
    }
    winner(ganador)
})
$el7.addEventListener('click', function () {
    
    if (arr[2][0] === "" ||ganador===false) {
        if (turn === false) {
            $el7.innerHTML = '<h1>X</h1>'
            arr[2][0] = 'x'
            turn = true
        } else {
            $el7.innerHTML = '<h1>O</h1>'
            arr[2][0] = 'o'
            turn = false
        }
    }
    winner(ganador)
})
$el8.addEventListener('click', function () {
    
    if (arr[2][1] === "" ||ganador===false) {
        if (turn === false) {
            $el8.innerHTML = '<h1>X</h1>'
            arr[2][1] = 'x'
            turn = true
        } else {
            $el8.innerHTML = '<h1>O</h1>'
            arr[2][1] = 'o'
            turn = false
        }
    }
    winner(ganador)
})
$el9.addEventListener('click', function () {
    
    if (arr[2][2] === "" ||ganador===false) {
        if (turn === false) {
            $el9.innerHTML = '<h1>X</h1>'
            arr[2][2] = 'x'
            turn = true
        } else {
            $el9.innerHTML = '<h1>O</h1>'
            arr[2][2] = 'o'
            turn = false
        }
    }
    winner(ganador)

})
btn.addEventListener('click', function (p) {
    console.log(arr);
})

if (arr[0][0] != "" && arr[0][0] == false) {
    console.log('hola');
}