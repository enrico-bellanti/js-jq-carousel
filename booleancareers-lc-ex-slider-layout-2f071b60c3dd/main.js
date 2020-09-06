// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// Generiamo i pallini con JS
// Consiglio del giorno:
// Come sempre è importante usare la documentazione di jQuery per scoprire/rinfrescare memoria sulle funzioni che potrebbero esserci utili.


// creo la funzione document ready per fare in modo che il js sia caricato alla fine
$(document).ready(function () {

  // assegno valori a img e valBullet
  assignValue();

  // fai che quando clicco il pallino mi diventa blu e l'altro diventa bianco
  // controllo quale immagine ha lo stesso valore e assegno la classe active
  $(".nav i").click(function() {
    if($(".nav i").hasClass("active")){
      $(".nav i").removeClass("active");
      $("img").removeClass("active");
      $(this).addClass("active");
      var valBullet = $(this).attr('data-slide');
      var img = $("img[data-slide="+valBullet+"]");
      img.addClass("active");
    }
  });

// funzione che parte dal primo img e dal primo bullet e assegnare valori uguali a entrambe
function assignValue() {

  var i = 1;
  var bullet = $(".nav i.first");
  var img = $("img.first");
  var finalBullet = false;

  while (finalBullet == false) {

    bullet.attr('data-slide', i);
    img.attr('data-slide', i);

    if (bullet.hasClass("last")) {
      finalBullet = true;
    }

    bullet = bullet.next();
    img = img.next();

    i++;
  }

}

  // seleziono le frecce in modo che al click facciano qualcosa
  $(".next").click(function () {
    getNextImg();
  });


  $(".prev").click(function () {
    getPrevImg();
  });

// inserisco funziona che permette di vedere le img con le frecce della tastiera
$(document).keydown(
  function(event) {
      if (event.which == 37)
      {
          getPrevImg();
      }
      else if (event.which == 39)
      {
          getNextImg();
      }
  });

// funzione per scorrere avanti le immagini
function getNextImg() {
  var imgActive = $("img.active");
  imgActive.removeClass("active");
  var circleActive = $(".nav i.active");
  circleActive.removeClass("active")
  if (imgActive.hasClass("last") && circleActive.hasClass("last")) {
    $("img.first").addClass("active");
    $(".nav i.first").addClass("active");
  }else {
    var nextImg = imgActive.next();
    nextImg.addClass("active");
    var nextCircle = circleActive.next();
    nextCircle.addClass("active");
  }
}


// funzione per scorrere all'indietro le immagini
function getPrevImg() {
  var imgActive = $("img.active");
  imgActive.removeClass("active");
  var circleActive = $(".nav i.active");
  circleActive.removeClass("active")
  if (imgActive.hasClass("first") && circleActive.hasClass("first")) {
    $("img.last").addClass("active");
    $(".nav i.last").addClass("active");
  }else {
    var nextImg = imgActive.prev();
    nextImg.addClass("active");
    var nextCircle = circleActive.prev();
    nextCircle.addClass("active");
  }
}


});
