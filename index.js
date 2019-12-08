var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return(kittens)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return(kittens)

}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return(kittens)

}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return(kittens)
}

function appendKitten(name){
  var newKitten = [name]
  return(kittens.concat(newKitten))
}

function prependKitten(name){
  var newKitten = [name]
  return(kittens.slice(newKitten))
}

function removeLastKitten(){
  kittens = kittens.slice();
  return(kittens)
}

function removeFirstKitten(){
  kittens = kittens.slice();
  return(kittens)
}
