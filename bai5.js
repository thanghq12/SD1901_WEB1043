// Object trong js 
// đối tượng gồm 2 phần : 
// đặc điểm (Thuộc tính) là những gì góp phần hình thành và 
// nhận dạng đối tượng 
// hành động (Phương thức) là những gì đối tượng đó có thể 
// thực hiện 
//khai báo đối tượng trong js 
let sv1 = {
    ten:"Nguyễn Văn a",// thuộc tính 
    tuoi:19,
    maSV:"ph12345",
    di : function() { // đây là phương thức
        alert("Đi bang 2 chan");
    },
    hienthi :function() {
        return this.ten + "-" + this.tuoi;
    }

}
console.log(sv1.ten); // gọi thuộc tính 
//gọi phương thức trong đối tượng sv1 
sv1.di();
// gọi phương thức hiển thị 
let a = sv1.hienthi();
alert(a);