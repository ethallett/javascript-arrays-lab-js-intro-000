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
  return(newKitten.concat(kittens))
}

function removeLastKitten(){
  var newKittens = kittens.slice(0,1);
  return(newKittens)
}

function removeFirstKitten(){
  kittens = kittens.slice();
  return(kittens)
}
