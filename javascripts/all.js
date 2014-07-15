var click_ripples_effect = function(){
  $('.click-ripples-effect').on('click', function(e) {

    var $this = $(this);

    $this.append('<div class="ripples-circle"></div>');

    var $offset = $this.offset();
    var $circle = $this.find('.ripples-circle');
    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');

  });

  $('.click-ripples-effect').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(e) {
    $(this).removeClass('is-active');
    $(this).find('.ripples-circle').remove();
  });

}

click_ripples_effect();
