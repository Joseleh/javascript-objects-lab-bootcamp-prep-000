var recipes = {egg: 3,};
function updateObjectWithKeyAndValue(object,key,value){
 var newRecipes = Object.assign({},object,{[key]: value});
 console.log(newRecipes);
 
 return newRecipes;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
 var nObject = Object.assign({},object);
 console.log(nObject);
delete nObject['key'];
return Object;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  var Object['key'] = value;
  delete Object['key'];
  return Object;
}