

var dollar = 9433.34;

var euro = 10354.03;

var samolyotbileti = 500 * dollar;

var Mehmonxonatolovi = 250 * dollar;

var kongilocharjoylar = 120 * euro;

var umumiyxarajat = samolyotbileti + Mehmonxonatolovi + kongilocharjoylar;

var kiritilgansumm = prompt("Pulingiz qancha iltimos kiriting:");

if (kiritilgansumm >= umumiyxarajat) {
    alert("Oq Yo'l Alisher");
    console.log("Oq Yo'l Alisher");
} else if (kiritilgansumm < umumiyxarajat) {
    alert("Ozgina Sabr Qilib Ishlash Kerak Ekan Alisher!");
    console.log("Ozgina Sabr Qilib Ishlash Kerak Ekan Alisher!");
} else {
    alert("Iltimos pulingiz miqdorini faqat raqamda yozing!!!");
    console.log("Iltimos pulingiz miqdorini faqat raqamda yozing!!!");
}