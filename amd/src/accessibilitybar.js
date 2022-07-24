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
        SITE_COLOR: '#sitecolor_color1, #sitecolor_color2, #sitecolor_color3, #sitecolor_color4, #sitecolor_colordark, #sitecolor_colortri, #sitecolor_colorpto, #sitecolor_colordeu, #sitecolor_colortri1, #sitecolor_colorpto1, #sitecolor_colordeu1',
        SITE_FONT: '#fontsite_odafont, #fontsite_default'
    };

    var fontsizeClass = null;
    var fontsizeClassOp = null;
    var fontsizeClassPrev = null;
    //var fontsizeClassSize = null;
    var fontsizeCurrentAction = null;

    var sitecolorCurrentAction = null;
    var sitefontCurrentAction = null;
    var myClass = null

    var AccessibilityBar = function() {
        myClass = this

        var exist = document.querySelector("#action-menu-toggle-1");
        var mybar = document.querySelector("#accessibilitybar");
        var mybarButton = document.querySelector("#themesettings-control-mod");
        var navbarcontent = document.querySelector("#navbar_content_control");
        var toolbutton = document.querySelector("#tool_navbar_control_content");
        
        
        if(exist != null){
            mybar.classList.add('allvisible');
            navbarcontent.classList.add('allvisible');
            toolbutton.classList.add('allvisible');
            this.registerEventListeners();
            //this.getFontSize();
            //this.getColor();
            //this.reloadFontSite();
        } else {
            mybarButton.classList.add('hidden-display');
            //navbartoolsmodal
        }

        
        //this.toggleFontsizeButtons();
        

        //this.getUserSession();
    };

    AccessibilityBar.prototype.registerEventListeners = function() {
        jQuery(SELECTORS.FONT_SIZE).click(function(element) {
            var btn = jQuery(element.currentTarget);

            fontsizeCurrentAction = btn.data('action');
            myClass.fontSize();
            //myClass.setFontSize(fontsizeCurrentAction);

            
        }.bind(this)); 

        jQuery(SELECTORS.SITE_COLOR).click(function(element) {
            var btn = jQuery(element.currentTarget);

            sitecolorCurrentAction = btn.data('action');

            myClass.siteColor();
        }.bind(this));

        jQuery(SELECTORS.SITE_FONT).click(function(element) {
            var btn = jQuery(element.currentTarget);

            sitefontCurrentAction = btn.data('action');

            myClass.siteFont();
        }.bind(this));
    };

    AccessibilityBar.prototype.getColor = function() {
        var request = Ajax.call([{
            methodname: 'theme_ecampus_getthemesettingscolor',
            args: {}
        }]);

        request[0].done(function(result) {
            //document.getElementById('fonttype').value = result.fonttype;
            sitecolorCurrentAction = result.sitecolor;  
            myClass.reloadSitecolorClass();              
            
        }).fail(function(error){
        }) 
    }

    AccessibilityBar.prototype.getFontSize = function() {
        var request = Ajax.call([{
            methodname: 'theme_ecampus_getthemesettingsfontsize',
            args: {}
        }]);

        request[0].done(function(result) {
            //document.getElementById('fonttype').value = result.fonttype;
            myClass.setFontSize(result.sitefontsize)

            
            //myClass.reloadSitecolorClass();              
            
        }).fail(function(error){
        }) 
    }

    AccessibilityBar.prototype.setFontSize = function(item){
        fontsizeClass = item;

        if(item === null || item === 'default'){
            fontsizeCurrentAction = 'reset'
            fontsizeClassOp = null;
        } else {
            if (item.includes('fontsize-inc-')){
                fontsizeCurrentAction = 'increase'
                fontsizeClassOp = "dec"
            } 
            if (item.includes('fontsize-dec-')){
                fontsizeCurrentAction = 'decrease'
                fontsizeClassOp = "inc"
            }
    
            //var itemarr = item.split('-');
            
            //fontsizeClassOp = itemarr[1];
            //fontsizeClassSize = itemarr[2];
        }
        myClass.reloadFontsizeClass();
    }

    AccessibilityBar.prototype.reloadFontSite = function() {
        var request = Ajax.call([{
            methodname: 'theme_ecampus_getthemesettingsfont',
            args: {}
        }]);


        request[0].done(function(result) {
            //document.getElementById('fonttype').value = result.fonttype;
            if(result.fonttype != 'odafont') {
                jQuery('#fontsite_default').addClass('disabled');
                jQuery('#fontsite_odafont').removeClass('disabled');
            } else {
                jQuery('#fontsite_default').removeClass('disabled');
                jQuery('#fontsite_odafont').addClass('disabled');
            }
            
        }).fail(function(error){
        }) 
        
    };

    AccessibilityBar.prototype.fontSize = function() {
        var request = Ajax.call([{
            methodname: 'theme_ecampus_fontsize',
            args: {
                action: fontsizeCurrentAction
            }
        }]);

        request[0].done(function(result) {
            //document.getElementById('fonttype').value = result.fonttype;
            myClass.setFontSize(result.newfontsizeclass)
            //console.log("responce size" + result.newfontsizeclass)
            //myClass.reloadSitecolorClass();              
            
        }).fail(function(error){
        }) 

        //console.log("finish size")
            //myClass.reloadSitecolorClass();   

        
    };
    
    AccessibilityBar.prototype.getUserSession = function() {
        var request = Ajax.call([{
            methodname: 'theme_ecampus_getUserSession',
            args: {}
        }]);
        request[0].done(function(result) {
            if(result.isLogedin == "ok"){

                myClass.getColor();
                myClass.reloadFontSite();
                myClass.toggleFontsizeButtons();
                myClass.getFontSize();
            } else {
            }
            
        }).fail(function(error){
        });
    };

    AccessibilityBar.prototype.reloadFontsizeClass = function() {
        if(fontsizeClassPrev !== null && fontsizeClassPrev !== 'default'){
            //console.log("remuevo" + fontsizeClassPrev)
            jQuery('body').removeClass(fontsizeClassPrev);
        } else {
            //console.log("no remuevo" + fontsizeClassPrev)
        }
        //myClass.toggleFontsizeButtons();
        if(fontsizeClass !== null && fontsizeClass !== 'default'){
            //console.log("seteo" + fontsizeClass)
            jQuery('body').addClass(fontsizeClass);
        } /*else {
            console.log("no seteo" + fontsizeClass)
            //jQuery('body').addClass('default');
        }*/
        fontsizeClassPrev = fontsizeClass;

        myClass.toggleFontsizeButtons();
    };

    AccessibilityBar.prototype.toggleFontsizeButtons = function() {
        if (fontsizeClass === null || fontsizeClass === 'default') {
            jQuery('#fontsize_reset').addClass('disabled');
            jQuery('#fontsize_inc').removeClass('disabled');
            jQuery('#fontsize_dec').removeClass('disabled');
        }

        if (fontsizeClass !== null && fontsizeClass !== 'default') {
            jQuery('#fontsize_reset').removeClass('disabled');
        }

        if (fontsizeClassOp === 'inc') {
            if (fontsizeClass == "fontsize-inc-5" || fontsizeClass == "fontsize-inc-6") {
                jQuery('#fontsize_inc').addClass('disabled');
            } else {
                jQuery('#fontsize_inc').removeClass('disabled');
            }
        }

        if (fontsizeClassOp === 'dec') {
            if (fontsizeClass == "fontsize-dec-5" || fontsizeClass == "fontsize-dec-6") {
                jQuery('#fontsize_dec').addClass('disabled');
            } else {
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
            myClass.reloadSitecolorClass();
        }.bind(this));
    };

    AccessibilityBar.prototype.siteFont = function() {

        var request = Ajax.call([{
            methodname: 'theme_ecampus_sitefont',
            args: {
                action: sitefontCurrentAction
            }
        }]); 

        request[0].then(function(responce) {
            document.location.reload(true);
        }).fail(function(error){
            var message = error.message;
        });

    };

    AccessibilityBar.prototype.reloadSitecolorClass = function() {
        jQuery('body').removeClass(function(index, className) {
            return (className.match(/(^|\s)sitecolor-color-\S+/g) || []).join(' ');
        });


        if (sitecolorCurrentAction !== 'reset') {
            jQuery('body').addClass(sitecolorCurrentAction);
            
        }
    };

    return {
        'init': function() {
            return new AccessibilityBar();
        }
    };
});