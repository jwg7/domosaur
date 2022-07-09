let messWithMe = document.querySelector('.mess-with-me');
messWithMe.style.fontSize = '40px';
messWithMe.style.backgroundColor = 'green'


let hideMe = document.querySelector('#hide-me')
hideMe.style.display = 'none'


let firstImg = document.querySelector('#triceratops');
firstImg.style.width = '324px'

messWithMe.addEventListener('click', function(){
    messWithMe.style.color = 'orange'
})

firstImg.addEventListener('click', function(){
    firstImg.style.border = '5px solid red'
})

let feathers = document.querySelector('#feathers')

feathers.addEventListener('click', function(){
    feathers.style.opacity = '.5'
})

let toggle = document.querySelector('#toggle');
let row = document.querySelector('#row');

toggle.addEventListener('click', function(){
    row.style.backgroundColor = 'blue'
})

let biggify = document.querySelector('#biggify');

biggify.addEventListener('mouseenter', function(){
    biggify.style.width = '200px'
    console.log('mouseenter')
})

biggify.addEventListener('mouseleave', function(){
    biggify.style.width = '162px'
})