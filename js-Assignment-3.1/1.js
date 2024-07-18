const car = {
  make: "Bugatti",
  model: "Bugatti Veyron Eb 16.4",
  year: 2023,
};
function makingCar(car) {
  for (let i in car) {
    console.log(i, car[i]);
  }
}
makingCar(car);
