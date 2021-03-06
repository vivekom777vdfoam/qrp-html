$(document).ready(function() {
  // Phone mask
  $('.phone_us').mask('(000) 000-0000');
  // End

  // Created step on page load
  var state_help = { foo: 'step1' };
  history.pushState(state_help, 'Help page 1', '');
  console.log('Added-step1');

  // For active button
  $('#slides ul li button').click(function() {
    $(this).closest('ul').find('button').removeClass('active');
    $(this).addClass('active');
  });

  // Modal ('#privacy_policy, #terms_of_use, #join_network, #zip_help')
  $('.modal-link').click(function() {
    var dataTarget = $(this).attr('data-target');
    $(dataTarget).addClass('modal-slide-up');
    $(dataTarget).parent().addClass('mw-visible');
    $('body').addClass('open-modal');

    var state_help = { foo: 'step2' };
    history.pushState(state_help, 'Help page 2', '');
    console.log('Added-step2');
    return false;
  });
  $('.modal-close').click(function() {
    window.history.go(-1);
    $(this).parent().removeClass('modal-slide-up');
    $(this).closest('.modal-warp').removeClass('mw-visible');
    $('body').removeClass('open-modal');
  });
  // End

  // Help steps
  $('.hs-link').click(function() {
    $('#overlay > section').removeClass('modal-slide-up');
    var dataHelp = $(this).attr('data-help');
    $(dataHelp).addClass('hs-slide-opacity-1');
    setTimeout(function() {
      $(dataHelp).addClass('hs-slide-left-0');
    }, 200);
    $(dataHelp).parent().addClass('hs-visible');
    $('body').addClass('open-hs');
    $('.zip_section').removeClass('card-left-0 card-p-a').addClass('card-left--100');
  });


  $('#zip_help_btn').click(function() {
    var zipcode = $('#zip_help_input').val();
    var regex = new RegExp(/^\d{5}$/);
    if(zipcode.match(regex)) {
      $('#overlay > section').removeClass('modal-slide-up');
      var dataHelp = $(this).attr('data-help');
      $(dataHelp).addClass('hs-slide-opacity-1');
      setTimeout(function() {
        $(dataHelp).addClass('hs-slide-left-0');
      }, 200);
      $(dataHelp).parent().addClass('hs-visible');
      $('body').addClass('open-hs');
      $('.zip_section').removeClass('card-left-0 card-p-a').addClass('card-left--100');
    }
    else {
      $('#zip_help_input').addClass('error').focus();
    }
  });
  $('#zip_help_input').keydown(function() {
    $(this).removeClass('error');
  });


  $('#zip_btn').click(function() {
    var zipcode = $('#zip_input').val();
    var regex = new RegExp(/^\d{5}$/);
    if(zipcode.match(regex)) {
      var dataHelp = $(this).attr('data-help');
      $(dataHelp).addClass('hs-slide-opacity-1').removeClass('hs-slide-left--100');
      setTimeout(function() {
        $(dataHelp).addClass('hs-slide-left-0');
      }, 200);
      $(dataHelp).parent().addClass('hs-visible');
      $('body').addClass('open-hs');
      $('.zip_section').removeClass('card-left-0 card-p-a').addClass('card-left--100');

      $.post('validate/fromZipcode',{zip_from:zipfrom}).done(function(results) {
        if(results == 'true'){
          slide_block_0.removeClass('error');
          slide_block_0_input.addClass('success').removeClass('error');
          error_msg.hide();
          setTimeout(function() {
            slide1.hide();
            slide2.show();
          }, 500);
        }else{
          slide_block_0.addClass('error').removeClass('success');
          error_msg.show();
          return false;
        }
      });

      var state_help = { foo: 'step2' };
      history.pushState(state_help, 'Help page 2', '');
      console.log('Added-step2');
      return false;
    }
    else {
      $('#zip_input').addClass('error').focus();
      $('.zip_message').fadeOut(500);
      $('#zip_message').fadeIn(500);
    }
  });
  $('#zip_input').keydown(function() {
    $('#zip_message').fadeOut(500);
    $(this).removeClass('error');
    if ($(this).val().length == 4) {
      $('.zip_message').fadeIn(500);
    }
  });


  $('#work_type .hs-link').click(function() {
    var state_help = { foo: 'step3' };
    history.pushState(state_help, 'Help page 3', '');
    console.log('Added-step3');
    return false;
  });

  $('.hs-link-interior').click(function() {
    var dataHelp = $(this).attr('data-help');
    $(dataHelp).addClass('hs-slide-opacity-1');
    setTimeout(function() {
      $(dataHelp).addClass('hs-slide-left-0');
    }, 200);
    $(dataHelp).parent().addClass('hs-visible');
    $('body').addClass('open-hs');
    $('#rooms').addClass('stete-step-4-A');

    var state_help = { foo: 'step4' };
    history.pushState(state_help, 'Help page 4', '');
    console.log('Added-step4');
    return false;
  });
  $('.hs-link-exterior').click(function() {
    var dataHelp = $(this).attr('data-help');
    $(dataHelp).addClass('hs-slide-opacity-1');
    setTimeout(function() {
      $(dataHelp).addClass('hs-slide-left-0');
    }, 200);
    $(dataHelp).parent().addClass('hs-visible');
    $('body').addClass('open-hs');
    $('#exterior').addClass('stete-step-4-B');

    var state_help = { foo: 'step4' };
    history.pushState(state_help, 'Help page 4', '');
    console.log('Added-step4');
    return false;
  });
  $('.hs-link-both').click(function() {
    var dataHelp = $(this).attr('data-help');
    $(dataHelp).addClass('hs-slide-opacity-1');
    setTimeout(function() {
      $(dataHelp).addClass('hs-slide-left-0');
    }, 200);
    $(dataHelp).parent().addClass('hs-visible');
    $('body').addClass('open-hs');
    $('#rooms').addClass('stete-step-4-A');

    var state_help = { foo: 'step4' };
    history.pushState(state_help, 'Help page 4', '');
    console.log('Added-step4');
    return false;
  });

  $('.hs-link-go').click(function() {
      var this_link = $('.hs-link-go');
      var checkextopt = false;
      $('#exterior_options li input').each(function() {
        if ($(this).is(':checked')) {
          // checkextopt = true;
          var dataHelp = this_link.attr('data-help');
          $(dataHelp).addClass('hs-slide-opacity-1');
          setTimeout(function() {
            $(dataHelp).addClass('hs-slide-left-0');
          }, 200);
          $(dataHelp).parent().addClass('hs-visible');
          $('body').addClass('open-hs');

          var state_help = { foo: 'step5' };
          history.pushState(state_help, 'Help page 5', '');
          console.log('Added-step5');
          return false;
        }
      });
      if(checkextopt == false) {
        return false;
      }
    // }
  });

  $('.hs-link-when').click(function() {
    var dataHelp = $(this).attr('data-help');
    $(dataHelp).addClass('hs-slide-opacity-1');
    setTimeout(function() {
      $(dataHelp).addClass('hs-slide-left-0');
    }, 200);
    $(dataHelp).parent().addClass('hs-visible');
    $('body').addClass('open-hs');

    var state_help = { foo: 'step5' };
    history.pushState(state_help, 'Help page 5', '');
    console.log('Added-step5');
    return false;
  });
  // End

  // Last step
  $('.when-last-step ul li .when-link').click(function() {
    $('#work_type, #int_ext, #when').removeClass('hs-slide-left-0').addClass('hs-slide-left--100');
    if ($('#rooms').hasClass('stete-step-4-A')) {
      $('#rooms').removeClass('hs-slide-left-0').addClass('hs-slide-left--100');
    }
    if ($('#exterior').hasClass('stete-step-4-B')) {
      $('#exterior').removeClass('hs-slide-left-0').addClass('hs-slide-left--100');
    }
    $('#search').show();
    $('#intro').hide();
    $('#cards').hide();
    $('.progress-bar-rounded').show();
    loader();

    var state_help = { foo: 'step6' };
    history.pushState(state_help, 'Help page 6', '');
    console.log('Added-step6');
    return false;
  });
  // End

  // Details form
  $('#cards').css('height', $('.zip_section').outerHeight());

  $('#name #name_btn').click(function() {
    if( $('#first_name_input').val() == '' || $('#first_name_input').val() == "null") {
      $('#first_name_input').addClass('error');
    }
    if( $('#last_name_input').val() == '' || $('#last_name_input').val() == "null") {
      $('#last_name_input').addClass('error');
      $(this).closest('.card').find('.message_container').fadeIn(500);
    }
    else {
      var this_btn = $(this);
      setTimeout(function() {
        console.log('setTimeout');
        this_btn.closest('#name').removeClass('card-left-0').addClass('card-left--100');
        setTimeout(function() {
          this_btn.closest('#name').removeClass('card-p-a');
        }, 700);
        $('#prog_statuses .quote-name').hide();
        $('#prog_statuses .quote-email').show();

        $('#email').addClass('card-left-0 card-p-a');
        $('#cards').css('height', $('#email').outerHeight());
      }, 300);

      $('#first_name_input').addClass('success');
      $('#last_name_input').addClass('success');

      var state_help = { foo: 'step7' };
      history.pushState(state_help, 'Help page 7', '');
      console.log('Added-step7');
      return false;
    }
  });
  $('#email #email_btn').click(function(e) {
    var sEmail = $('#email_input').val();
    if ($.trim(sEmail).length == 0) {
      // Please enter valid email address
      $('#email_input').addClass('error');
      $(this).closest('.card').find('.message_container').fadeIn(500);
      e.preventDefault();
    }
    if (validateEmail(sEmail)) {
      // Email is valid
      var this_btn = $(this);
      setTimeout(function() {
        this_btn.closest('#email').removeClass('card-left-0').addClass('card-left--100');
        setTimeout(function() {
          this_btn.closest('#email').removeClass('card-p-a');
        }, 700);
        $('#prog_statuses .quote-email').hide();
        $('#prog_statuses .quote-number').show();

        $('.legal-number').show();
        $('#illustration').hide();

        $('#number').addClass('card-left-0 card-p-a');
        $('#cards').css('height', $('#number').outerHeight());
      }, 300);

      $('#email_input').addClass('success');

      var state_help = { foo: 'step8' };
      history.pushState(state_help, 'Help page 8', '');
      console.log('Added-step8');
      return false;
    }
    else {
      // Invalid Email Address
      $('#email_input').addClass('error');
      $(this).closest('.card').find('.message_container').fadeIn(500);
      e.preventDefault();
    }
  });
  var mobile_no;
  $('#number #number_btn').click(function() {
    var number_input = $('#number_input').val()
    var regex = new RegExp(/^\(\d{3}\)\s?\d{3}-\d{4}$/);
    if(number_input.match(regex)) {
      var this_btn = $(this);
      setTimeout(function() {
        this_btn.closest('#number').removeClass('card-left-0').addClass('card-left--100');
        setTimeout(function() {
          this_btn.closest('#number').removeClass('card-p-a');
        }, 700);
        $('#prog_statuses .quote-number').hide();
        $('#prog_statuses .quote-name').show();
        // $('#progress').addClass('progress-hide');
        $('#progress').hide();
        $('#verify_number_header').show();

        mobile_no = $('#number_input').val();
        $('#verify_number_input').val(mobile_no);

        $('.legal-number').hide();
        $('.legal-verify-number').show();

        $('#verify_number').addClass('card-left-0 card-p-a');
        $('#cards').css('height', $('#verify_number').outerHeight());
      }, 300);

      $('#number_input').addClass('success');

      var state_help = { foo: 'step9' };
      history.pushState(state_help, 'Help page 9', '');
      console.log('Added-step9');
      return false;
    }
    else {
      $('#number_input').addClass('error');
      $(this).closest('.card').find('.message_container').fadeIn(500);
    }
  });
  $('#verify_number #verify_number_text_btn').click(function() {
    var verify_number_input = $('#verify_number_input').val()
    var regex = new RegExp(/^\(\d{3}\)\s?\d{3}-\d{4}$/);
    if(verify_number_input.match(regex)) {
      var this_btn = $(this);
      setTimeout(function() {
        this_btn.closest('#verify_number').removeClass('card-left-0').addClass('card-left--100');
        setTimeout(function() {
          this_btn.closest('#number').removeClass('card-p-a');
        }, 700);
        $('#verify_number_header').hide();
        $('#code_header').show();

        $('.legal-verify-number').hide();
        $('#illustration').show();

        $('#code').addClass('card-left-0 card-p-a');
        $('#cards').css('height', $('#code').outerHeight());
      }, 300);

      $('#verify_number_input').addClass('success');

      var state_help = { foo: 'step10' };
      history.pushState(state_help, 'Help page 10', '');
      console.log('Added-step10');
      return false;
    }
    else {
      $('#verify_number_input').addClass('error');
      $(this).closest('.card').find('.message_container').fadeIn(500);
    }
  });
  $('#code #code_btn').click(function() {
    var code_input = $('#code_input').val()
    var regex = new RegExp(/^[0-9]{1,10}$/);
    if(code_input.match(regex)) {
      var this_btn = $(this);
      setTimeout(function() {
        this_btn.closest('#code').removeClass('card-left-0').addClass('card-left--100');
        setTimeout(function() {
          this_btn.closest('#code').removeClass('card-p-a');
        }, 700);

        $('#code_header').hide();
        $('#illustration').hide();

        $('.slide15').addClass('card-left-0 card-p-a');
        $('#cards').css('height', $('.slide15').outerHeight());
      }, 300);

      $('#code_input').addClass('success').focus();

      var state_help = { foo: 'step11' };
      history.pushState(state_help, 'Help page 11', '');
      console.log('Added-step11');
      return false;
    }
    else {
      $('#code_input').addClass('error').focus();
      $(this).closest('.card').find('.message_container').fadeIn(500);
    }
  });
  // Slide15: number-comfirmed!
  $('#number-comfirmed button').click(function() {
    var b = $('#nc-additional-detail').val();
    if (b === "") {
      $('#number-comfirmed .form-field').addClass('error');
      $('#number-comfirmed .error-msg').show();
      return false
    } else {
      $('.slide15').removeClass('card-left-0 card-p-a').addClass('card-left--100');
      $('.slide16').addClass('card-left-0 card-p-a');
      $('#cards').css('height', $('.slide16').outerHeight());

      var state_help = { foo: 'step12' };
      history.pushState(state_help, 'Help page 12', '');
      console.log('Added-step12');
      return false;
    }
  });
  $('.slide15 .skip-link').click(function() {
    $('.slide15').removeClass('card-left-0 card-p-a').addClass('card-left--100');
    $('.slide16').addClass('card-left-0 card-p-a');
    $('#cards').css('height', $('.slide16').outerHeight());

    var state_help = { foo: 'step12' };
    history.pushState(state_help, 'Help page 12', '');
    console.log('Added-step12');
    return false;
  });
  $('#nc-additional-detail').keydown(function() {
    $('#number-comfirmed .form-field').removeClass('error');
  });
  // End
  // Slide16: Your Quote is Ready!
  $('#your-quote button').click(function() {
    var b = $('#yq-project-add').val();
    if (b === "") {
      $('#your-quote .form-field').addClass('error').removeClass('success');
      $('.your-quote-wrap .container-yq').addClass('yq-show-error');
      $('#your-quote .error-msg').show();
      return false
    } else {
      $('.slide16').removeClass('card-left-0 card-p-a').addClass('card-left--100');
      $('#thank_you').addClass('card-left-0 card-p-a');
      $('.code_header').show();
      $('#illustration').show();
      $('#cards').css('height', $('#thank_you').outerHeight());

      var state_help = { foo: 'step13' };
      history.pushState(state_help, 'Help page 13', '');
      console.log('Added-step13');
      return false;
    }
  });
  $('.slide16 .skip-link').click(function() {
    $('.slide16').removeClass('card-left-0 card-p-a').addClass('card-left--100');
    $('#thank_you').addClass('card-left-0 card-p-a');
    $('.code_header').show();
    $('#illustration').show();
    $('#cards').css('height', $('#thank_you').outerHeight());

    var state_help = { foo: 'step13' };
    history.pushState(state_help, 'Help page 13', '');
    console.log('Added-step13');
    return false;
  });
  $('#yq-project-add').keydown(function() {
    $('#your-quote .form-field').removeClass('error');
    $('#your-quote .form-field input').addClass('success');
    $('.your-quote-wrap .container-yq').removeClass('yq-show-error');
    $('#your-quote .error-msg').hide();
  });
  // End

  $('#first_name_input, #last_name_input, #email_input, #number_input, #verify_number_input, #code_input').keydown(function() {
    $(this).removeClass('error').closest('.card').find('.message_container').fadeOut(500);;
  });

  $('.checks li input').click(function() {
    $(this).parent('label').toggleClass('active');
  });
  // End

  // Footer section
  $('#footer #copyright .btn_rr').click(function() {
    $('#how-it-works-info').slideToggle('slow');
    $('html, body').animate({
      scrollTop: $(document).height()
    }, 450);
  });
  // End
});

