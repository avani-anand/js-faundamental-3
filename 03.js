function countPropeties(obj)
{
    return Object.keys(obj).length;
}

const objectExample={2:"w",3:"tr",4:"fgsdg",5:"ergrg"}
console.log(countPropeties(objectExample));

// output  - 4