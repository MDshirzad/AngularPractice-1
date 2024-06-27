export class User {
    /**
     *
     */
    constructor(public name:string,public familyName:string,public age:number) {
       
        
    }
    
    clear(){
    this.name=''
    this.familyName=''
    this.age=0
    }

}
