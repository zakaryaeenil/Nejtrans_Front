
  /* Custom filtering function which will search data in column four between two values */
  $.fn.dataTable.ext.search.push(
  function( settings, data, dataIndex ) {
  var min = $('#min').val();
  var max = $('#max').val();
  var date =  new Date(data[2]); // use data for the age column

    if (
      ( min === null && max === null ) ||
      ( min === null && date <= max ) ||
      ( min <= date   && max === null ) ||
      ( min <= date   && date <= max )
    )
{
  return true;
}
  return false;
}
  );
  $(document).ready(function() {
    // Create date inputs
    minDate = new DateTime($('#min'), {
      format: 'MMMM Do YYYY'
    });
    maxDate = new DateTime($('#max'), {
      format: 'MMMM Do YYYY'
    });

  var table = $('#range-search').DataTable({
  "dom": "<'dt--top-section'<'row'<'col-12 col-sm-6 d-flex justify-content-sm-start justify-content-center'l><'col-12 col-sm-6 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3'f>>>" +
  "<'table-responsive'tr>" +
  "<'dt--bottom-section d-sm-flex justify-content-sm-between text-center'<'dt--pages-count  mb-sm-0 mb-3'i><'dt--pagination'p>>",
  "oLanguage": {
  "oPaginate": { "sPrevious": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>', "sNext": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' },
  "sInfo": "Showing page _PAGE_ of _PAGES_",
  "sSearch": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
  "sSearchPlaceholder": "Search...",
  "sLengthMenu": "Results :  _MENU_",
},
  "stripeClasses": [],
  "lengthMenu": [7, 10, 20, 50],
  "pageLength": 7
});
  // Event listener to the two range filtering inputs to redraw on input
    // Refilter the table
    $('#min, #max').on('change', function () {
      table.draw();
    });
} );
