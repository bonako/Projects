// Tutorial followed:
// https://www.youtube.com/watch?v=1nWrIBB_bMA&list=PLoYCgNOIyGABdI2V8I_SWo22tFpgh2s6_&index=5

$(function () {
    $('.tab-panels .tabs li').on('click', function () {
      var $panel = $(this).closest('.tab-panels');

      $panel.find('.tabs li.active').removeClass('active');
      $(this).addClass('active');

      //figure out which panel to show
      var panelToShow = $(this).attr('rel');

      //hide current panel
      $panel.find('.panel.active').slideUp(300, showNextPanel);

      //show next panel
      function showNextPanel() {
        $(this).removeClass('active');

        $('#' + panelToShow).slideDown(300, function () {
          $(this).addClass('active');
        });

      }
    });
  });