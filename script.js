$(".result1").hide();
$(".slytherine-resimg").hide();
$(".result2").hide();
$(".hufflepuff-resimg").hide();
$(".result3").hide();
$(".ravenclaw-resimg").hide();
$(".result4").hide();
$(".gryfindor-resimg").hide();

let userInputVar;
$(".slytherine").click(function() {
  userInputVar = $(".Age").val();
  $(".result1").show();
  $(".slytherine-resimg").show();
  $(".result1").html("You are " + userInputVar + " years old, and you got Slytherine I think you're pretty cool but scary.");
});

$(".hufflepuff").click(function() {
  userInputVar = $(".Age").val();
  $(".result2").show();
  $(".hufflepuff-resimg").show();
  $(".result2").html("You are " + userInputVar + " years old, and you got Hufflepuff thats pretty cool you definitely would be a good friend.");
});

$(".ravenclaw").click(function() {
  userInputVar = $(".Age").val();
  $(".result3").show();
  $(".ravenclaw-resimg").show();
  $(".result3").html("You are " + userInputVar + " years old, and you got Ravenclaw! Your're definitely a funny but smart person.");
});
$(".gryfindor").click(function() {
  userInputVar = $(".Age").val();
  $(".result4").show();
  $(".gryfindor-resimg").show();
  $(".result4").html("You are " + userInputVar + " years old, and you got Gryfindor! Your're definitely a wanna be Harry potter. Stop being a band wagoner. I know the only reason you chose this was because it's red.");
});

$(".retake").click(function() {
  $(".result1").hide();
  $(".slytherine-resimg").hide();
  $(".result2").hide();
  $(".hufflepuff-resimg").hide();
  $(".result3").hide();
  $(".ravenclaw-resimg").hide();
  $(".result4").hide();
  $(".gryfindor-resimg").hide();
  });

$(".slytherine").click(function() {
    $(".times").html( "Times Taken: " + 1);
});
$(".hufflepuff").click(function() {
  userInputVar = $(".Sprinkle").val();
  $(".times").html(userInputVar);
  userInputVar = Number($(".Sprinkle").val());
  $(".times").html("Times Taken: " + 1);
    });
$(".ravenclaw").click(function() {
  $(".times").html( "Times Taken: " + 1);
});
$(".gryfindor").click(function() {
  $(".times").html( "Times Taken: " + 1);
});
