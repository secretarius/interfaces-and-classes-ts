type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // intersection type

const e1: ElevatedEmployee = {
    name: 'Alex',
    privileges: ['create-server'],
    startDate: new Date()
}


type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//function overloads
function addValue(a: number, b: number): number;
function addValue(a: string, b: string): string;
function addValue(a: string, b: number): string;
function addValue(a: number, b: string): string;

function addValue(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') { //type guards
        return a.toString() + b.toString()
    }
    return a + b;
}

const result = addValue('Alex', 'M')
result.split(' ')


type UnnownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnnownEmployee){
    console.log('Name: ' + emp.name);
    if('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation({name: 'Olha', startDate: new Date()});

class Car {
    drive() {
        console.log('Driving...');    
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');    
    }
    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount );
        
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    // if('loadCargo' in vehicle) {
    //     vehicle.loadCargo(1000);
    // }
    if(vehicle instanceof Truck)  {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

//Descriminated Unions
interface Bird {
    type: 'bird',
    flyingSpeed: number;
}

interface Horse  {
    type: 'horse',
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
            case 'horse': 
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10})
moveAnimal({type: 'horse', runningSpeed: 50})

//Type casting
//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
// userInputElement.value = 'Hi there!';
const userInputElement = document.getElementById('user-input');

if(userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!';
}