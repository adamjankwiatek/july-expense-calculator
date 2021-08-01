document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#rem').addEventListener('click', clear)

let string = document.querySelector('h2')
let stringConstructor = ''

function one(){
  stringConstructor += '1'
  string.innerText = stringConstructor
}

function two(){
  stringConstructor += '2'
  string.innerText = stringConstructor
}

function three(){
  stringConstructor += '3'
  string.innerText = stringConstructor
}

function four(){
  stringConstructor += '4'
  string.innerText = stringConstructor
}

function clear(){
  let arr = stringConstructor.split('')
  arr.pop()
  arr.join('')
  stringConstructor += arr
}
