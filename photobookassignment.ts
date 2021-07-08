class photobook{

    private numpages:number;

    public constructor();
    public constructor(p:number);
    public constructor(...myarray:any[])
    {
        if(myarray.length == 1)
        {
            this.numpages = myarray[0];
        }
        else
        {
            this.numpages = 16;
        }
    };
    
    getNumberPages():number{
        return this.numpages;
    }
}

class Bigphotobook{
   //private numpages:number;
numpages:number;
 constructor(){
    this.numpages = 64;
}
}

var book1 = new photobook();
var book2 = new photobook(25);
var book3 = new Bigphotobook();

console.log("Book1 has "+ book1.getNumberPages()+" pages");
console.log("Book2 has "+ book2.getNumberPages()+" pages");
console.log("Book3 has "+book3.numpages+" pages");