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
  kittens = kittens.append(name);
  return(kittens)
}

function prependKitten(name){
 kittens = kittens.prepend(name);
 return(kittens)
}

function removeLastKitten(){
  kittens = kittens.slice(0,2);
  return(kittens)
}

function removeFirstKitten(){
  kittens = kittens.slice(0,0);
  return(kittens)
}
