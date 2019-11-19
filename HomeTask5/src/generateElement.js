export function generateElement(type,name){
    let temp = document.createElement(type);
    temp.name = name;
    temp.className = name;
    temp.id = name;
    return temp;
}