function sort(array){
  for(element in array) { bubble(array) }
  return array
}

function bubble(array, index=0){
  swapPlaces(array, index)
  if(index < array.length) { bubble(array, index + 1) }
}

function swapPlaces(array, index){
  let currentElement = array[index]
  let nextElement = array[index + 1]
  if(currentElement > nextElement){
    array.splice(index, 2, nextElement, currentElement)
  }
}

module.exports = sort
