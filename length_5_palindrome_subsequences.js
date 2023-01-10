const length5Palindromes=(str)=>{

    let count=0;
    let len=str.length;
    for(let i=0;i<len;i+=1){
        let l=i;
        let r=i;
        while(l>=0 && r<len && str[l]===str[r] && str.slice(l,r+1).length===5){
            count+=1;
            console.log(str.splice(l,r+1));
            l-=1;
            r+=1;
        }

    }
return count;
}


let str= '00100110';
let cnt= length5Palindromes(str);
console.log(cnt);