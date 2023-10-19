class Users {
  name;
  city;
  emailid;

  //   constructor(){}

  //   constructor() {
  //     this.name = "Kabir";
  //     this.city = "Pune";
  //     this.emailid = "Kabir@gmail.com";
  //   }

  constructor(name, city, email) {
    this.name = name;
    this.city = city;
    this.emailid = email;
  }

  display() {
    console.log(this.name, this.city, this.emailid);
  }

  changeCity(city) {
    this.city = city;
    this.display();
  }
}

var user1 = new Users("Riya", "Banglore", "riya@gmail.com"); //constructor: It is special method in the JS class

var user2 = new Users("Jiya", "Amritsar", "ziya@gmail.com");

user1.display();

user2.display();

user1.changeCity("Hyderabad");
