//function classToggle() {
//    document.querySelector('.h1').classList.toggle('colorR');
//    document.querySelector('.h1').classList.toggle('colorB');
//    console.log('работает')
//}
//document.querySelector('#button').addEventListener('click', classToggle);

(function( $ ) {
    $.fn.accrdion = function( options ) {

        // Default options
        var configuration = $.extend({
            openFirstByDefault: true,   // [true, false]
            displayStyle: 'single',     // ['single', 'any']
            toggleSpeed: 400,           // [milliseconds, 'slow', 'fast']
            scrollToActive: true,       // [true, false]
            scrollSpeed: 500,           // [milliseconds]
        }, options );

        return this.each( function() {
            const $_accrdion_wrapper = $(this);
            const $_accrdion_item = $_accrdion_wrapper.find( '.accrdion-entry' );

            // Add class for styling purposes
            $_accrdion_wrapper.addClass( `accrdion-wrapper ${configuration.displayStyle}` );

            // Set initial behavior
            $_accrdion_item.each( function( index ) {
                $_item = $(this);

                // If openFirstByDefault is true, leave the first one open by default
                if ( configuration.openFirstByDefault && index == 0 ) {
                    $_item.addClass( 'accrdion-active' );
                } else {
                    $_item.find( '.accrdion-content' ).slideUp( configuration.toggleSpeed );
                }
            });

            // Main event handler
            $_accrdion_wrapper.on( 'click', '.accrdion-header', function( event ) {
                const $_clicked = $(this);
                let $_item = $_clicked.parent();
                const $_wrapper = $_item.parent();
                const $_index = $_item.index();

                let $_flag = false;

                if ( configuration.displayStyle === 'single' ) {
                    // Cycle through all of the accordion items
                    $_wrapper.find( '.accrdion-entry' ).each( function( index ) {
                        $_current_item = $(this);

                        // Enable toggle if openFirstByDefault: true and displayStyle: single
                        if ( $_index == index && !$_current_item.hasClass( 'accrdion-active' ) ) {
                            $_flag = true;
                        } else {
                            // Nothing should happen if the current active accordion item's header is clicked
                            if ( $_index != index ) {
                                if ( $_current_item.hasClass( 'accrdion-active' ) ) {
                                    $_current_item.removeClass( 'accrdion-active' );
                                }

                                $_current_item.find( '.accrdion-content' ).slideUp( configuration.toggleSpeed );
                            }
                        }
                    });
                } else {
                    $_flag = true;
                }

                if ( $_flag ) {
                    $_clicked.next().toggle( configuration.toggleSpeed, function() {
                        // Add the active class and scroll to current item top
                        $_item.toggleClass( 'accrdion-active' );

                        $('html, body').animate({
                            scrollTop: $_item.offset().top - 20 // Add breathing space
                        }, configuration.scrollSpeed);
                    });
                }
            });
        });

    }
})( jQuery );
