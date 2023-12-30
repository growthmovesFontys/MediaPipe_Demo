export class BodyPartToRead {

    //variables
    private name : string;
    private bodyLandmarks : number[];

    //ctor
    constructor(name : string, bodyLandmarks : number[]) {        
        this.name = name;
        this.bodyLandmarks = bodyLandmarks;
    }

    public getName = () => {
        return this.name;
    }

    public getbodyLandmarks =  (): number[] => {
        return this.bodyLandmarks;
    }
   
    //end
}
