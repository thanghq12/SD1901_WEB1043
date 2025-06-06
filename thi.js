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
    let soluong = document.getElementById('soluong').value;
    let dongia = document.getElementById('dongia').value;
    let thanhtien = soluong * dongia;
    document.getElementById('thanhtien').value = thanhtien;
}

