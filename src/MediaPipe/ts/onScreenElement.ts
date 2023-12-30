export class OnScreenElement {

    //variables
    private onScreenElement : HTMLElement; 
    private xPosition : number[];
    private yPosition : number[];

    //ctor
    constructor(onScreenElement : HTMLElement, xPosition : number[], yPosition : number[]) {  
        this.onScreenElement = onScreenElement;      
        this.xPosition = xPosition;
        this.yPosition = yPosition;
    }

    public getElement = () => {
        return this.onScreenElement;
    }

    public getXPosition = () => {
        return this.xPosition;
    }

    public getYPosition = () => {
        return this.yPosition;
    }   
    
    //end
}
