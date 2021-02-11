const array = [
    ["Enero","Febrero","marzo","abril","mayo","junio"],
    "Martes",
    "Miercoles",
    "Jueves",
    "Sabado",
    "Domingo"
];

console.log(`posicion 0 ${array[0]}`);
console.log(`posicion 0-4 ${array[0][4]}`);

const matriz = [];
let bandera = true
let palabra = "Vacio";
for (let i = 0; i <= 10; i++) {
    let data = new Array(11).fill(palabra,0,11);
    for (let x = 0; x <= 10; x++) {
        if(i==3 && bandera){
            data = new Array(5).fill(palabra,0,6);
            data.unshift(palabra,"Barrera","Apellido",27,true,"calle 13 # 1-45");
            bandera = false;
        }
    }
    matriz[i] = data;
}
console.log(matriz); 



