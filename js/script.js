
$(document).ready(
  function(){
      var embedLink={
                    "infWar":"https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1",
                    "despac":"https://www.youtube.com/embed/kJQP7kiw5Fk",
                    "udemy":"https://www.youtube.com/embed/6EWWgn7D4WY",
                    "pplawe":"https://www.youtube.com/embed/34OfMgYwa8g",
                  }
      $(".vidList li").click(function(){
        var id=$(this)[0].id;
        console.log(id);
        $(".embed iframe").attr("src",embedLink[id]);
        $(".viewedList").append('<li>'+$(this).text()+'</li>');
      });
});
