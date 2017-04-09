$(function() {
    var gridContainer = '.grid',
    gridItemContainer = '.grid-item',
    filterContainer = '#filters',
    sortContainer = '#sorts',
    sortOrderContainer = '#sort-order';

    // Initialize isotope once images are loaded
    imagesLoaded($(gridContainer), function() {
        isotopeInit(gridContainer, gridItemContainer, filterContainer, sortContainer, sortOrderContainer);
    });

});

function isotopeInit(gridContainer, gridItemContainer, filterContainer, sortContainer, sortOrderContainer) {

    // filter functions
    var filterFns = {};

    // store filter for each group
    var filters = {};

    // init Isotope
    var $grid = $(gridContainer).isotope({
        itemSelector: gridItemContainer,
        layoutMode: 'masonry',
        sortBy: getSortByValue(sortContainer),
        sortAscending: isSortAscending(sortOrderContainer),
        getSortData: {
            date: '.date',
            title: '.title',
            author: '.author'
            // category: '[data-category]'
        },

        filter: function() {

            var isMatched = true;
            var $this = $(this);

            for (var prop in filters) {
                var filter = filters[prop];
                // use function if it matches
                filter = filterFns[filter] || filter;
                // test each filter
                if (filter) {
                    isMatched = isMatched && $(this).is(filter);
                }
                // break if not matched
                if (!isMatched) {
                    break;
                }
            }
            return isMatched;
        }
    });

    // Initialize sorting
    // $grid.isotope({
    //     sortBy: getSortByValue(sortContainer),
    //     sortAscending: isSortAscending(sortOrderContainer)
    // });

    // Check for no results
    checkResults($grid);

    $(filterContainer).on('click', '.button', function() {
        var $this = $(this);
        // get group key
        var $buttonGroup = $this.parents('.button-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        filters[filterGroup] = $this.attr('data-filter');
        // arrange, and use filter fn

        $grid.isotope({
            sortBy: getSortByValue(sortContainer),
            sortAscending: isSortAscending(sortOrderContainer)
        });

        // Check for no results
        checkResults($grid);
    });

    // bind sort button click
    $(sortContainer).on('click', 'button', function() {
        var sortByValue = $(this).attr('data-sort-by');
        $grid.isotope({
            sortBy: sortByValue,
            sortAscending: isSortAscending(sortOrderContainer)
        });
    });

    // bind sort order button click
    $(sortOrderContainer).on('click', 'button', function() {
        var sortAsc = $(this).attr('data-sort-asc') === "true";
        $grid.isotope({
            sortBy: getSortByValue(sortContainer),
            sortAscending: sortAsc
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

    // Hack to trigger sorting on page load
    $(sortContainer+' button:last-child').click();
    $(sortContainer+' button:first-child').click();
};

function isSortAscending(sortOrderContainer) {
    return $(sortOrderContainer).find('.is-checked').attr('data-sort-asc') === "true";
}

function getSortByValue(sortContainer) {
    return $(sortContainer).find('.is-checked').attr('data-sort-by');
}

function checkResults(gridContainer) {
    var visibleItemsCount = gridContainer.data('isotope').filteredItems.length;

    if (visibleItemsCount > 0) {
        $('.no-results').hide();
    } else {
        $('.no-results').show();
    }
}
