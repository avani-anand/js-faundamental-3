// function checkingProperty(obj,propertyname){

//     // return Object.hasown(obj,"name");
//     return Object.hasownProperty(propertyname);
     
// }


// const obje={age:13,roll:1233, name:"avni",year:"2023"};

// console.log(checkingProperty(obje,"name"));



function pro(obj,propertyname)
{
    return Object.hasownProperty(propertyname);
}

const exam={name:"avni",age:25};

console.log(pro(exam,"age"));