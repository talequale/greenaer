$(function() {

  $('.cookies-warning__close-btn').on('click', function() {
    $('.cookies-warning').fadeOut();
  })

  $(document).ready(function(){
    $("a[href*=#]").bind("click", function(e){
      var anchor = $(this);
      $("html, body").stop().animate({
        scrollTop: $(anchor.attr("href")).offset().top
      }, 1000);
        e.preventDefault();
    });
    return false;
  });
});

$(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    keyboardControl: true,
    lazyLoading: true,
    autoplay: 6000,
  })
});

$(document).ready( function() {
  // Makes use of the Universal Analytics API 'ga' object
  ga(function(tracker) {
    var clientId = tracker.get('clientId');
    $("#entry_1535383479").val("'" + clientId);
  });
});

function postContactToGoogle() {
  var email = $('#entry_2123178369').val();
  var first = $('#entry_1042368635').val();
  var last = $('#entry_1535383479').val();
  var gclid = $('#entry_1303173719').val();

  function validateEmail(field) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(field);
  }

  if (validateEmail(email) && first) {
    $.ajax({
      url: "https://docs.google.com/forms/d/1Ajv3vCGYI_eav7maE_so4WLgqmNSFQwk9Jo_-iuJp84/formResponse",
        data: { "entry_2123178369": email,
        "entry_1042368635": first, "entry_1535383479":
        last, "entry_1303173719": gclid },
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            window.location.replace("thank-you.html");
          },
          200: function () {
            window.location.replace("thank-you.html");
          }
        }
    });
  }
}

function postContactToGoogle2() {
  var email = $('#entry_254223033').val();
  var first = $('#entry_1136781430').val();
  var last = $('#entry_1535383479').val();
  var gclid = $('#entry_1303173719').val();

  function validateEmail(field) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(field);
  }

  if (validateEmail(email) && first) {
    $.ajax({
      url: "https://docs.google.com/forms/d/1Ajv3vCGYI_eav7maE_so4WLgqmNSFQwk9Jo_-iuJp84/formResponse",
        data: { "entry_254223033": email,
        "entry_1136781430": first, "entry_1535383479":
        last, "entry_1303173719": gclid },
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            window.location.replace("thank-you.html");
          },
          200: function () {
            window.location.replace("thank-you.html");
          }
        }
    });
  }
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("?");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable) {
      return pair[1];
    }
  }
  return(false);
}
window.onload = function getGclid() {
  var value = getQueryVariable("gclid");
  var e = document.getElementById("entry_1303173719");
  e.value = value;
}

