$(function() {
// Init isotope
    isotopeInit('.grid', '#filters', '#sorts');
});


function isotopeInit(grid, filters, sorts) {

// init Isotope
var $grid = $(grid).isotope({
  // itemSelector: '.element-item',
  itemSelector: '.grid-item',
  layoutMode: 'masonry',
  getSortData: {
    title: '.title',
    author: '.author',
    category: '[data-category]'
  }
});

// filter functions
var filterFns = {
};

// bind filter button click
$(filters).on('click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({
    filter: filterValue
  });
});

// bind sort button click
$(sorts).on('click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({
    sortBy: sortByValue
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
