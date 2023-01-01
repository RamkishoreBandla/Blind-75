
const countPalindromes=(str)=>{
    let count=0;

    let slen= str.length;
   
    for( let i=0; i<slen;i+=1){
        let l=i,r=i;
        while(l>=0 && r<slen && str[l]===str[r]){
            count+=1;
            console.log(str.slice(l,r+1));
            l-=1;
            r+=1;
        }
       
        l=i;
        r=i+1;
       
        while(l>=0 && r<slen && str[l]===str[r]){
            count+=1;
            console.log(str.slice(l,r+1));
            l-=1;
            r+=1;
        }
       
    }    


    return count;
}


let str="aba";
let Pcount=countPalindromes(str);
console.log(Pcount);