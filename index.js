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
  kittens = kittens.concat(name);
  return(kittens)
}

function prependKitten(name){
 kittens = kittens.concat(name);
 return(kittens)
}

function removeLastKitten(){
  kittens = kittens.slice(2,1);
  return(kittens)
}

function removeFirstKitten(){
  kittens = kittens.slice(0,1);
  return(kittens)
}
