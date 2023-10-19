class Product {
  brandName;
  productName;
  price;
  rating;

  constructor(brandname, pname, price, rating) {
    this.brandName = brandname;
    this.productName = pname;
    this.price = price;
    this.rating = rating;
  }

  display() {
    console.log(this.brandName, this.productName, this.price, this.rating);
  }

  changePrice(price) {
    this.price = price;
  }
}

var p1 = new Product("Apple", "Iphone 15", 180000, 4.4);

var p2 = new Product("Samsung", "Galaxy ultra s23", 130000, 4.8);

p1.display();

p2.display();

p2.changePrice(150000);
p2.display();
