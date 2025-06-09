// xử lý radio thay đổi
function changeRadio(event) {
    if(event.target.checked) { // khi người ta chọn 
        console.log('Chọn',event.target.value);
        if(event.target.value == 1) {
            // xử lý trong này
            document.getElementById('phivanchuyen').value = 0
        } else if (event.target.value == 2) {
            // xử lý trong này 
             document.getElementById('phivanchuyen').value = 30000
        }
    }
}

document.getElementById('noithanh').onchange = changeRadio;
document.getElementById('ngoaithanh').onchange = changeRadio;
function datMua() {
    // xử lý validate trong nút
    let loi = document.getElementsByClassName('loi');
  
    let tenkh = document.getElementById('tenkh').value;
    // validate rỗng
    if (tenkh == "") {
        loi[0].innerHTML = "Bạn chưa nhập tên khách hàng";
        return;
    }
    let soluong = document.getElementById('soluong').value;
    let dongia = document.getElementById('dongia').value;
    if(dongia == "") {
        loi[1].innerHTML = "Bạn chưa nhập đơn giá";
        return;
    }
    let thanhtien = soluong * dongia;
    document.getElementById('thanhtien').value = thanhtien;
}

