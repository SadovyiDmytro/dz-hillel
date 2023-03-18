/**
 * OPTIONS
 */
class Hamburger {
  static SIZE_SMALL = {
    price: 50,
    calories: 20,
  };
  static SIZE_LARGE = {
    price: 100,
    calories: 40,
  };
  static STUFFING_CHEESE = {
    price: 10,
    calories: 20,
  };
  static STUFFING_SALAD = {
    price: 20,
    calories: 5,
  };
  static STUFFING_POTATO = {
    price: 15,
    calories: 10,
  };
  static TOPPING_SPICE = {
    price: 15,
    calories: 0,
  };
  static TOPPING_MAYO = {
    price: 20,
    calories: 5,
  };
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
  calculatePrice() {
    const { price: sizePrice } = this.size;
    const { price: stuffingPrice } = this.stuffing;
    const toppingsPrice = this.toppings.reduce((x, { price }) => x + price, 0);

    return sizePrice + stuffingPrice + toppingsPrice;
  }
  calculateCalories() {
    const { calories: sizeCalories } = this.size;
    const { calories: stuffingCalories } = this.stuffing;
    const toppingsCalories = this.toppings.reduce((x, { calories }) => x + calories,0);
    
    return sizeCalories + stuffingCalories + toppingsCalories;
  }
}


/**
 * REAULT
 */
// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculateCalories());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());