var state_no = 100;
var state_val;
window.onpopstate = function(event) {
  // console.log('Start cycle again ============================================');
  // console.log('1) state_no: ' + state_no);
  var state = 0;
  var state = event.state;
  // console.log('root: '+ state.foo);
  var forward_state = state.foo;
  var forward_state_no = parseInt(forward_state.slice(4));
  // console.log('forward_state_no: ' + forward_state_no);
  if (state_no > forward_state_no || state_no == forward_state_no) {
    // console.log(state_no + '>' + forward_state_no);
    // console.log('Root: Back');
    state_val = 'back';
  }
  else {
    // console.log(state_no + '<' + forward_state_no);
    // console.log('Root: Forward');
    state_val = 'forward';
  }
  state_no = forward_state_no;
  // console.log('2) state_no: ' + state_no);


  if (state !== null) {
    switch(state.foo) {
      case "step1":
        console.log('========================================================');
        console.log('case "step1":');
        console.log(state);
        console.log('Removed-step2');
        console.log('--------------------------------------------------------');

        if (state_val == 'back') {
          console.log('step1: Back');
          $('#intro').show();

          // Close 'modal-link' Modal
          $('#overlay > section').removeClass('modal-slide-up');
          $('#overlay > section').closest('.modal-warp').removeClass('mw-visible');
          $('body').removeClass('open-modal');
          // End

          // Slides
          $('#work_type').removeClass('hs-slide-opacity-1 hs-slide-left-0');
          // End

          // Form steps
          $('.zip_section').addClass('card-left-0 card-p-a').removeClass('card-left--100');
          $('#name').removeClass('card-left-0 card-p-a');
          $('#progress').hide();
          // End

          $('#cards').css('height', $('.zip_section').outerHeight());
        }
        else {
          console.log('step1: Forward');
        }
        break;

      case "step2":
        console.log('========================================================');
        console.log('case "step2":');
        console.log(state);
        console.log('Removed-step3');
        console.log('--------------------------------------------------------');

        if (state_val == 'back') {
          console.log('step2: Back');
          // Slides
          $('#int_ext').removeClass('hs-slide-opacity-1 hs-slide-left-0');
          // End
        }
        else {
          console.log('step2: Forward');
          $('#zip_btn').trigger('click');
        }
        break;

      case "step3":
        console.log('========================================================');
        console.log('case "step3":');
        console.log(state);
        console.log('Removed-step4');
        console.log('--------------------------------------------------------');

        if (state_val == 'back') {
          console.log('step3: Back');
          // Slides
          if ($('#rooms').hasClass('stete-step-4-A')) {
            console.log(' |--Removed-step4: A');
            $('#rooms').removeClass('hs-slide-opacity-1 hs-slide-left-0 stete-step-4-A');
          }
          if ($('#exterior').hasClass('stete-step-4-B')) {
            console.log(' |--Removed-step4: B');
            $('#exterior').removeClass('hs-slide-opacity-1 hs-slide-left-0 stete-step-4-B');
          }
          // End
        }
        else {
          console.log('step3: Forward');
          $('#work_type ul li button.active').trigger('click');
        }
        break;

      case "step4":
        console.log('========================================================');
        console.log('case "step4":');
        console.log(state);
        console.log('Removed-step5');
        console.log('--------------------------------------------------------');

        if (state_val == 'back') {
          console.log('step4: Back');
          // Slides
          $('#when').removeClass('hs-slide-opacity-1 hs-slide-left-0');
          // End
        }
        else {
          console.log('step4: Forward');
          $('#int_ext ul li button.active').trigger('click');
        }
        break;

      case "step5":
        console.log('========================================================');
        console.log('case "step5":');
        console.log(state);
        console.log('Removed-step6');
        console.log('--------------------------------------------------------');

        if (state_val == 'back') {
          console.log('step5: Back');
          $('#name').removeClass('card-left-0 card-p-a');
          $('#progress').hide();
          // Slides
          $('#work_type, #int_ext, #when').removeClass('hs-slide-left--100').addClass('hs-slide-opacity-1 hs-slide-left-0');
          if ($('#rooms').hasClass('stete-step-4-A')) {
            $('#rooms').removeClass('hs-slide-left--100').addClass('hs-slide-opacity-1 hs-slide-left-0');
          }
          if ($('#exterior').hasClass('stete-step-4-B')) {
            $('#exterior').removeClass('hs-slide-left--100').addClass('hs-slide-opacity-1 hs-slide-left-0');
          }
          // End
        }
        else {
          console.log('step5: Forward');
          $('#rooms ul li button.active').trigger('click');
          $('#exterior_btn').trigger('click');

        }
        break;

      case "step6":
        console.log('========================================================');
        console.log('case "step6":');
        console.log(state);
        console.log('Removed-step7');
        console.log('--------------------------------------------------------');

        if (state_val == 'back') {
          console.log('step6: Back');
          // Form steps
          $('#name').addClass('card-left-0 card-p-a').removeClass('card-left--100');
          $('#email').removeClass('card-left-0');
          $('#prog_status_name').show();
          $('#prog_status_email').hide();
          $('#cards').css('height', $('#name').outerHeight());
          // End
        }
        else {
          console.log('step6: Forward');
          // $('#when ul li button.active').trigger('click');
          $('#slides > section').addClass('hs-slide-left--100').removeClass('hs-slide-left-0');
        }
        break;

      case "step7":
        console.log('========================================================');
        console.log('case "step7":');
        console.log(state);
        console.log('Removed-step8');
        console.log('--------------------------------------------------------');

        if (state_val == 'back') {
          console.log('step7: Back');
          // Form steps
          $('#email').addClass('card-left-0 card-p-a').removeClass('card-left--100');
          $('#number').removeClass('card-left-0');
          $('#prog_status_email').show();
          $('#prog_status_number').hide();
          $('.legal-number').hide();
          $('#cards').css('height', $('#email').outerHeight());
          // End
        }
        else {
          console.log('step7: Forward');
          $('#name_btn').trigger('click');
        }
        break;

      case "step8":
        console.log('========================================================');
        console.log('case "step8":');
        console.log(state);
        console.log('Removed-step9');
        console.log('--------------------------------------------------------');

        if (state_val == 'back') {
          console.log('step8: Back');
          // Form steps
          $('#number').addClass('card-left-0 card-p-a').removeClass('card-left--100');
          $('#verify_number').removeClass('card-left-0');
          $('#progress').show();
          $('#verify_number_header').hide();
          $('#prog_status_name').hide();
          $('#prog_status_number').show();
          $('.legal-number').show();
          $('.legal-verify-number').hide();
          $('#cards').css('height', $('#number').outerHeight());
          // End
        }
        else {
          console.log('step8: Forward');
          $('#email_btn').trigger('click');
        }
        break;

      case "step9":
        console.log('========================================================');
        console.log('case "step9":');
        console.log(state);
        console.log('Removed-step10');
        console.log(state_val);
        console.log('--------------------------------------------------------');

        if (state_val == 'back') {
          console.log('step9: Back');
          // Form steps
          $('#verify_number').addClass('card-left-0 card-p-a').removeClass('card-left--100');
          $('#code').removeClass('card-left-0');
          $('#verify_number_header').show();
          $('#code_header').hide();
          $('.legal-verify-number').show();
          $('#cards').css('height', $('#verify_number').outerHeight());
          // End
        }
        else {
          console.log('step9: Forward');
          $('#number_btn').trigger('click');
        }
        break;

      case "step10":
        console.log('========================================================');
        console.log('case "step10":');
        console.log(state);
        console.log('Removed-step11');
        console.log('--------------------------------------------------------');

        if (state_val == 'back') {
          console.log('step10: Back');
          // Form steps
          $('#code').addClass('card-left-0 card-p-a').removeClass('card-left--100');
          $('.slide15').removeClass('card-left-0');
          $('#cards').css('height', $('#code').outerHeight());
          $('#code_header').show();
          $('.code_header').hide();
          $('#cards').css('height', $('#code').outerHeight());
          // End
        }
        else {
          console.log('step10: Forward');
          $('#verify_number_text_btn').trigger('click');
        }
        break;

      case "step11":
        console.log('========================================================');
        console.log('case "step11":');
        console.log(state);
        console.log('Removed-step12');
        console.log('--------------------------------------------------------');

        if (state_val == 'back') {
          console.log('step11: Back');
          $('.slide15').addClass('card-left-0 card-p-a').removeClass('card-left--100');
          $('.slide16').removeClass('card-left-0');
          $('#cards').css('height', $('.slide15').outerHeight());
        }
        else {
          console.log('step11: Forward');
          $('#code_btn').trigger('click');
        }
        break;

      case "step12":
        console.log('========================================================');
        console.log('case "step12":');
        console.log(state);
        console.log('Removed-step13');
        console.log('--------------------------------------------------------');

        if (state_val == 'back') {
          console.log('step12: Back');
          $('.slide16').addClass('card-left-0 card-p-a').removeClass('card-left--100');
          $('#thank_you').removeClass('card-left-0');
          $('.code_header').hide();
          $('#cards').css('height', $('.slide16').outerHeight());
        }
        else {
          console.log('step12: Forward');
          $('.number-comfirmed form .skip-link').trigger('click');
        }
        break;

      case "step13":
        console.log('========================================================');
        console.log('case "step13":');
        console.log(state);
        console.log('Removed-step14');
        console.log('--------------------------------------------------------');

        if (state_val == 'back') {
          console.log('step13: Back');

          // Need to reload page
        }
        else {
          console.log('step13: Forward');
          $('.your-quote-wrap form .skip-link a').trigger('click');
        }
        break;

      /*case "step14":
        console.log('========================================================');
        console.log('case "step14":');
        console.log(state);
        console.log('Removed-step15');
        console.log('--------------------------------------------------------');

        if (state_val == 'back') {
          console.log('step14: Back');
          
        }
        else {
          console.log('step14: Forward');
          
        }
        break;*/
    }
  }
};

