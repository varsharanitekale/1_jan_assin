Array.prototype.check10 = function() 
{
    for(let i=0; i<this.length; i++)
    {
       if(this[i]<=1)
       {
           return false
       }
       else
       {
       for (let i = 2; i < this[i] / 2; i++) 
           {
           //if number is  divisable by 1 and itself then it is  a prime number
           if (this[i] % i == 0) 
              {
               return false
              }
            }
        //if number is not divisable by 1 and itself then it is not a  prime number
        return true
        }
       //else ends 
  
    }
}

const arr3 = [2, 3, 5]
console.log(arr3.check10())

const arr4 = [14, 15, 8, 9]
console.log(arr4.check10())

