// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Contain the logic for accessibility bar.
 *
 * @package    theme_ecampus
 * @copyright  2020 Willian Mano - http://conecti.me
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
define(['jquery', 'core/ajax'], function(jQuery, Ajax) {

    window.jQuery = jQuery;

    var SELECTORS = {
        FONT_SIZE: '#fontsize_dec, #fontsize_reset, #fontsize_inc',
        SITE_COLOR: '#sitecolor_color1, #sitecolor_color2, #sitecolor_color3, #sitecolor_color4',
        SITE_FONT: '#fontsite_odafont, #fontsite_default'
    };

    var fontsizeClass = null;
    var fontsizeClassOp = null;
    var fontsizeClassSize = null;
    var fontsizeCurrentAction = null;
    var sitecolorCurrentAction = null;
    var sitefontCurrentAction = null;
    var myClass = null

    var AccessibilityBar = function() {
        myClass = this
        

        //this.setFontSize(classList);

        

        this.getColor();

        this.reloadFontSite();

        this.toggleFontsizeButtons();

        this.registerEventListeners();

        this.getFontSize();
        
        
    };

    AccessibilityBar.prototype.registerEventListeners = function() {
        jQuery(SELECTORS.FONT_SIZE).click(function(element) {
            var btn = jQuery(element.currentTarget);

            fontsizeCurrentAction = btn.data('action');

            this.fontSize();
        }.bind(this)); 

        jQuery(SELECTORS.SITE_COLOR).click(function(element) {
            var btn = jQuery(element.currentTarget);

            sitecolorCurrentAction = btn.data('action');

            this.siteColor();
        }.bind(this));

        jQuery(SELECTORS.SITE_FONT).click(function(element) {
            var btn = jQuery(element.currentTarget);

            sitefontCurrentAction = btn.data('action');

            this.siteFont();
        }.bind(this));
    };

    AccessibilityBar.prototype.getColor = function() {
        var request = Ajax.call([{
            methodname: 'theme_ecampus_getthemesettingscolor',
            args: {}
        }]);

        request[0].done(function(result) {
            console.log("color 1 is: " + result.sitecolor);
            //document.getElementById('fonttype').value = result.fonttype;
            sitecolorCurrentAction = result.sitecolor;  
            myClass.reloadSitecolorClass();              
            
        }).fail(function(error){
            console.log("color 1 is: fail")
        }) 
    }

    AccessibilityBar.prototype.getFontSize = function() {
        var request = Ajax.call([{
            methodname: 'theme_ecampus_getthemesettingsfontsize',
            args: {}
        }]);

        request[0].done(function(result) {
            console.log("size 1 is: " + result.sitefontsize);
            //document.getElementById('fonttype').value = result.fonttype;
            myClass.setFontSize(result.sitefontsize)

            
            myClass.reloadSitecolorClass();              
            
        }).fail(function(error){
            console.log("size 1 is: fail")
        }) 
    }

    AccessibilityBar.prototype.setFontSize = function(item){
        console.log('setfont')

        if (item.includes('fontsize-inc-')){
            fontsizeCurrentAction = 'increase'
        } 
        if (item.includes('fontsize-dec-')){
            fontsizeCurrentAction = 'decrease'
        }

        console.log('setfont' + item)
        var itemarr = item.split('-');
        fontsizeClass = item;
        fontsizeClassOp = itemarr[1];
        fontsizeClassSize = itemarr[2];
        this.reloadFontsizeClass();
    
    }

    AccessibilityBar.prototype.reloadFontSite = function() {
        var request = Ajax.call([{
            methodname: 'theme_ecampus_getthemesettingsfont',
            args: {}
        }]);


        request[0].done(function(result) {
            console.log("font 1 is: " + result.fonttype)
            //document.getElementById('fonttype').value = result.fonttype;
            if(result.fonttype != 'odafont') {
                jQuery('#fontsite_default').addClass('disabled');
                jQuery('#fontsite_odafont').removeClass('disabled');
            } else {
                jQuery('#fontsite_default').removeClass('disabled');
                jQuery('#fontsite_odafont').addClass('disabled');
            }
            
        }).fail(function(error){
            console.log("font 1 is: fail")
        }) 
        
    };

    AccessibilityBar.prototype.fontSize = function() {
        var request = Ajax.call([{
            methodname: 'theme_ecampus_fontsize',
            args: {
                action: fontsizeCurrentAction
            }
        }]);

        request[0].done(function() {
            this.reloadFontsizeClass();
        }.bind(this));
    };

    AccessibilityBar.prototype.reloadFontsizeClass = function() {
        console.log("reload size");
        if (fontsizeCurrentAction === 'reset'
            || (fontsizeCurrentAction === 'increase' && fontsizeClass === 'fontsize-dec-1')
            || (fontsizeCurrentAction === 'decrease' && fontsizeClass === 'fontsize-inc-1')
        ) {
            jQuery('body').removeClass(fontsizeClass);
            fontsizeClass = null;
            fontsizeClassOp = null;
            fontsizeClassSize = null;

            this.toggleFontsizeButtons();

            return;
        }

        if (fontsizeCurrentAction === 'increase') {
            if (fontsizeClassSize === null) {
                fontsizeClass = 'fontsize-inc-1';
                fontsizeClassOp = 'inc';
                fontsizeClassSize = 1;
            } else if (fontsizeClassOp === 'inc' && fontsizeClassSize < 6) {
                jQuery('body').removeClass(fontsizeClass);
                fontsizeClassSize++;
                fontsizeClass = 'fontsize-inc-' + fontsizeClassSize;
            } else if (fontsizeClassOp === 'dec') {
                jQuery('body').removeClass(fontsizeClass);
                fontsizeClassSize--;
                fontsizeClass = 'fontsize-dec-' + fontsizeClassSize;
            }

            jQuery('body').addClass(fontsizeClass);
        }

        if (fontsizeCurrentAction === 'decrease') {
            if (fontsizeClassSize === null) {
                fontsizeClass = 'fontsize-dec-1';
                fontsizeClassOp = 'dec';
                fontsizeClassSize = 1;
            } else if (fontsizeClassOp === 'dec' && fontsizeClassSize < 6) {
                jQuery('body').removeClass(fontsizeClass);
                fontsizeClassSize++;
                fontsizeClass = 'fontsize-dec-' + fontsizeClassSize;
            } else if (fontsizeClassOp === 'inc') {
                jQuery('body').removeClass(fontsizeClass);
                fontsizeClassSize--;
                fontsizeClass = 'fontsize-inc-' + fontsizeClassSize;
            }

            jQuery('body').addClass(fontsizeClass);
        }

        this.toggleFontsizeButtons();
    };

    AccessibilityBar.prototype.toggleFontsizeButtons = function() {
        if (fontsizeClass === null) {
            jQuery('#fontsize_reset').addClass('disabled');
            jQuery('#fontsize_inc').removeClass('disabled');
            jQuery('#fontsize_dec').removeClass('disabled');
        }

        if (fontsizeClass !== null) {
            jQuery('#fontsize_reset').removeClass('disabled');
        }

        if (fontsizeClassOp === 'inc') {
            if (fontsizeClassSize == 6) {
                jQuery('#fontsize_inc').addClass('disabled');
            }

            if (fontsizeClassSize < 6) {
                jQuery('#fontsize_inc').removeClass('disabled');
            }
        }

        if (fontsizeClassOp === 'dec') {
            if (fontsizeClassSize == 6) {
                jQuery('#fontsize_dec').addClass('disabled');
            }

            if (fontsizeClassSize < 6) {
                jQuery('#fontsize_dec').removeClass('disabled');
            }
        }
    };

    AccessibilityBar.prototype.siteColor = function() {
        var request = Ajax.call([{
            methodname: 'theme_ecampus_sitecolor',
            args: {
                action: sitecolorCurrentAction
            }
        }]);

        request[0].done(function() {
            this.reloadSitecolorClass();
        }.bind(this));
    };

    AccessibilityBar.prototype.siteFont = function() {
        console.log("change font: " + sitefontCurrentAction);

        var request = Ajax.call([{
            methodname: 'theme_ecampus_sitefont',
            args: {
                action: sitefontCurrentAction
            }
        }]); 

        request[0].then(function(responce) {
            console.log("change font success");
            document.location.reload(true);
        }).fail(function(error){
            var message = error.message;
            console.log("change font error " + message);
        });

        console.log("change font exit");
    };

    AccessibilityBar.prototype.reloadSitecolorClass = function() {
        jQuery('body').removeClass(function(index, className) {
            return (className.match(/(^|\s)sitecolor-color-\S+/g) || []).join(' ');
        });

        console.log("cahnge color reloadSitecolorClass")

        if (sitecolorCurrentAction !== 'reset') {
            jQuery('body').addClass(sitecolorCurrentAction);
            
            console.log("change color reloadSitecolorClass" + sitecolorCurrentAction)
        }
    };

    return {
        'init': function() {
            return new AccessibilityBar();
        }
    };
});