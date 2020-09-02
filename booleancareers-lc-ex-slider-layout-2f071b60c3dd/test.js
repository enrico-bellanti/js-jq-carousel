// function esempio()
// {
// }


var tasto = window.event.keyCode;
console.log(tasto);
if (tasto == 39)
{
  alert("Hai premuto la freccia destra");
} else if (tasto == 37) {
  alert("Hai premuto la freccia sinistra");
}

$(".next").keyPress(function () {
  alert("ciao");
});
