//var bigInt = require("big-integer");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
/*
    let nth = req.body.nth
    let nth_1 = bigInt.one;
    let nth_2 = bigInt.zero;
    let answer = bigInt.zero;

    if (nth < 0)
        throw 'must be greater than 0'
    else if (nth === 0)
        answer = nth_2
    else if (nth === 1)
        answer = nth_1
    else {
        for (var i = 0; i < nth - 1; i++) {
            answer = nth_2.add(nth_1)
            nth_2 = nth_1
            nth_1 = answer
        }
    }

    context.res = {
        body: answer.toString()
    };*/

    let nth = req.body.nth
    var memo = {};
    memo[0]=0;
    memo[1]=1;

    function fib(n){
        var s;
        if(n>=0) {s=1}
        else {-1}

        n=Math.abs(n);
        if(memo[n]!== undefined) {return s*memo[n]}
        else {return s*(memo[n]=fib(n-1)+fib(n-2))}
    }
    let answer= fib(nth)
    context.res={
        body: answer.toString()
    };
}