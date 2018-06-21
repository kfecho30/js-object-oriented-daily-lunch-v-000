// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;
let customerId = 0;
let mealId = 0;
let deliveryId = 0;


class Neighborhood {
  constructor(name){
    this.name = name;
    this.id = ++neighborhoodId;
    store.neighborhoods.push(this);
  }
  deliveries(){}
  customers(){}
  meals(){}
}

class Customer {
  constructor(name, neighborhoodId){
    this.name = name;
    this.id = ++customerId;
    this.neighborhoodId = neighborhoodId;
    store.customers.push(this);
  }
}

class Meal {
  constructor(title, price){
    this.title = title;
    this.price = price;
    this.id = ++mealId;
    store.meals.push(this);
  }
}

class Delivery {
  constructor(mealId, neighborhoodId, customerId){
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    this.id = ++deliveryId;
    store.deliveries.push(this);
  }
  meal(){
    return store.meals.find(meal =>{
      return meal.id === this.mealId;
    })
  }
  customer(){
    return store.customers.find(customer =>{
      return customer.id === this.customerId;
    })
  }
  neighborhood(){
    return store.neighborhoods.find(neighborhood =>{
      return neighborhood.id === this.neighborhoodId;
    })
  }
}
