export function variantScroll() {
    $(document).ready(function () {
        var carousel = $('.product-variants');
        var carouselWidth = carousel.width();
        var itemWidth = $('#variantCarousel li').outerWidth(true);
        var visibleItems = Math.ceil(carouselWidth / itemWidth);
        var totalItems = $('#variantCarousel li').length;
        var lastVisibleIndex = Math.max(totalItems - visibleItems, 0);
        var currentIndex = 0;

        $('#variantPrevBtn').click(function() {
            if (currentIndex > 0) {
            currentIndex -= 5;
            moveCarousel();
            }
        });

        $('#variantNextBtn').click(function() {
            if (currentIndex < lastVisibleIndex) {
            currentIndex += 5;
            moveCarousel();
            console.log(currentIndex);
            }
        });

        function moveCarousel() {
            var translateX = -(currentIndex * itemWidth);
            $('#variantCarousel').css('transform', 'translateX(' + translateX + 'px)');
        }
    });
}
