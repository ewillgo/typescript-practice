@logClass
class Person {

  public name: string;
  public surname: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  public saySomething(something: string): string {
    return this.name + " " + this.surname + " says: " + something;
  }
}

function logClass(target: any) {

}
