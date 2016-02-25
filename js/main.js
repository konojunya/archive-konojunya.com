(function() {
  $(function() {
    window.onload = function() {
      var _ua, bool;
      _ua = (function(u) {
        return {
          Tablet: u.indexOf('windows') !== -1 && u.indexOf('touch') !== -1 || u.indexOf('ipad') !== -1 || u.indexOf('android') !== -1 && u.indexOf('mobile') === -1 || u.indexOf('firefox') !== -1 && u.indexOf('tablet') !== -1 || u.indexOf('kindle') !== -1 || u.indexOf('silk') !== -1 || u.indexOf('playbook') !== -1,
          Mobile: u.indexOf('windows') !== -1 && u.indexOf('phone') !== -1 || u.indexOf('iphone') !== -1 || u.indexOf('ipod') !== -1 || u.indexOf('android') !== -1 && u.indexOf('mobile') !== -1 || u.indexOf('firefox') !== -1 && u.indexOf('mobile') !== -1 || u.indexOf('blackberry') !== -1
        };
      })(window.navigator.userAgent.toLowerCase());
      $('a[href^=#]').on('click', function() {
        var header_height, href, position, target;
        header_height = $('.navi').height();
        href = $(this).attr('href');
        target = $(href === '#' || href === '' ? 'html' : href);
        position = target.offset().top;
        if (_ua.Mobile || _ua.Tablet) {
          $(".btn").attr("class","fa fa-bars fa-2x btn");
          $(".navi").animate({
            left: "-100%"
          },300);
        }
        $('html, body').animate({
          scrollTop: position
        }, 700);
        return false;
      });
      $('.hello').typed({
        strings: ['Welcome to my page !', 'Hello, My World!'],
        showCursor: false,
        typeSpeed: 0
      });
      setTimeout((function() {
        $('.topAni').fadeOut('slow');
        return this;
      }), 5 * 1);
      $('.btn').on('click', function() {
        var clsArray;
        clsArray = $(this).attr("class").split(" ");
        if (clsArray[1] == "fa-bars") {
          clsArray[1] = "fa-remove";
          $(this).attr("class", clsArray.join(" "));
          $(".navi").animate({
            left: "0%"
          },300);
        } else if (clsArray[1] == "fa-remove") {
          clsArray[1] = "fa-bars";
          $(this).attr("class", clsArray.join(" "));
          $(".navi").animate({
            left: "-100%"
          },300);
        }
      });
    };
  });

}).call(this);
