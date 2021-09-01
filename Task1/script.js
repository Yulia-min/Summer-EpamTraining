class Entity{
    constructor(name){
        this.name = name;
    }
    getName() {
        return this.name
    }
}

class Box extends Entity {
    staff = [];

    constructor(name, staff){
        super(name)
        this.staff = staff;
    }

    getName(){
        const name = super.getName()
        if(name.length < 3){
            return 'You need more letters '
        }
        return name
    }
}

class Staff extends Entity{
    constructor(name){
        super(name)
    }

    getName() {
        return this.name
    }

    nameIncludes(str){
        return this.getName().indexOf(str)
    }
}

class User extends Entity{
    box = [];
    constructor(name, box){
        super(name)
        this.box = box;
    }

    getName(){
        const name = super.getName()
        if(name == ''){
            return 'Say something '
        }
        return name
    }
}

const boxes = new Box('A ', [20,'years']);
console.log(boxes.getName() + boxes.staff)
const staffs = new Staff('Hello');
console.log(staffs.nameIncludes("Hello"))
const users = new User('',['Yulia', 'Klepitskaya']);
console.log(users.getName() + users.box)

  

 