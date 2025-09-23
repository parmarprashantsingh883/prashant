const car = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2024,
  engine: {
    type: "Diesel",
    capacity: "2.8L",
    horsepower: 201,
    transmission: {
      type: "Automatic",
      gears: 6
    }
  },
  features: {
    safety: {
      airbags: 6,
      abs: true,
      tractionControl: true
    },
    comfort: {
      seats: "Leather",
      ac: "Dual-zone",
      sunroof: true
    }
  },
  owners: [
    {
      name: "Rajesh Kumar",
      since: 2024,
      location: { city: "Delhi", country: "India" }
    },
    {
      name: "Aman Verma",
      since: 2025,
      location: { city: "Mumbai", country: "India" }
    }
  ]
};
console.log(car.owners[0].location.city);


