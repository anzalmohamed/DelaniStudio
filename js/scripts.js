$(document).ready(function(){
    $("#developmentImage").click(function(){
      $("#developmentImage").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#developmentImage").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#designImage").click(function(){
      $("#designImage").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#designImage").slideDown('1500');
    });
  });
  $(document).ready(function(){
    $("#productImage").click(function(){
      $("#productImage").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#productImage").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("form").submit(function(event){
      event.preventDefault();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var message = $("textarea#comment").val();
      if ($("input#name").val() && $("input#email").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      $('.work1').mouseover(function() {
        $('.work1-overlay').show();
      }).mouseout(function() {
        $('.work1-overlay').hide();
      });
      $(".work2").mouseover(function() {
        $(".work2-overlay").show();
      }).mouseout(function() {
        $(".work2-overlay").hide();
      });
      $(".work3").mouseover(function() {
        $(".work3-overlay").show();
      }).mouseout(function() {
        $(".work3-overlay").hide();
      });
      $(".work4").mouseover(function() {
        $(".work4-overlay").show();
      }).mouseout(function() {
        $(".work4-overlay").hide();
      });
      $(".work5").mouseover(function() {
        $(".work5-overlay").show();
      }).mouseout(function() {
        $(".work5-overlay").hide();
      });
      $(".work6").mouseover(function() {
        $(".work6-overlay").show();
      }).mouseout(function() {
        $(".work6-overlay").hide();
      });
      $(".work7").mouseover(function() {
        $(".work7-overlay").show();
      }).mouseout(function() {
        $(".work7-overlay").hide();
      });
      $(".work8").mouseover(function() {
        $(".work8-overlay").show();
      }).mouseout(function() {
        $(".work8-overlay").hide();
      });
    
      
    });
  
  });
  
  
  