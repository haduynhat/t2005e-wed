//console.log("hello world!");
var x = 10;//khai bao bien
console.log(x);
console.log(x+10);
x = "xin chao";
console.log(x);
console.log(x+10);
console.log("xin chao"+"t2005e");
console.log(x.length);
var y="a10a5";//lay gia tri so
console.log(y+10);
y = parseInt(y);
console.log(y);//NaN: not a number
//array: mang
if(isNaN(y)){
    console.log("khong co gia tri");
}else{
    console.log(y+10)
}
for(var i=0;i<10;i++){
    console.log("i ="+i);
}
//khai bao mang
var ary =[];
ary[0] = 1999;
ary[1] = "hello";
ary[2] = [2,3,4,"xin chao",[3,5,7]];
console.log(ary[2][4][2]);
var s = [1,2,3,5,8,13,21];
for(var i=0;i<s.length;i++){
    console.log(s[i]);
}
//cach dinh nghia ham
var f = ham_gi_do();
console.log(f);
function ham_gi_do(a,b) {
    console.log("day la ben trong ham:"+(a+b));
    return "xin chao";
}
s.map(function (e) {
    console.log("s:"+e);
});

var arr = [];
for(var i=0;i<10;i++){
    arr.push(i*2+1);
}
arr.push(99)
arr.slice(1,2);//xoa tu vi tri 1 va xoa 2 phan tu
arr.map(function (e) {
    console.log("arr:"+e);
});
