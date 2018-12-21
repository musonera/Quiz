var myQuiz = function(one, two ,three){
    return one + two + three;
    
    }
    
    $(document).ready(function(){
      $(".begin").click(function(){
        $("#test").fadeToggle("slow");
      });
    
      $("form#quiz").submit(function(event){
        var question1 = parseInt($("input:radio[name=question1]:checked").val());
        var question2 = parseInt($("input:radio[name=question2]:checked").val());
        var question = parseInt($("input:radio[name=question3]:checked").val());
        var question = parseInt($("input:radio[name=question4]:checked").val());
        var question = parseInt($("input:radio[name=question5]:checked").val());
        
    
        var result = quizResults(question1, question2 ,question3,question4,question5);
    
        $("#display").text("Your score is:" + result);
    
        event.preventDefault();
        $(".final").show();
      });
    });
    