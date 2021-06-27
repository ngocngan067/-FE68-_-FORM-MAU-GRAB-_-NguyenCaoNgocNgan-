const $ = (query) => document.querySelector(query);
const $$ = (query) => document.querySelectorAll(query);


let buttonTinhTien = $("#tinhtien");
buttonTinhTien.addEventListener("click", () => {
    let loaiXe = $(`[name="selector"]:checked`).value;
    let soKm = $("#soKmSD").value;
    let thoiGianCho = $("#thoiGianCho").value;
    // console.log(soKm);
    // console.log(thoiGianCho);
    let taxi1 = new Taxi(loaiXe, soKm, thoiGianCho);
    // console.log(taxi1.tinhTien());
    $("#xuatTien").innerHTML = taxi1.tinhTien();
    $("#divThanhTien").style.display = 'block';
})

let buttonInHoaDon = $("#inHoaDon");
buttonInHoaDon.addEventListener("click", ()=>{
    $("#bill").style.display = 'block';
    let loaiXe = $(`[name="selector"]:checked`).value;
    let soKm = $("#soKmSD").value;
    let thoiGianCho = $("#thoiGianCho").value;
    let taxi1 = new Taxi(loaiXe, soKm, thoiGianCho);
    
    $("#KMDauTien").innerHTML = 1;
    $("#spansoKm2").innerHTML = taxi1.soKm2;
    $("#spansoKm3").innerHTML = taxi1.soKm3;
    $("#spanThoiGianCho").innerHTML = thoiGianCho;
    
    $("#spanGia1").innerHTML = taxi1.gia1;
    $("#spanGia2").innerHTML = taxi1.gia2;
    $("#spanGia3").innerHTML = taxi1.gia3;
    $("#spanGiaCho").innerHTML = taxi1.giaCho;

    $("#spanThanhTien1").innerHTML = Number(taxi1.gia1);
    $("#spanThanhTien2").innerHTML = Number((taxi1.soKm2)*(taxi1.gia2));
    $("#spanThanhTien3").innerHTML = Number((taxi1.soKm3)*(taxi1.gia3));
    $("#spanThanhTienCho").innerHTML = Number((taxi1.tienThoiGianCho)*(taxi1.giaCho));
    $("#spanTongTien").innerHTML = taxi1.tinhTien();
}) 
