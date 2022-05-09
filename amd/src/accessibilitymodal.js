define(['jquery', 'core/ajax'], function(jQuery, Ajax) {

    window.jQuery = jQuery;

    var SELECTORS = {
        ACCESS_BTN: '#themesettings-control-mod',
        BACKGROUND: '#accessibilitybar_modal',
        MODAL: '#accessibilitybar',
    };

    var AccessibilityModal = function() {
        this.registerEventListeners();
    }

    AccessibilityModal.prototype.registerEventListeners = function() {
        console.log('render onclick')
        jQuery(SELECTORS.ACCESS_BTN).click(function (element) {
            console.log('my, onclick push')
            this.start(jQuery(SELECTORS.MODAL).hasClass( "hidden-display" ))
        }.bind(this));
        
        jQuery(SELECTORS.BACKGROUND).click(function (element) {
            console.log('my, onclick push')
            this.start(false)
        }.bind(this)); 
    }

    AccessibilityModal.prototype.start = function(flag) {
        if(flag){
            jQuery(SELECTORS.MODAL).addClass('show-display-flex');
            jQuery(SELECTORS.MODAL).removeClass('hidden-display');

            jQuery(SELECTORS.BACKGROUND).addClass('show-display-flex');
            jQuery(SELECTORS.BACKGROUND).removeClass('hidden-display');
        } else {
            jQuery(SELECTORS.MODAL).removeClass('show-display-flex');
            jQuery(SELECTORS.MODAL).addClass('hidden-display');

            jQuery(SELECTORS.BACKGROUND).removeClass('show-display-flex');
            jQuery(SELECTORS.BACKGROUND).addClass('hidden-display');
        }
    };

    return {
        'init': function() {
            return new AccessibilityModal();
      
        }
    };

});