<?php
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
 * Theme ecampus functions and service definitions.
 *
 * @package   theme_ecampus
 * @copyright 2019 Willian Mano - http://conecti.me
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$functions = array(
    'theme_ecampus_fontsize' => array(
        'classname' => 'theme_ecampus\api\accessibility',
        'classpath' => 'theme_ecampus/classes/api/accessibility.php',
        'methodname' => 'fontsize',
        'description' => 'Increase or decrease the site font size.',
        'type' => 'write',
        'ajax' => true
    ),
    'theme_ecampus_sitecolor' => array(
        'classname' => 'theme_ecampus\api\accessibility',
        'methodname' => 'sitecolor',
        'description' => 'Changes the site color aspect.',
        'type' => 'write',
        'ajax' => true
    ),
    'theme_ecampus_sitefont' => array(
        'classname' => 'theme_ecampus\api\accessibility',
        'methodname' => 'sitefont',
        'description' => 'Changes the site font aspect.',
        'type' => 'write',
        'ajax' => true
    ),
    'theme_ecampus_savethemesettings' => array(
        'classname' => 'theme_ecampus\api\accessibility',
        'methodname' => 'savethemesettings',
        'description' => 'Store the user theme settings.',
        'type' => 'write',
        'ajax' => true
    ),
    'theme_ecampus_getthemesettings' => array(
        'classname' => 'theme_ecampus\api\accessibility',
        'methodname' => 'getthemesettings',
        'description' => 'Get the user theme settings.',
        'type' => 'read',
        'ajax' => true
    ),
    'theme_ecampus_getthemesettingsfont' => array(
        'classname' => 'theme_ecampus\api\accessibility',
        'classpath' => 'theme_ecampus\classes\api\accessibility.php',
        'methodname' => 'getthemesettingsfont',
        'description' => 'Get the user theme settings font.',
        'type' => 'read',
        'ajax' => true
    ),
    'theme_ecampus_getthemesettingscolor' => array(
        'classname' => 'theme_ecampus\api\accessibility',
        'classpath' => 'theme_ecampus\classes\api\accessibility.php',
        'methodname' => 'getthemesettingscolor',
        'description' => 'Get the user theme settings color.',
        'type' => 'read',
        'ajax' => true
    ),
    'theme_ecampus_getthemesettingsfontsize' => array(
        'classname' => 'theme_ecampus\api\accessibility',
        'classpath' => 'theme_ecampus\classes\api\accessibility.php',
        'methodname' => 'getthemesettingsfontsize',
        'description' => 'Get the user theme settings font size.',
        'type' => 'read',
        'ajax' => true
    ),
    'theme_ecampus_getUserSession' => array(
        'classname' => 'theme_ecampus\api\accessibility',
        'classpath' => 'theme_ecampus\classes\api\accessibility.php',
        'methodname' => 'getUserSession',
        'description' => 'Get is Session User.',
        'type' => 'read',
        'ajax' => true
    )
);
