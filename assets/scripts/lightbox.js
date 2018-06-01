$( function() {
  $("figure.zoomable").click(
    function() {
      console.log( "You clicked a figure!" );
      $(this).siblings(".figure-zoomed").removeClass('active');
      $(this).toggle('active');
      // Add logic to pass var(filter.class)
      // $('ul.filter-secondary.filterClass').addClass('active');
    }
  );
  $(".figure-zoomed.active .close").click(function() {
    $(this).parent(".figure-zoomed").toggleClass('active');
  });
  $("figure").click(
    function() {
      console.log( "You clicked a figure!" );
  });
  //toggleClass('active');
  //.siblings()
});
