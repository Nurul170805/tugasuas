function hitungBelanja() {
  let nama = document.getElementById("namaPelanggan").value;
  let produk = document.getElementById("namaProduk").value;
  let harga = document.getElementById("hargaProduk").value;
  let jumlah = document.getElementById("jumlahPembelian").value;
  let error = document.getElementById("error");
  if (nama === "" || produk === "" || harga === "" || jumlah === "") {
    error.innerHTML = "Semua input wajib diisi!";
    return;
  }

  harga = Number(harga);
  jumlah = Number(jumlah);

  let totalBelanja = harga * jumlah;

  let potongan;

  if (totalBelanja >= 400000) {
    potongan = 50000;
  } else {
    potongan = 0;
  }

  let totalBayar = totalBelanja - potongan;

  document.getElementById("outNama").innerHTML = nama;
  document.getElementById("outProduk").innerHTML = produk;
  document.getElementById("outTotal").innerHTML =
    "Rp " + totalBelanja.toLocaleString("id-ID");

  document.getElementById("outPotongan").innerHTML =
    "Rp " + potongan.toLocaleString("id-ID");

  document.getElementById("outBayar").innerHTML =
    "Rp " + totalBayar.toLocaleString("id-ID");

  document.getElementById("hasil").style.display = "block";

  error.innerHTML = "";
}

function resetForm() {
  document.getElementById("namaPelanggan").value = "";
  document.getElementById("namaProduk").value = "";
  document.getElementById("hargaProduk").value = "";
  document.getElementById("jumlahPembelian").value = "";

  document.getElementById("hasil").style.display = "none";

  document.getElementById("error").innerHTML = "";
}