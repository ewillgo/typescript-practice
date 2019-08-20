class Character {

  fullname: string;

  constructor(firstname: string, lastname: string) {
    this.fullname = firstname + " " + lastname;
  }

  greet(name?: string): string {
    return name ? "Hi, " + name + "! my name is " + this.fullname : "Hi, my name is " + this.fullname;
  }

}

let spark = new Character("Will", "Chen");
console.log(spark.greet());
console.log(spark.greet("Tom"));
