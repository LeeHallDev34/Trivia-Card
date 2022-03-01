$(document).ready(() =>{
    $('.hint-box').on('click', () => {
      $('.hint').slideToggle(650);
    })
  
    $('.wrong-answer-one').on('click', () => {
      $('.wrong-text-one').fadeOut('fast');
        $('.frown').show();
    })
  
    $('.wrong-answer-two').on('click', () => {
      $('.wrong-text-two').fadeOut('fast');
       $('.frown').show();
    })
  
    $('.wrong-answer-three').on('click', () => {
      $('.wrong-text-three').fadeOut('fast');
       $('.frown').show();
    })
  
  $('.correct-answer').on('click', () => {
    $('.frown').hide();
      $('.smiley').show();
        $('.wrong-answer-one').fadeOut('fast');
        $('.wrong-answer-two').fadeOut('fast');
        $('.wrong-answer-three').fadeOut('fast');
  })
  
  $('.resetBtn').on('click', () => {
    $('.smiley').hide();
     $('.wrong-answer-one').fadeIn('fast');
      $('.wrong-answer-two').fadeIn('fast');
      $('.wrong-answer-three').fadeIn('fast');
       $('.wrong-text-one').fadeIn('fast');
        $('.wrong-text-two').fadeIn('fast');
        $('.wrong-text-three').fadeIn('fast');
      
  })
  });
  
  
  