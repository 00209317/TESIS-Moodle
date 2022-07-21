define(['jquery', 'core/ajax'], function(jQuery, Ajax) {

    window.jQuery = jQuery;

    var SELECTORS = {
        BTN_CONTAC: '#btn-contact',
        FOOTER_CONTAC: '#top-footer',
        FAS_BTN: '#fasBtn',
    };
    
    var hiddenFooter = function(){
        this.registerEventListeners();
    }

    /* var AccessibilityModal = function() {
        this.registerEventListeners();
    } */
    
    hiddenFooter.prototype.registerEventListeners = function() {
        jQuery(SELECTORS.BTN_CONTAC).click(function (element){
            this.start(jQuery(SELECTORS.FOOTER_CONTAC).hasClass("d-none"))
        }.bind(this))
    }
    
    hiddenFooter.prototype.start = function(flag){
        if(flag){
            jQuery(SELECTORS.FOOTER_CONTAC).removeClass('d-none');
            jQuery(SELECTORS.FAS_BTN).removeClass('fa-chevron-up');
            jQuery(SELECTORS.FAS_BTN).addClass('fa-chevron-down');
            
        } else {
            jQuery(SELECTORS.FOOTER_CONTAC).addClass('d-none');
            jQuery(SELECTORS.FAS_BTN).removeClass('fa-chevron-down');
            jQuery(SELECTORS.FAS_BTN).addClass('fa-chevron-up');
        }
    }
    return {
        'init': function() {
            return new hiddenFooter();
        }
    };

}); 

