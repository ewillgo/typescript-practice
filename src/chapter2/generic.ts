class Animal {

}

class Cat extends Animal {

}

class Dog extends Animal {

}

function getEntities<T>(callback: (list: T[]) => void): void {
  // callback();
}

getEntities<Cat>((cat: Cat[]) => {
  console.log(cat);
});
