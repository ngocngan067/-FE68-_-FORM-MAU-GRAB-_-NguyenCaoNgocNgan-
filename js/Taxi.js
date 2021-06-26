class Taxi {
    constructor(_loaiTaxi, _soKm, _thoiGianCho) {
        this.loaiTaxi = _loaiTaxi;
        this.soKM = _soKm;
        this.thoiGianCho = _thoiGianCho;
        this.soKm2 = 0;
        this.soKm3 = 0;
        this.tienThoiGianCho = Number(Math.ceil(this.thoiGianCho / 3));
        switch (_loaiTaxi) {
            case "car":   //value = "car"
                this.gia1 = 8000;
                this.gia2 = 7500;
                this.gia3 = 7000;
                this.giaCho = 2000;
                break;

            case "suv":
                this.gia1 = 9000;
                this.gia2 = 8500;
                this.gia3 = 8000;
                this.giaCho = 3000;
                break;

            case "black":
                this.gia1 = 10000;
                this.gia2 = 9500;
                this.gia3 = 9000;
                this.giaCho = 3500;
                break;
            default:
                break;
        }

        if (_soKm > 1 && _soKm <= 19) {
            this.soKm2 = _soKm - 1;
        } else if (_soKm > 19) {
            this.soKm2 = 18;
            this.soKm3 = _soKm - 19;
        }

    }
    tinhTien() {
        return this.tienThoiGianCho * this.giaCho + this.gia1 + this.gia2 * this.soKm2
            + this.gia3 * this.soKm3;
    }
}