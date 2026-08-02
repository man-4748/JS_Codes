// roots of a qadratic equation with coefficients a,b and c:

function QuadraticRoots(a,b,c){
    let root1 = (-b + Math.sqrt(b*b - 4*a*c))/(2*a);
    let root2 = (-b - Math.sqrt(b*b - 4*a*c))/(2*a);
    console.log("Roots of the equation are: ",root1, root2);
}

QuadraticRoots(1,-5,6);
// Find gcd of 2 numbers a and b: 
// 1<= gcd(a,b)<=min(a,b)
function min(x,y){
    if(x>=y) return y;
    else return x;
}
//console.log(min(23,34));
function GCD(x,y){
    let ans = 1;
    for(let i=1;i<=min(x,y);i++){
        if(x%i==0 && y%i==0) ans = i;

    }
    return ans;
}

let gcd_xy = GCD(24,28);
console.log(gcd_xy);

// Euclid's Algorithm

function gcd(a,b){
    // gcd(a,b) = gcd(b,a%b);  if(a>b)
    if(a<b){ // swap a and b
        let temp = a;
        a = b;
        b = temp;
    }
    if(a%b==0) return b;
    return gcd(b,a%b);
}

console.log(gcd(78,36));

// Sum of digits of a number

function sumOfDigits(n){
    let sum = 0;
    while(n){
        let lastDigit = n%10
        sum += lastDigit;
        n = Math.floor(n/10);
    }
    return sum;
}
console.log(sumOfDigits(4173));

// Given a no x, check if its a palindrome or not:
// 1441  ---> reverse --> 1441

function reverse(n){
    let res = 0;
    let temp = n;
    while(temp>0){
        let lastdigit = temp%10;
        res = res*10 + lastdigit;
        temp = Math.floor(temp/10);
    }
    return res;
}
function checkPalindrome(n){
    if(n == reverse(n)) return "yes";
    else return "no";
}
console.log(checkPalindrome(12421));

// Alternative method: using strings

function checkpalindromeStr(n){
    // convert number to string 
    let str = "" + n;
    let i = 0;
    let j = str.length - 1;
    while(i<=j){
        if(str[i]==str[j]){
            i++;
            j--;
        }else return false;
    }
    // if we completed the while loop and never got a mismatch, return true.
    return true;
}

console.log(checkpalindromeStr(14541));

// Write a function to check sign of a number properly
function signOfNumber(n){
    if(typeof(n)!="number") return NaN;
    else{
        if(Object.is(n,0)) return +1;
        else if(Object.is(n,-0)) return -1;
        else if(n>0) return +1;
        else return -1;
    }
}
console.log(signOfNumber(-0));
console.log(signOfNumber(undefined));
