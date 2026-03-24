let home= document.getElementById("home");
let about= document.getElementById("about");
let product= document.getElementById("product");
let kontak= document.getElementById("kontak");
let homebtn= document.getElementById("homebtn");
let aboutbtn= document.getElementById("aboutbtn");
let productbtn= document.getElementById("productbtn");
let contactbtn= document.getElementById("contactbtn");
let wa= document.getElementById("wa");
let ig= document.getElementById("ig");
let tt= document.getElementById("tt");
let mushaf= document.getElementById("mushaf");
let pesanprodukdigital= document.getElementById("produkdigital");
let pesanmakanan= document.getElementById("makanan");
let pesanskincare= document.getElementById("skincare");
let pesanjasa= document.getElementById("jasa");
let pesanecommerce= document.getElementById("ecommerce");
let vw= window.innerWidth;
function berubahukuran(){
if(vw <= 600){
    homebtn.innerHTML="";
    aboutbtn.innerHTML="";
    contactbtn.innerHTML="";
    productbtn.innerHTML="";
    let homeimg= document.createElement("img");
    let aboutimg= document.createElement("img");
    let productimg= document.createElement("img");
    let contactimg= document.createElement("img");
    homeimg.src="../icon/home.svg";
    aboutimg.src="../icon/article.person.svg";
    productimg.src="../icon/shopping.bag.svg";
    contactimg.src="./icon/contact.support.svg";
    homebtn.append(homeimg);
    aboutbtn.append(aboutimg);
    contactbtn.append(contactimg);
    productbtn.append(productimg);

}else{
    homebtn.innerHTML="Home";
    aboutbtn.innerHTML="About";
    contactbtn.innerHTML="Contact";
    productbtn.innerHTML="Product";
}
}
berubahukuran();
window.addEventListener("resize", function(){
    vw= this.window.innerWidth;
    berubahukuran();
});
window.addEventListener("scroll", function(){
    let vh= window.innerHeight;
    let kontens= document.querySelectorAll(".konten");
    for(let k of kontens){
        let posisi= k.getBoundingClientRect().top;
        if(posisi < (vh - 100)){
            k.classList.add("terlihat")
        }
    };
});
wa.addEventListener("click", function(){
    window.location.href="https://wa.me/6285747150386";
});
ig.addEventListener("click", function(){
    window.location.href="https://www.instagram.com/hanif_zuhud?igsh=MXM5N25uZnVtamRleQ==";
});
tt.addEventListener("click", function(){
    window.location.href="https://www.tiktok.com/@hazuma_chan?_r=1&_t=ZS-94vlUWLjUuH";
});
mushaf.addEventListener("click", function(){
  window.location.href="https://mushaf.hazuma.my.id";
});
pesanprodukdigital.addEventListener("click", function(){
    window.location.href="https://showcase.hazuma.my.id/produkdigital";
});
pesanmakanan.addEventListener("click", function(){
    window.location.href="https://showcase.hazuma.my.id/makanan";
});
pesanskincare.addEventListener("click", function(){
    window.location.href="showcase.hazuma.my.id/skincare";
});
pesanjasa.addEventListener("click", function(){
    window.location.href="showcase.hazuma.my.id/jasa";
});
pesanecommerce.addEventListener("click", function(){
  window.location.href="showcase.hazuma.my.id/ecommerce";
});
window.addEventListener("load", function(){
  home.classList.add("awal");
});