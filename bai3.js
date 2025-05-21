// hàm trong js 
// Dặt vấn đề hàm là gì ??? 
let n = 5; 
let c = 6;
// khai báo hàm 
function ktraChanLe(n) { // n là tham số
    if(n % 2 == 0) //=> là chẵn
    {
        alert("Day la so chan");
    } else {
        alert("Day la so le");
    }
}
// ktraChanLe(n); // hàm không trả về (Không có return trong hàm)
// ktraChanLe(c);
function tinhTong2so(a,b) { // không trả về
    alert(a+b);
}
function tinhTong2soreturn(a,b) { // có trả về có return
    return a + b;
}
alert(tinhTong2soreturn(5,10) + 500);
// tinhTong2so(4,5);
// tinhTong2so(7,8);
// hàm có trả về có tính tái sử dụng cao hơn hàm không trả về 
//hàm có trả về là hàm xử lý và trả về 1 giá trị (mang giá trị đó đi xử lý các công việc khác)

// hàm được dùng để đóng gói 1 đoạn chương trình 
// hàm mang tính tái sử dụng cao 
// hàm có 2 loại 
// có trả về => dấu hiệu nhận biết là có  return
// không trả về => dấu hiệu nhận biết là không có return 

// xây dựng các hàm sau :
// hàm tính chu vi và hàm tính diện tích của hình chữ nhật viết bằng
//  (hàm có trả về và không trả về)
// viết hàm tính lũy thừa truyền vào tham số a,n output là a^n 
// ví dụ 
// a =2 b = 3 
// output 2^3 =8 (Viết bằng hàm có trả về và hàm không trả về )
//viết hàm giải phương trình bậc 2 ax^2 + bx + c = 0 bằng hàm (có trả về,không trả về)
///abasdsadbsadbsa

