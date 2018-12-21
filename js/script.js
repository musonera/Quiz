  
    $(document).ready(function(){
      $(".begin").click(function(){
        $("#quiz").fadeToggle("slow");
      });
    
      $("form#quiz").submit(function(event){
        var question1 = parseInt($("input:radio[name=question1]:checked").val());
        var question2 = parseInt($("input:radio[name=question2]:checked").val());
        var question3 = parseInt($("input:radio[name=question3]:checked").val());
        var question4 = parseInt($("input:radio[name=question4]:checked").val());
        var question5 = parseInt($("input:radio[name=question5]:checked").val());
        var score = 0;
        
 if( question1===+8){
     score+=8;
}
if(question2===+8){
  score+=8;
}
if(question3===+8){
  score+=8;
}
if(question4===+8){
  score+=8;
}
if(question5){
  score+=8;
}

        $("#display").quiz("Your score is:" + result);
    
        event.preventDefault();
        $(".final").show();
      });
    });
    