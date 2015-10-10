// JavaScript Document
 $(document).ready(function(e) {
    
 $('a.like').click(function(){
  var left = parseInt($(this).offset().left)+10, top =  parseInt($(this).offset().top)-10, obj=$(this);
  $(this).append('<div id="like"><b>+1<\/b></\div>');
  $('#like').css({'position':'absolute','z-index':'1', 'color':'#C30','left':left+'px','top':top+'px'}).animate({top:top-10,left:left+10},'slow',function(){
   $(this).fadeIn('fast').remove();
   var Num = parseInt(obj.find('span').text());
       Num++;
    obj.find('span').text(Num);
  });
  return false;
 });
 
 $('a.dislike').click(function(){
  var left = parseInt($(this).offset().left)+10, top =  parseInt($(this).offset().top)-10, obj=$(this);
  $(this).append('<div id="dislike"><b>+1<\/b></\div>');
  $('#dislike').css({'position':'absolute','z-index':'1', 'color':'#C30','left':left+'px','top':top+'px'}).animate({top:top-10,left:left+10},'slow',function(){
   $(this).fadeIn('fast').remove();
   var Num = parseInt(obj.find('span').text());
       Num++;
    obj.find('span').text(Num);
  });
  return false;
 });
 
 
 
 
 });