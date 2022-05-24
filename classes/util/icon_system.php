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
 * Custom ecampus icon system
 *
 * @package    theme_ecampus
 * @copyright  2017 Willian Mano - http://conecti.me
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace theme_ecampus\util;

use core\output\icon_system_fontawesome;
use renderer_base;
use pix_icon;

defined('MOODLE_INTERNAL') || die();

/**
 * Class allowing different systems for mapping and rendering icons.
 *
 * @package    theme_ecampus
 * @copyright  2017 Willian Mano - http://conecti.me
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class icon_system extends icon_system_fontawesome {

    /**
     * @var array $map Cached map of moodle icon names to font awesome icon names.
     */
    private $map = [];
 
    /**
     * Get the icon mapping
     *
     * @return array
     */
    public function get_core_icon_map() {
        return [
            'core:docs' => 'fi-rr-info',
            'core:help' => 'fi-rr-interrogation text-info',
            'core:req' => 'fi-rr-exclamation text-danger',
            'core:a/add_file' => 'fi-rr-file',
            'core:a/create_folder' => 'fi-rr-folder',
            'core:a/download_all' => 'fi-rr-download',
            'core:a/help' => 'fi-rr-interrogation text-info',
            'core:a/logout' => 'fi-rr-sign-out-alt',
            'core:a/refresh' => 'fi-rr-refresh',
            'core:a/search' => 'fi-rr-search',
            'core:a/setting' => 'fi-rr-settings',
            'core:a/view_icon_active' => 'fi-rr-apps',
            'core:a/view_list_active' => 'fi-rr-list',
            'core:a/view_tree_active' => 'fi-rr-folder',
            'core:b/bookmark-new' => 'fi-rr-bookmark',
            'core:b/document-edit' => 'fi-rr-pencil',
            'core:b/document-new' => 'fi-rr-file',
            'core:b/document-properties' => 'fi-rr-info',
            'core:b/edit-copy' => 'fi-rr-duplicate',
            'core:b/edit-delete' => 'fi-rr-trash',
            'core:e/abbr' => 'fi-rr-comment-alt',
            'core:e/absolute' => 'fi-rr-target',
            'core:e/accessibility_checker' => 'fi-rr-brush',
            'core:e/acronym' => 'fi-rr-comment-alt',
            'core:e/advance_hr' => 'fi-rr-exchange',
            'core:e/align_center' => 'fi-rr-align-center',
            'core:e/align_left' => 'fi-rr-align-left',
            'core:e/align_right' => 'fi-rr-align-right',
            'core:e/anchor' => 'fi-rr-link',
            'core:e/backward' => 'fi-rr-undo',
            'core:e/bold' => 'fi-rr-bold',
            'core:e/bullet_list' => 'fa-list-ul',
            'core:e/cancel' => 'fi-rr-cross-circle',
            'core:e/cell_props' => 'fi-rr-info',
            'core:e/cite' => 'fa-quote-right',
            'core:e/cleanup_messy_code' => 'fi-rr-broom',
            'core:e/clear_formatting' => 'fi-rr-cursor-text',
            'core:e/copy' => 'fi-rr-copy',
            'core:e/cut' => 'fi-rr-scissors',
            'core:e/decrease_indent' => 'fa-outdent',
            'core:e/delete_col' => 'fi-rr-minus',
            'core:e/delete_row' => 'fi-rr-minus',
            'core:e/delete' => 'fi-rr-minus',
            'core:e/delete_table' => 'fi-rr-minus',
            'core:e/document_properties' => 'fi-rr-info',
            'core:e/emoticons' => 'fi-rr-smile',
            'core:e/find_replace' => 'fi-rr-zoom-in',
            'core:e/file-text' => 'fi-rr-document',
            'core:e/forward' => 'fi-rr-angle-right',
            'core:e/fullpage' => 'fi-rr-arrows',
            'core:e/fullscreen' => 'fi-rr-expand',
            'core:e/help' => 'fi-rr-interrogation',
            'core:e/increase_indent' => 'fa-indent',
            'core:e/insert_col_after' => 'fi-rr-columns',
            'core:e/insert_col_before' => 'fi-rr-columns',
            'core:e/insert_date' => 'fi-rr-calendar',
            'core:e/insert_edit_image' => 'fi-rr-picture',
            'core:e/insert_edit_link' => 'fi-rr-link',
            'core:e/insert_edit_video' => 'fi-rr-film',
            'core:e/insert_file' => 'fi-rr-file',
            'core:e/insert_horizontal_ruler' => 'fa-arrows-h',
            'core:e/insert_nonbreaking_space' => 'fi-rr-square',
            'core:e/insert_page_break' => 'fi-rr-angle-down',
            'core:e/insert_row_after' => 'fi-rr-plus',
            'core:e/insert_row_before' => 'fi-rr-plus',
            'core:e/insert' => 'fi-rr-plus',
            'core:e/insert_time' => 'fi-rr-clock',
            'core:e/italic' => 'fi-rr-italic',
            'core:e/justify' => 'fi-rr-align-justify',
            'core:e/layers_over' => 'fi-rr-angle-up',
            'core:e/layers' => 'fi-rr-expand',
            'core:e/layers_under' => 'fi-rr-angle-down',
            'core:e/left_to_right' => 'fi-rr-angle-right',
            'core:e/manage_files' => 'fi-rr-files',
            'core:e/math' => 'fi-rr-calculator',
            'core:e/merge_cells' => 'fi-rr-compress',
            'core:e/new_document' => 'fi-rr-file',
            'core:e/numbered_list' => 'fa-list-ol',
            'core:e/page_break' => 'fi-rr-angle-down',
            'core:e/paste' => 'fi-rr-treatment',
            'core:e/paste_text' => 'fi-rr-treatment',
            'core:e/paste_word' => 'fi-rr-treatment',
            'core:e/prevent_autolink' => 'fi-rr-exclamation',
            'core:e/preview' => 'fi-rr-zoom-in',
            'core:e/print' => 'fi-rr-print',
            'core:e/question' => 'fi-rr-interrogation',
            'core:e/redo' => 'fi-rr-rotate-right',
            'core:e/remove_link' => 'fa-chain-broken',
            'core:e/remove_page_break' => 'fi-rr-trash',
            'core:e/resize' => 'fi-rr-expand',            
            'core:e/restore_draft' => 'fi-rr-undo',
            'core:e/restore_last_draft' => 'fi-rr-undo',
            'core:e/right_to_left' => 'fi-rr-angle-left',
            'core:e/row_props' => 'fi-rr-info',
            'core:e/save' => 'fi-rr-disk',
            'core:e/screenreader_helper' => 'fi-rr-braille',
            'core:e/search' => 'fi-rr-search',
            'core:e/select_all' => 'fa-arrows-h',
            'core:e/show_invisible_characters' => 'fi-rr-eye-crossed',
            'core:e/source_code' => 'fa-code',
            'core:e/special_character' => 'fi-rr-edit',
            'core:e/spellcheck' => 'fi-rr-check',
            'core:e/split_cells' => 'fa-columns',
            'core:e/strikethrough' => 'fa-strikethrough',
            'core:e/styleparagraph' => 'fi-rr-brands-fonts',
            'core:e/styleprops' => 'fi-rr-info',
            'core:e/subscript' => 'fa-subscript',
            'core:e/superscript' => 'fa-superscript',
            'core:e/table_props' => 'fi-rr-apps',
            'core:e/table' => 'fi-rr-apps',
            'core:e/template' => 'fi-rr-notebook',
            'core:e/text_color_picker' => 'fi-rr-fill',
            'core:e/text_color' => 'fi-rr-fill',
            'core:e/text_highlight_picker' => 'fi-rr-bulb',
            'core:e/text_highlight' => 'fi-rr-bulb',
            'core:e/tick' => 'fi-rr-check',
            'core:e/toggle_blockquote' => 'fa-quote-left',
            'core:e/underline' => 'fi-rr-underline',
            'core:e/undo' => 'fi-rr-undo',
            'core:e/visual_aid' => 'fi-rr-world',
            'core:e/visual_blocks' => 'fi-rr-headphones',
            'theme:fp/add_file' => 'fi-rr-file',
            'theme:fp/alias' => 'fi-rr-share',
            'theme:fp/alias_sm' => 'fi-rr-share',
            'theme:fp/check' => 'fi-rr-check',
            'theme:fp/create_folder' => 'fi-rr-folder',
            'theme:fp/cross' => 'fi-rr-remove',
            'theme:fp/download_all' => 'fi-rr-download',
            'theme:fp/help' => 'fi-rr-interrogation',
            'theme:fp/link' => 'fi-rr-link',
            'theme:fp/link_sm' => 'fi-rr-link',
            'theme:fp/logout' => 'fi-rr-sign-out-alt',
            'theme:fp/path_folder' => 'fi-rr-folder',
            'theme:fp/path_folder_rtl' => 'fi-rr-folder',
            'theme:fp/refresh' => 'fi-rr-refresh',
            'theme:fp/search' => 'fi-rr-search',
            'theme:fp/setting' => 'fi-rr-settings',
            'theme:fp/view_icon_active' => 'fi-rr-apps',
            'theme:fp/view_list_active' => 'fi-rr-list',
            'theme:fp/view_tree_active' => 'fi-rr-folder',
            'core:i/addblock' => 'fi-rr-plus-small',
            'core:i/assignroles' => 'fi-rr-user-add',
            'core:i/backup' => 'fi-rr-add folder',
            'core:i/badge' => 'fi-rr-shield',
            'core:i/breadcrumbdivider' => 'fi-rr-angle-right',
            'core:i/calc' => 'fi-rr-calculator',
            'core:i/calendar' => 'fi-rr-calendar',
            'core:i/calendareventdescription' => 'fi-rr-align-left',
            'core:i/calendareventtime' => 'fi-rr-clock',
            'core:i/caution' => 'fi-rr-exclamation text-warning',
            'core:i/checked' => 'fi-rr-check',
            'core:i/checkedcircle' => 'fi-rr-check',
            'core:i/checkpermissions' => 'fi-rr-unlock',
            'core:i/cohort' => 'fi-rr-users-alt',
            'core:i/competencies' => 'fi-rr-check',
            'core:i/completion_self' => 'fi-rr-user',
            'core:i/dashboard' => 'fi-rr-home',
            'core:i/categoryevent' => 'fi-rr-cube',
            'core:i/course' => 'fi-rr-graduation-cap',
            'core:i/courseevent' => 'fi-rr-school',
            'core:i/customfield' => 'fa-hand-o-right',
            'core:i/db' => 'fi-rr-database',
            'core:i/delete' => 'fi-rr-trash',
            'core:i/down' => 'fi-rr-angle-down',
            'core:i/dragdrop' => 'fi-rr-arrows',
            'core:i/duration' => 'fi-rr-clock',
            'core:i/emojicategoryactivities' => 'fi-rr-basketball',
            'core:i/emojicategoryanimalsnature' => 'fi-rr-leaf',
            'core:i/emojicategoryflags' => 'fi-rr-flag',
            'core:i/emojicategoryfooddrink' => 'fi-rr-utensils',
            'core:i/emojicategoryobjects' => 'fi-rr-comment-alt',
            'core:i/emojicategoryrecent' => 'fi-rr-clock',
            'core:i/emojicategorysmileyspeople' => 'fi-rr-smile',
            'core:i/emojicategorysmileysemotion' => 'fi-rr-smile',
            'core:i/emojicategorysymbols' => 'fi-rr-heart',
            'core:i/emojicategorytravelplaces' => 'fi-rr-plane-alt',
            'core:i/emojicategorypeoplebody' => 'fi-rr-user',
            'core:i/emojicategoryrecent' => 'fi-rr-clock',
            'core:i/edit' => 'fi-rr-pencil',
            'core:i/email' => 'fi-rr-envelope',
            'core:i/empty' => 'fi-rr-options',
            'core:i/enrolmentsuspended' => 'fi-rr-pause',
            'core:i/enrolusers' => 'fi-rr-user-add',
            'core:i/expired' => 'fi-rr-exclamation text-warning',
            'core:i/export' => 'fi-rr-download',
            'core:i/files' => 'fi-rr-document',
            'core:i/filter' => 'fi-rr-filter',
            'core:i/flagged' => 'fi-rr-flag',
            'core:i/folder' => 'fi-rr-folder',
            'core:i/grade_correct' => 'fi-rr-check text-success',
            'core:i/grade_incorrect' => 'fi-rr-remove text-danger',
            'core:i/grade_partiallycorrect' => 'fi-rr-check',
            'core:i/grades' => 'fi-rr-test',
            'core:i/grading' => 'fa-magic',
            'core:i/gradingnotifications' => 'fi-rr-bell',
            'core:i/groupevent' => 'fi-rr-users-alt',
            'core:i/groupn' => 'fi-rr-user',
            'core:i/group' => 'fi-rr-users-alt',
            'core:i/groups' => 'fi-rr-user-following',
            'core:i/groupv' => 'fi-rr-portrait',
            'core:i/home' => 'fi-rr-home',
            'core:i/hide' => 'fi-rr-eye',
            'core:i/hierarchylock' => 'fi-rr-lock',
            'core:i/import' => 'fi-rr-angle-up',
            'core:i/incorrect' => 'fi-rr-exclamation',
            'core:i/info' => 'fi-rr-info',
            'core:i/invalid' => 'fi-rr-cross text-danger',
            'core:i/item' => 'fi-rr-circle',
            'core:i/loading' => 'fi-br-spinner fi-rr-loading',
            'core:i/loading_small' => 'fi-br-spinner fi-rr-loading',
            'core:i/location' => 'fi-rr-marker',
            'core:i/lock' => 'fi-rr-lock',
            'core:i/log' => 'fi-rr-list',
            'core:i/mahara_host' => 'fi-rr-id-badge',
            'core:i/manual_item' => 'fi-rr-square',
            'core:i/marked' => 'fi-rr-circle',
            'core:i/marker' => 'fi-rr-circle',
            'core:i/mean' => 'fi-rr-calculator',
            'core:i/menu' => 'fi-rr-menu-dots-vertical',
            'core:i/menubars' => 'fi-rr-apps',
            'core:i/messagecontentaudio' => 'fi-rr-headphones',
            'core:i/messagecontentimage' => 'fi-rr-picture',
            'core:i/messagecontentvideo' => 'fi-rr-film',
            'core:i/messagecontentmultimediageneral' => 'fi-rr-play-alt',
            'core:i/mnethost' => 'fi-rr-link',
            'core:i/moodle_host' => 'fi-rr-graduation-cap',
            'core:i/moremenu' => 'fi-rr-menu-dots',
            'core:i/move_2d' => 'fi-rr-arrows',
            'core:i/muted' => 'fa-microphone-slash',
            'core:i/navigationitem' => 'fi-rr-filter',
            'core:i/ne_red_mark' => 'fi-rr-cross',
            'core:i/new' => 'fi-rr-bolt',
            'core:i/news' => 'fa-newspaper-o',
            'core:i/next' => 'fi-rr-angle-right',
            'core:i/nosubcat' => 'fi-rr-add',
            'core:i/notifications' => 'fi-rr-bell',
            'core:i/open' => 'fi-rr-folder',
            'core:i/outcomes' => 'fa-tasks',
            'core:i/payment' => 'fi-rr-money',
            'core:i/permissionlock' => 'fi-rr-lock',
            'core:i/permissions' => 'fi-rr-edit',
            'core:i/persona_sign_in_black' => 'fi-rr-male',
            'core:i/portfolio' => 'fi-rr-id-badge',
            'core:i/preview' => 'fi-rr-zoom-in',
            'core:i/previous' => 'fi-rr-angle-left',
            'core:i/privatefiles' => 'fi-rr-file',
            'core:i/progressbar' => 'fi-rr-loading fi-rr-spinner',
            'core:i/publish' => 'fi-rr-share',
            'core:i/questions' => 'fi-rr-interrogation',
            'core:i/reload' => 'fi-rr-refresh',
            'core:i/report' => 'fi-rr-stats',
            'core:i/repository' => 'fa-hdd-o',
            'core:i/restore' => 'fi-rr-angle-up',
            'core:i/return' => 'fi-rr-undo',
            'core:i/risk_config' => 'fi-rr-exclamation text-muted',
            'core:i/risk_managetrust' => 'fi-rr-shield-exclamation text-warning',
            'core:i/risk_personal' => 'fi-rr-exclamation text-info',
            'core:i/risk_spam' => 'fi-rr-exclamation text-primary',
            'core:i/risk_xss' => 'fi-rr-shield-exclamation text-danger',
            'core:i/role' => 'fi-rr-stethoscope',
            'core:i/rss' => 'fa-rss',
            'core:i/rsssitelogo' => 'fi-rr-graduation-cap',
            'core:i/scales' => 'fa-balance-scale',
            'core:i/scheduled' => 'fi-rr-calendar text-success',
            'core:i/search' => 'fi-rr-search',
            'core:i/section' => 'fi-rr-options',
            'core:i/sendmessage' => 'fi-rr-paper-plane',
            'core:i/settings' => 'fi-rr-settings',
            'core:i/show' => 'fi-rr-eye-crossed',
            'core:i/siteevent' => 'fi-rr-world',
            'core:i/star' => 'fi-rr-star',
            'core:i/star-rating' => 'fi-rr-star',
            'core:i/stats' => 'fi-rr-chat-arrow-grow',
            'core:i/switch' => 'fi-rr-exchange',
            'core:i/switchrole' => 'fi-rr-head-side-thinking',
            'core:i/trash' => 'fi-rr-trash',
            'core:i/twoway' => 'fa-arrows-h',
            'core:i/unchecked' => 'fi-rr-square',
            'core:i/uncheckedcircle' => 'fi-rr-circle',
            'core:i/unflagged' => 'fi-rr-flag',
            'core:i/unlock' => 'fi-rr-unlock',
            'core:i/up' => 'fi-rr-angle-up',
            'core:i/userevent' => 'fi-rr-user',
            'core:i/user' => 'fi-rr-user',
            'core:i/users' => 'fi-rr-users',
            'core:i/valid' => 'fi-rr-check text-success',
            'core:i/warning' => 'fi-rr-exclamation text-warning',
            'core:i/window_close' => 'fi-rr-cross',
            'core:i/withsubcat' => 'fi-rr-plus',
            'core:m/USD' => 'fi-rr-dollar',
            'core:t/addcontact' => 'fi-rr-user-add',
            'core:t/add' => 'fi-rr-plus',
            'core:t/approve' => 'fi-rr-thumbs-up',
            'core:t/assignroles' => 'fi-rr-following',
            'core:t/award' => 'fi-rr-trophy',
            'core:t/backpack' => 'fi-rr-shopping-bag',
            'core:t/backup' => 'fi-rr-angle-down',
            'core:t/block' => 'fi-rr-ban',
            'core:t/block_to_dock_rtl' => 'fi-rr-angle-right',
            'core:t/block_to_dock' => 'fi-rr-angle-left',
            'core:t/calc_off' => 'fi-rr-calculator', // TODO: Change to better icon once we have stacked icon support or more icons.
            'core:t/calc' => 'fi-rr-calculator',
            'core:t/check' => 'fi-rr-check',
            'core:t/cohort' => 'fi-rr-users',
            'core:t/collapsed_empty_rtl' => 'fi-rr-plus',
            'core:t/collapsed_empty' => 'fi-rr-plus',
            'core:t/collapsed_rtl' => 'fi-rr-plus',
            'core:t/collapsed' => 'fi-rr-plus',
            'core:t/collapsedcaret' => 'fi-rr-caret-right',
            'core:t/contextmenu' => 'fi-rr-settings',
            'core:t/copy' => 'fi-rr-copy',
            'core:t/delete' => 'fi-rr-trash',
            'core:t/dockclose' => 'fi-rr-cross',
            'core:t/dock_to_block_rtl' => 'fi-rr-angle-right',
            'core:t/dock_to_block' => 'fi-rr-angle-left',
            'core:t/download' => 'fi-rr-download',
            'core:t/down' => 'fi-rr-angle-down',
            'core:t/downlong' => 'fi-rr-arrow-down',
            'core:t/dropdown' => 'fi-rr-settings',
            'core:t/editinline' => 'fi-rr-edit',
            'core:t/edit_menu' => 'fi-rr-settings',
            'core:t/editstring' => 'fi-rr-edit',
            'core:t/edit' => 'fi-rr-settings',
            'core:t/emailno' => 'fi-rr-ban',
            'core:t/email' => 'fi-rr-envelope',
            'core:t/emptystar' => 'fi-rr-star',
            'core:t/enrolusers' => 'fi-rr-user-add',
            'core:t/expanded' => 'fi-rr-caret-down',
            'core:t/go' => 'fi-rr-play',
            'core:t/grades' => 'fi-rr-test',
            'core:t/groupn' => 'fi-rr-user',
            'core:t/groups' => 'fi-rr-user-follow',
            'core:t/groupv' => 'fi-rr-portrait',
            'core:t/hide' => 'fi-rr-eye',
            'core:t/left' => 'fi-rr-undo',
            'core:t/less' => 'fi-rr-caret-up',
            'core:t/locked' => 'fi-rr-lock',
            'core:t/lock' => 'fi-rr-unlock',
            'core:t/locktime' => 'fi-rr-lock',
            'core:t/markasread' => 'fi-rr-check',
            'core:t/messages' => 'fi-rr-comment-alt',
            'core:t/message' => 'fi fi-rr-comment',
            'core:t/more' => 'fi-rr-caret-down',
            'core:t/move' => 'fa-arrows-v',
            'core:t/online' => 'fi-rr-circle',
            'core:t/passwordunmask-edit' => 'fi-rr-pencil',
            'core:t/passwordunmask-reveal' => 'fi-rr-eye',
            'core:t/portfolioadd' => 'fi-rr-plus',
            'core:t/preferences' => 'fi-rr-settings-sliders',
            'core:t/preview' => 'fi-rr-zoom-in',
            'core:t/print' => 'fi-rr-print',
            'core:t/removecontact' => 'fi-rr-delete-user',
            'core:t/reload' => 'fi-rr-refresh',
            'core:t/reset' => 'fi-rr-refresh',
            'core:t/restore' => 'fi-rr-arrow-circle-up',
            'core:t/right' => 'fi-rr-angle-right',
            'core:t/sendmessage' => 'fi-rr-paper-plane',
            'core:t/show' => 'fi-rr-eye-crossed',
            'core:t/sort_by' => 'fa-sort-amount-asc',
            'core:t/sort_asc' => 'fa-sort-asc',
            'core:t/sort_desc' => 'fa-sort-desc',
            'core:t/sort' => 'fi-rr-sort',
            'core:t/stop' => 'fi-rr-stop',
            'core:t/switch_minus' => 'fi-rr-minus',
            'core:t/switch_plus' => 'fi-rr-plus',
            'core:t/switch_whole' => 'fi-rr-square',
            'core:t/tags' => 'fi-rr-label',
            'core:t/unblock' => 'fi-rr-comment',
            'core:t/unlocked' => 'fi-rr-unlock',
            'core:t/unlock' => 'fi-rr-lock',
            'core:t/up' => 'fi-rr-angle-up',
            'core:t/uplong' => 'fi-rr-arrow-up',
            'core:t/user' => 'fi-rr-user',
            'core:t/viewdetails' => 'fi-rr-layers',
        ];
    }

    /**
     * Overridable function to get a mapping of all icons.
     * Defi-rrult is to do no mapping.
     *
     * @return array
     */
    public function get_icon_name_map() {
        if ($this->map === []) {
            $cache = \cache::make('theme_ecampus', 'fontawesomeecampusiconmapping');

            $this->map = $cache->get('mapping');

            if (empty($this->map)) {
                $this->map = $this->get_core_icon_map();
                $callback = 'get_fontawesome_icon_map';

                if ($pluginsfunction = get_plugins_with_function($callback)) {
                    foreach ($pluginsfunction as $plugintype => $plugins) {
                        foreach ($plugins as $pluginfunction) {
                            $pluginmap = $pluginfunction();
                            $this->map += $pluginmap;
                        }
                    }
                }
                $cache->set('mapping', $this->map);
            }

        }
        return $this->map;
    }

    /**
     * Get the AMD icon system name.
     *
     * @return string
     */
    public function get_amd_name() {
        return 'core/icon_system_fontawesome';
    }

    /**
     * Renders the pix icon using the icon system
     *
     * @param renderer_base $output
     * @param pix_icon $icon
     * @return mixed
     */
    public function render_pix_icon(renderer_base $output, pix_icon $icon) {
        $subtype = 'pix_icon_fontawesome';
        $subpix = new $subtype($icon);

        $data = $subpix->export_for_template($output);

        if (!$subpix->is_mapped()) {
            $data['unmappedIcon'] = $icon->export_for_template($output);
        }
        return $output->render_from_template('core/pix_icon_fontawesome', $data);
    }

}
