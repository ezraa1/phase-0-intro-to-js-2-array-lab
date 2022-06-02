// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];
cats;
const destructivelyAppendCat = name => cats.push(name);
const destructivelyPrependCat = name => cats.unshift(name);
const destructivelyRemoveFirstCat = () => cats.shift();
const destructivelyRemoveLastCat = () => cats.pop();
const appendCat = name => [...cats, name];
const prependCat = name => [name, ...cats];
const removeLastCat = () => cats.slice(0, -1);
const removeFirstCat = () => cats.slice(1, cats.length);
 
 
 

  
  