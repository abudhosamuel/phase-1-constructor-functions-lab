// Scooter Constructor
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
  
  // Driver Constructor
  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  
  // PickupLocation Constructor
  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
  }
  
  // Example Usage
  
  // Creating a new Scooter instance
  let myScooter = new Scooter(2021, "red", "Vespa");
  console.log(myScooter); 
  // Output: Scooter { year: 2021, color: 'red', model: 'Vespa' }
  
  // Creating a new Driver instance
  let myDriver = new Driver("Alice", 30, "5 years");
  console.log(myDriver);
  // Output: Driver { name: 'Alice', age: 30, experience: '5 years' }
  
  // Creating a new PickupLocation instance
  let myPickupLocation = new PickupLocation("123 Main St", "New York");
  console.log(myPickupLocation);
  // Output: PickupLocation { address: '123 Main St', city: 'New York' }
  