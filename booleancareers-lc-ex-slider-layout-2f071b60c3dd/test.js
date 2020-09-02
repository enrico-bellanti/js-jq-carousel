
function assignValue() {
  
  var i = 1;
  var bullet = $(".nav i.first");
  var img = $("img.first");
  var finalBullet = false;

  while (finalBullet == false) {

    bullet.attr('value', i);
    img.attr('value', i);

    if (bullet.hasClass("last")) {
      finalBullet = true;
    }

    bullet = bullet.next();
    img = img.next();

    i++;
  }

}



// assegno un valore associato alla posizione, alle immagini e ai puntini con un ciclo;
// clicco sul puntino mi restituisce un valore e all'immagine con
// lo stesso valore apllico la classe active
// var i = 1;
// var imgEnd = false;
// var point = $(".nav i.first");
// var img = $("img.first");
//
// while (imgEnd == false) {
//   if (point.attr('value') == ) {
//
//   }
//   point.attr('value', i);
//   // img.attr('value', i);
//   console.log("i " + i);
//   i++
//   if ($(".nav i").hasClass("last")) {
//     imgEnd = true;
//   }
//   console.log("img value " + img.attr('value'));
//   console.log("bullet value " + point.attr('value'));
// }
