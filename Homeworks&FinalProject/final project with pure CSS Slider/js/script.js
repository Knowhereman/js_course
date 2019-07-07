window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$('#film').on('click', function(){
            
            $('#modal').show(2000);
        })

        $('#closeBtn').on('click', function(e) {
            $('#modal').hide();
            $('body').removeClass('hovered');
        })
var modal = document.getElementById('modal');
        var btn = document.getElementById('film')

        