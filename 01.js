

const car ={
    name:"scorpio",
    model:"zen1",
    year:2010
};

function propertiesCar (car){
    for(const cars in car)
    
        console.log(`${cars}:${car[cars]} `);
    
}

propertiesCar(car);

