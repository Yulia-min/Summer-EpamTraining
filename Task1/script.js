class Entity{
    constructor(name){
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class Box extends Entity {

    constructor(name, staff){
        super(name);
        this.staff = staff || [];
    }

    getName(){
        const name = super.getName()
        if(name.length < 3){
            return 'You need more letters ';
        }
        return name;
    }
}

class Staff extends Entity{
    constructor(name){
        super(name);
    }

    getName() {
        return this.name;
    }

    nameIncludes(str){
        return this.getName().indexOf(str);
    }
}

class User extends Entity{

    constructor(name, box){
        super(name);
        this.box = box || [];
    }

    getName(){
        const name = super.getName()
        if(name == ''){
            return 'Say something '
        }
        return name;
    }
}

const boxes = new Box('A', [new Staff('123'), new Staff('567')]);
console.log(boxes);
const staffs = new Staff('Hello');
console.log(staffs);
const users = new User('',[boxes, new Box('345')]);
console.log(users);


 