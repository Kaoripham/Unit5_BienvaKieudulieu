
inputVatly = prompt("Điểm Vật Lý");
inputToan = prompt("Điểm Toán")
inputHoa = prompt("Điểm Hóa")

let Vatly = parseInt(inputVatly);
let Toan = parseInt(inputToan);
let Hoa = parseInt(inputHoa);
let Diemtrungbinh = (Vatly + Toan + Hoa)/3;
let Tongdiem = (Vatly + Toan + Hoa);
document.write("Tổng điểm là:" +Tongdiem);
document.write('<br/>');
document.write("Điểm trung bình là:" +Diemtrungbinh);