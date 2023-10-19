class Users {
  name;
  city;
  emailid;

  display() {
    console.log(this.name, this.city, this.emailid);
  }

  changeCity(city) {
    this.city = city;
    this.display();
  }
}

var user1 = new Users(); //constructor: It is special method in the JS class

var user2 = new Users();

user1.name = "Sagar";
user1.city = "Delhi";
user1.emailid = "Sagar@gmail.com";

user1.display();

user2.name = "Sneha";
user2.city = "Mumbai";
user2.emailid = "Sneha@gmail.com";

user2.display();
