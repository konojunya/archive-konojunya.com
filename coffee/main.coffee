$ ->
  window.onload = ->
    _ua = ((u) ->
      {
        Tablet: u.indexOf('windows') != -1 and u.indexOf('touch') != -1 or u.indexOf('ipad') != -1 or u.indexOf('android') != -1 and u.indexOf('mobile') == -1 or u.indexOf('firefox') != -1 and u.indexOf('tablet') != -1 or u.indexOf('kindle') != -1 or u.indexOf('silk') != -1 or u.indexOf('playbook') != -1
        Mobile: u.indexOf('windows') != -1 and u.indexOf('phone') != -1 or u.indexOf('iphone') != -1 or u.indexOf('ipod') != -1 or u.indexOf('android') != -1 and u.indexOf('mobile') != -1 or u.indexOf('firefox') != -1 and u.indexOf('mobile') != -1 or u.indexOf('blackberry') != -1
      }
    )(window.navigator.userAgent.toLowerCase())
    $('a[href^=#]').on 'click', ->
      header_height = $('.navi').height()
      href = $(@).attr 'href'
      target = $(if href == '#' or href == '' then 'html' else href)
      position = target.offset().top
      if _ua.Mobile or _ua.Tablet
        $('.navi').fadeOut()
        $('fa-remove').hide()
        $('.fa-bars').fadeIn()
      $('html, body').animate {
        scrollTop: position
      }, 700
      false
    $('.hello').typed
      strings: [
        'Welcome to my page !'
        'Hello, My World!'
      ]
      showCursor: false
      typeSpeed: 0
    setTimeout (->
      $('.topAni').fadeOut 'slow'
      @
    ), 5 * 1000
    $('.fa-bars').on 'click', ->
      $('.navi').fadeIn()
      $(@).hide()
      $('.fa-remove').fadeIn()
      @
    $('.fa-remove').on 'click', ->
      $('.navi').fadeOut()
      $(@).hide()
      $('.fa-bars').fadeIn()
      @
    @
  @
