var sample:number[];
sample = [1,2,3,4,5];

var i:number = 0;

for(i=0;i<5;i++)
{
    if(sample[i]%2 == 0)
    {
        console.log(sample[i]+" is Even");
    }
    else
    {
        console.log(sample[i]+" is Odd")
    }
}
console.log("Program end");