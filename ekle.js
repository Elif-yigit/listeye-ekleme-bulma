let kullanicilar = [];
let kullaniciAdeti=0;

function kullaniciEkle () {

  let yeniKullaniciEkle = prompt ('Kaç adet isim eklemek istersiniz');

  for ( let i =0; i < yeniKullaniciEkle; i++){
  let kullanici = prompt('İsim giriniz');
  kullanicilar.push(kullanici);
}
 console.log('Yeni kullanıcı eklendi. Eklenen kişinin bilgileri: ', kullanicilar);

}

function kullaniciAra () {

  let arananIsim = prompt('Aramak istediğiniz kişinin adını giriniz: ').toLowerCase();

for(let i = 0; i < kullanicilar.length; i++) {
      if(kullanicilar[i].toLowerCase() === arananIsim ) {
         kullaniciAdeti++;
        
       }
      }
       if (kullaniciAdeti > 0) {
        console.log(`${arananIsim} ismi listenizde ${kullaniciAdeti} adet bulundu.`);
        return 
      } else {
     console.log('Aradığınz kişi listede bulunamadı.');
    }
   }


   kullaniciEkle ();
   kullaniciAra ();