//bai tap 1
document.getElementById("TinhTien").addEventListener("click", () => {
  var soNgay = +document.getElementById("SoNgayLam").value;
  var TienLuong = soNgay * 100000;
  document.getElementById("TienLuong").innerHTML = TienLuong;
});
//bai tap 2
TinhTong = () => {
  var input1 = +document.getElementById("so--1").value;
  var input2 = +document.getElementById("so--2").value;
  var input3 = +document.getElementById("so--3").value;
  var input4 = +document.getElementById("so--4").value;
  var input5 = +document.getElementById("so--5").value;

  var TongTB = (input1 + input2 + input3 + input4 + input5) / 5;

  document.getElementById("TongTB").innerHTML = TongTB;
};
//bai tap 3
document.getElementById("quydoi_click").onclick = () => {
  var soUSD = document.getElementById("soUSD").value;
  var quydoi = soUSD * 23000;
  document.getElementById("quyDoi").innerHTML = quydoi;
};
tinhChuVi = () => {
  var chieuDai = +document.getElementById("chieuDai").value;
  var chieuRong = +document.getElementById("chieuRong").value;
  var chuVi = (chieuDai + chieuRong) * 2;
  var dienTich = chieuRong * chieuDai;
  document.getElementById("chuVi").innerHTML = chuVi;
  document.getElementById("dienTich").innerHTML = dienTich;
};
//bài tập 5
Total_int2 = () => {
  var int_2 = +document.getElementById("so_int").value;
  var int_chuc = parseInt(int_2 / 10);
  var int_donVi = int_2 % 10;
  var int_Tong = int_chuc + int_donVi;
  document.getElementById("Tong_int2").innerHTML = int_Tong;
};
