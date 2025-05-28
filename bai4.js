//1 số hàm xử lý chuỗi (string)
let str = "toi la thang";
//đếm xem trong chuỗi có bao nhiêu ký tự // chiều dài chuỗi
console.log(str.length);
//cắt chuỗi 
console.log(str.substring(0,3));
// cat chu la
console.log(str.substring(4,6));
// cat chu thang
console.log(str.substring(7,12));
// nối chuỗi concat 
let str1 = "toi nam nay 29 tuoi";
let str2 = str.concat(str1);
console.log(str2);
// viết hoa 
let strH = str.toUpperCase();
console.log(strH);
// viết thường
let strT = str.toLowerCase();
console.log(strT);
// kiểm tra xem có phải là số hay không 
let x = 1;
let check = isNaN(x);
// trả về true/false 
// check == false là số 
// check == true là chuỗi 
if(check == false) {
    alert("la so");
} else {
    alert("la chu");
}
// hàm làm tròn số 
let num = 1.4345;
let numa = num.toFixed();//làm tron số 2 
let numb = num.toFixed(2);//làm tron số đến 2 chữ số 
console.log(numb);