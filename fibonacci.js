// using iteration

function fib(n){
    let result = [0,1];
    for (let i = 2; i < n; i++) {
        result[i] = result[i-1] + result[i-2];        
    }; 
    return result;   
};

console.log(fib(8));

//using recursive function.

function fibsRec(n){
    return n <= 1 ? n : fibsRec(n-1) + fibsRec(n-2);
};
const n = 8;
for(let i = 0; i < n ; i++) {

    console.log( fibsRec(i))
}

























