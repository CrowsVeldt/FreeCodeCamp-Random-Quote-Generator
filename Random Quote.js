$( document ).ready()

$.ajaxSetup({ cache: false });

$(".quote-button").click(function(){
  $("p").fadeOut("slow");

  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
    $(".quote").html('"' + a[0].content + '"')
    $(".author").html('<b> - '+ a[0].title + ' </b>')

  });

  $("p").fadeIn();

});

$(".twitter-button").click(function(){
  var quote = $(".quote").text();
  var author = $(".author").text();
  var url = "https://twitter.com/intent/tweet?text=" + quote + author;

  window.open(url, '_blank');
  });
