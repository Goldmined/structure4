class NumberArray {
    constructor(arr){
        this.arr = arr;
    }
    min () {
        let res = this.arr[0];
        for (let item of this.arr) {
            if (item < res) {
               res = item;
            }
        } return res;
    }
    max () {
        let res = this.arr[0];
        for (let item of this.arr) {
            if (item > res) {
                res = item;
            }
        } return res;
    }
    
    avg () {
        let sum = 0;
        for (let item of this.arr) {
            sum = sum + item;
        }
        return sum/this.arr.length;
    }
   
   filter (type, divisor) {
       if (type == "even"){
           return this.arr.filter((item) => {
               if (item % 2 === 0) {
                   return true;
               }return false;
           }) 
       }
       if (type == "odd"){
           return this.arr.filter((item) => {
               if (item %2 === 1)  {
                   return true;
               }
               return false;
             })
       }
       if (type == "div"){
           return this.arr.filter((item) => {
               if (item %divisor === 0)  {
                   return true;
               }
               return false;
             })
       }
   }
   
   count (elem) {
       let res = 0;
       for (let item of this.arr) {
           if (elem === item) {
               res += 1;
           }
       }
       return res;
   }
   
   getDictionary () {
       const dictionary = {}
   
       for (let item of this.arr) {
           if(!dictionary[item]) {
               dictionary[item] = 0;
           }
           dictionary[item]+=1;
       }
       return dictionary;
   }
}
module.exports = NumberArray