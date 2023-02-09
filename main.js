// Task 1

// 1)Создайте класс Plane со свойствами name и isFlying (по-умолчанию false) и методами takeOff() и land(). Метод takeOff() меняет значение свойства isFlying на true,
// а метод land() меняет значение свойства isFlying на false.
// Создайте объект airport со свойством planes (массив объектов класса Planes ) и методом getFlyingPlanes(), который вовзращающий количество элементов из массива planes ,
// у которых isFlying равняется true.
// Cоздайте несколько объектов на основе класса Plane и добавьте их в массив самолетов в airport. Измените любым объектам значение isFlying на true;
// Продемонстрируйте метод getFlyingPlanes() в работе.
// Изменение isFlying сделайте при помощи кнопки по нпжптию на которую будет менятся кол-во самолетов в воздухе, тоесть братся значение getFlyingPlanes

class Plane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

class Airport {
  constructor() {
    this.planes = [];
  }
  getFlyingPlanes() {
    return this.planes.filter((plane) => plane.isFlying).length;
  }
  addPlane(plane) {
    this.planes.push(plane);
  }
}

const airport = new Airport();

const plane1 = new Plane("Plane1");
const plane2 = new Plane("Plane2");
const plane3 = new Plane("Plane3");

airport.addPlane(plane1);
airport.addPlane(plane2);
airport.addPlane(plane3);

plane2.takeOff();

// console.log(airport.getFlyingPlanes());

document.querySelector("button").addEventListener("click", function () {
    const span = document.querySelector('span');
  const flyingPlanes = airport.getFlyingPlanes();
  span.textContent = `Number of flying planes: ${flyingPlanes}`;
});

/*2) Реализуйте класс Student (Студент), который будет наследовать от класса User. 
Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). 
Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. 
Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). 
Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

User - имеет только имя и фамилию
Student - все остальное */

class User {
  constructor(name, surname){
    this.name = name;
    this.surname = surname
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year){
    super(name, surname);
    this.year = year;
  }

  getCourse() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year + 1;
  }
}

const student = new Student('Adndrew', 'Ori', 2019);
console.log(student.getFullName()); 
console.log(student.getCourse());