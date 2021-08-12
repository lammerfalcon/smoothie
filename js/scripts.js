
    $(document).ready(function () {

       
      $('.mobile_nav .open').on('click', function(){
          
        if($(this).text() == 'Menu') {
            $('ul.mobile').show();
            $(this).text('Close menu');
        } else {
            $('ul.mobile').hide();
            $(this).text('Menu');
        }
      });
        });
