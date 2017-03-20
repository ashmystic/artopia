$(function() {
// Init isotope
    isotopeInit('.grid', '#filters', '#sorts', '#sort-order');
    // $('.grid').isotope('reLayout');

    /** Fire a click event to resize isotope after the images are loaded.
    This should be replaced with https://github.com/desandro/imagesloaded  */
    setTimeout(function () {
      $('#filters .show-all').click();
    }, 1000);


});


function isotopeInit(gridContainer, filterContainer, sortContainer, sortOrderContainer) {

// filter functions
var filterFns = {
};

// store filter for each group
var filters = {};

// init Isotope
var $grid = $(gridContainer).isotope({
  itemSelector: '.grid-item',
    layoutMode: 'masonry',
    getSortData: {
      date: '.date',
      title: '.title',
      author: '.author'
      // category: '[data-category]'
    },
    sortAscending : isSortAscending(sortOrderContainer),
  filter: function() {

    var isMatched = true;
    var $this = $(this);

    for ( var prop in filters ) {
      var filter = filters[ prop ];
      // use function if it matches
     filter = filterFns[ filter ] || filter;
      // test each filter
      if ( filter ) {
        isMatched = isMatched && $(this).is( filter );
      }
      // break if not matched
      if ( !isMatched ) {
        break;
      }
    }
    return isMatched;
  }
});

$(filterContainer).on( 'click', '.button', function() {
  var $this = $(this);
  // get group key
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $this.attr('data-filter');
  // arrange, and use filter fn

  $grid.isotope({
    sortBy: getSortByValue(sortContainer),
    sortAscending : isSortAscending(sortOrderContainer)
  });

  // Check for no results
  checkResults($grid);
});



// bind sort button click
$(sortContainer).on('click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({
    sortBy: sortByValue,
    sortAscending : isSortAscending(sortOrderContainer)
  });
});

// bind sort order button click
$(sortOrderContainer).on('click', 'button', function() {
  var sortAsc = $(this).attr('data-sort-asc') === "true";
  $grid.isotope({
    sortBy: getSortByValue(sortContainer),
    sortAscending : sortAsc
  });
});

// change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
});

};

function isSortAscending(sortOrderContainer){
  return $(sortOrderContainer).find('.is-checked').attr('data-sort-asc') === "true";
}
function getSortByValue(sortContainer){
  return $(sortContainer).find('.is-checked').attr('data-sort-by');
}

function checkResults(gridContainer){
  var visibleItemsCount = gridContainer.data('isotope').filteredItems.length;

  if( visibleItemsCount > 0 ){
    $('.no-results').hide();
  }
  else{
    $('.no-results').show();
  }
}
