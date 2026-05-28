// Deklarasi Elemen Utama
const home = document.getElementById("home");
const homebtn = document.getElementById("homebtn");
const aboutbtn = document.getElementById("aboutbtn");
const productbtn = document.getElementById("productbtn");
const contactbtn = document.getElementById("contactbtn");

// Fungsi ubah Navbar saat mode Mobile
function berubahukuran() {
    let vw = window.innerWidth;
    if (vw <= 600) {
        // Menggunakan innerHTML lebih ringkas daripada create element satu-satu
        homebtn.innerHTML = '<img src="../icon/home.svg" alt="Home">';
        aboutbtn.innerHTML = '<img src="../icon/article.person.svg" alt="About">';
        productbtn.innerHTML = '<img src="../icon/shopping.bag.svg" alt="Product">';
        contactbtn.innerHTML = '<img src="./icon/contact.support.svg" alt="Contact">';
    } else {
        homebtn.innerHTML = "Home";
        aboutbtn.innerHTML = "About";
        productbtn.innerHTML = "Product";
        contactbtn.innerHTML = "Contact";
    }
}

// Menjalankan fungsi responsive
berubahukuran();
window.addEventListener("resize", berubahukuran);

// Animasi Scroll
window.addEventListener("scroll", function() {
    let vh = window.innerHeight;
    let kontens = document.querySelectorAll(".konten");
    
    kontens.forEach(k => {
        let posisi = k.getBoundingClientRect().top;
        if (posisi < (vh - 100)) {
            k.classList.add("terlihat");
        }
    });
});

// Animasi Awal Halaman
window.addEventListener("load", function() {
    if (home) home.classList.add("awal");
});

// List Link Navigasi (Dikumpulkan jadi Object supaya rapi)
const links = {
    "wa": "https://wa.me/6285747150386",
    "ig": "https://www.instagram.com/hanif_zuhud?igsh=MXM5N25uZnVtamRleQ==",
    "tt": "https://www.tiktok.com/@hazuma_chan?_r=1&_t=ZS-94vlUWLjUuH",
    "mushaf": "https://mushaf.hazuma.my.id",
    "produkdigital": "https://showcase.hazuma.my.id/produkdigital",
    "makanan": "https://showcase.hazuma.my.id/makanan",
    "skincare": "https://showcase.hazuma.my.id/skincare", 
    "jasa": "https://showcase.hazuma.my.id/jasa",
    "ecommerce": "https://showcase.hazuma.my.id/ecommerce"
};

// Memasang Event Listener klik secara otomatis
Object.keys(links).forEach(id => {
    let el = document.getElementById(id);
    if (el) {
        el.addEventListener("click", function() {
            window.location.href = links[id];
        });
    }
});