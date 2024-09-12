class Stack{//Class personaje
    constructor(){
        this.items = [];//Caracteristicas
    }
    //Agregar habilidades
    push(element){//Agrega elementos
        this.items.push(element);
    }
    pop(){//Elimina elementos
        if(this.isEmpty){
            return "La pils está vacia"
        }  
        return this.items.pop();
    }
    peek(){//Mostrar el ultimo elemento
        if(this.isEmpty()){
            return "La pila esta vacia"
        }
        return this.items[this.items.length - 1];
    }
    isEmpty(){//Verificamos si la pila esta vacia
        return this.items.length === 0;
    }
    size(){//Numero de elementos en la pila
        return this.items.length;
    }
    print(){//Mostras elementos dela pila
        console.log(this.items);   
    }
}

const animales = new Stack();

/*
Pablo jugo eyer en el patio, el tiene 9 años
*/

//Creando clase colas
class Queue{
    constructor(){
        this.items = []
    }
    //Añadir elemento
    agregar(elemento){
        this.items.push(elemento);
    }
    //Elimina el primer elemento
    eliminar(){
        if(this.isEmpty()){
            return "La cola esta vacia"
        }
        return this.items.shift();
    }
    //Mostrar primer elemento
    front(){
        if(this.isEmpty()){
            return "La cola esta vacia";
    
        }
        return this.items[0];
    }
    //Verificar si la cola esta vacia
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    print(){
        console.log(this.items);
    }
}

const paises = new Queue();

//Creando árbol
class treeNode{
    constructor(nodo){
        this.node = nodo;
        this.descendientes = [];
    }
}

const a = new treeNode(1000000);
const b = new treeNode(95);
const c = new treeNode(100);
const d = new treeNode(46);
const e = new treeNode(1043);

/*const matriz = [ 
    [1,2,3],
    [4,5,6],
    [7,8,9]
];*/

const matriz = [
    ["Ana","Luz"],
    ["Mario","Erick"]
];