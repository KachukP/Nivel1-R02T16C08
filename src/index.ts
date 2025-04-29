import products from "./products.json";

class Product {
  constructor(name:string,price:number) {
    this.name=name;
    this.price=price;
  };
  id:number;
  name:string;
  price:number;
  static findProductsBelow(param1:number){
    const list=products.filter((P)=>{
        return (P.price<param1);
    });
    return list;
  };
};

class User {
  constructor(name:string) {
    this.name=name;
  };
  name:string;
  products:Product[]=[];
  addProduct(newProduct:Product) {
    this.products.push(newProduct);
  };
  addProducts(paraNuePro2:Product[]) {
    this.products=this.products.concat(paraNuePro2);
  };
};

export {User,Product};