$(window).on('load', function(){
  $('#cards').css('height', $('.zip_section').outerHeight());
});

function validateEmail(sEmail) {
  var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (filter.test(sEmail)) {
    return true;
  }
  else {
    return false;
  }
}

// Enter Your 2-Digit Number End
function loader() {
  var e = document.getElementById('progressBar');
  var f = new ProgressBar.Circle(e, {
    strokeWidth: 6,
    easing: 'linear',
    duration: 15000,
    color: '#888888',
    trailColor: '#E9E9E9',
    trailWidth: 6,
    svgStyle: null,
    text: {
      autoStyleContainer: true
    },
    from: {
      color: '#45D1A6',
      width: 6
    },
    to: {
      color: '#45D1A6',
      width: 6
    },
    step: function(a, b) {
      b.path.setAttribute('stroke', a.color);
      b.path.setAttribute('stroke-width', a.width);
      var c = Math.round(b.value() * 100);
      if (c === 0) {
          b.setText('')
      } else {
          b.setText(c + '%')
      }
      var d = setInterval(function() {
        if (c > 0 && c < 24) {
          f.animate(0.25, {
            duration: 200
          }, function() {});
          clearInterval(d)
        }
        if (c > 24 && c < 49) {
          f.animate(0.50, {
            duration: 500
          }, function() {});
          clearInterval(d)
        }
        if (c > 49 && c < 100) {
          f.animate(1, {
            duration: 600
          }, function() {});
          clearInterval(d)
        }
      }, 1000);
      if (c > 0 && c < 26) {
        $('.progressText').text('Calculating...').fadeIn("slow")
      }
      if (c > 26 && c < 50) {
        var c = $('#enter_zip').val();
        $('.progressText').text('Searching for painters in' + ' ' + c + '...').fadeIn("slow")
      }
      if (c > 50 && c < 100) {
        $('.progressText').text('Finding painters...').fadeIn("slow")
      }
      setTimeout(function() {
        if (c === 100) {
          $('.progressText').text('Painters Found!').fadeIn("slow");
          $('.progressbar-text').html('<img src="images/success-loader.svg" width="50"/>')
        }
      }, 2000);
      setTimeout(function() {
        $('#progress').show();
        $('#cards').show();
        $('#cards .zip_section').addClass('card-left--100').removeClass('card-left-0');
        setTimeout(function() {
          $('#cards .zip_section').removeClass('card-p-a');
        }, 700);
        $('#cards #name').addClass('card-left-0 card-p-a');
        $('.progress-bar-rounded').hide();

        $('#cards').css('height', $('#name').outerHeight());
        $('#progressBar').empty();
      }, 10000);
      return false
    }
  });
  f.text.style.fontFamily = '"CircularStd-Bold';
  f.text.style.fontSize = '24px';
  f.animate(1.0);
  return false
}
