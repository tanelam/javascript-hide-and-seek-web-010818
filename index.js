function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div#nested div div div div.target')
}

function increaseRankBy(n){
  let mas = document.getElementById('app').querySelectorAll('ul.ranked-list li')
    for (let i = 0; i < mas.length; i++){
    mas[i].innerHTML = parseInt(mas[i].innerHTML) + n
  }

}

function deepestChild(){
  return document.getElementById('app').querySelector('div#grand-node div div div div')
}
