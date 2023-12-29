var a = 0;
var b = 1;
var n =0
for(let i=0;i<n;i++){
    if(n==0){
        return [0];
    }
    if(n==1){
        return [0,1]
    }
    if(n>1){
    let temp;
    var arr = [0,1];
    temp=a;
    a=b;
    b= a+temp;
    arr.push(b);
    }
    return arr;
}
