class List {
    constructor(){
        this.size = 0;
        this.myList = [];
    }

    add(element){
        this.myList.push(element);
        this.myList.sort((a, b) => a -b)
        this.size = this.myList.length;
    }
    remove(index){
        if(index < 0 || index > this.size){
            throw new Error("Invalid index")
        }
        this.myList.splice(index, 1);
        this.myList.sort((a, b) => a -b)
        this.size = this.myList.length;
    }
    get(index){
        return this.myList[index];
    }
}
let list = new List();
list.add(5);
list.add(7);
list.add(6);
list.remove(-13);
console.log(list.get(1));
console.log(list.size);
