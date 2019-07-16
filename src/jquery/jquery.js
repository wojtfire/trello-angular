$(document).ready(function() {
  navInputFocus();
  headerNameFocus();

  dragSite();
});

function navInputFocus() {
  $('.input-bar-text').focus(function() {
    $(this).addClass('search-bar-focus');
  });

  $('.input-bar-text').blur(function() {
    $(this).val('');
    $(this).removeClass('search-bar-focus');
  });
}

function headerNameFocus() {
  $('.header-name-span').click(function() {
    var span = $(this);
    var input = $('.header-name-inpt');
    var text = span.text();
    var width = span.width();
    console.log(text);

    span.hide();
    input.width(width);
    input.val(text);
    input.show().focus();
    input.blur(function() {
      var newText = $(this).val();
      if (text != newText) {
        span.html(newText);
      }
      input.hide();
      span.show();
    });
  });
}

function dragSite() {
  var curDown = false;
  var isOnList = false;
  curXPos = 0;
  curYPos = 0;

  $('.list').mouseenter(function() {
    isOnList = true;
  });

  $('.list').mouseleave(function() {
    isOnList = false;
  });

  $(window).mousemove(function(m) {
    if (curDown === true) {
      $('.lists-container').scrollLeft(
        $(window).scrollLeft() + (curXPos - m.pageX)
      );
    }
  });

  $(window).mousedown(function(m) {
    if (isOnList == false) {
      curDown = true;
      curYPos = m.pageY;
      curXPos = m.pageX;
    }
  });

  $(window).mouseup(function() {
    curDown = false;
  });
}
