// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
				{/* <script type="text/javascript" src="https://dev-cleardigital.pantheonsite.io/wp/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
				<script type="text/javascript" src="https://dev-cleardigital.pantheonsite.io/wp/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></script>
				<script type="text/javascript" defer="defer" src="https://dev-cleardigital.pantheonsite.io/app/plugins/gravityforms/js/gravityforms.min.js?ver=2.8.15" id="gform_gravityforms-js"></script>
				<script type="text/javascript" defer="defer" src="https://dev-cleardigital.pantheonsite.io/app/plugins/gravityforms/assets/js/dist/utils.min.js?ver=50c7bea9c2320e16728e44ae9fde5f26" id="gform_gravityforms_utils-js"></script>
				<script type="text/javascript" defer="defer" src="https://dev-cleardigital.pantheonsite.io/app/plugins/gravityforms/js/duplicate-submissions.min.js?ver=1" id="gform_duplicate_submissions-js"></script>
				<script type="text/javascript" defer="defer" src="https://dev-cleardigital.pantheonsite.io/app/plugins/gravityforms/js/preview.min.js?ver=2.8.15" id="gform_preview-js"></script> */}

				<link rel="stylesheet" href="https://dev-cleardigital.pantheonsite.io/app/plugins/gravityforms/legacy/css/formreset.min.css?ver=2.8.15" />
				<link rel="stylesheet" href="https://dev-cleardigital.pantheonsite.io/app/plugins/gravityforms/legacy/css/formsmain.min.css?ver=2.8.15" />
			    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"/>

				<script
          dangerouslySetInnerHTML={{
            __html: `

var gform_i18n = {"datepicker":{"days":{"monday":"Mo","tuesday":"Tu","wednesday":"We","thursday":"Th","friday":"Fr","saturday":"Sa","sunday":"Su"},"months":{"january":"January","february":"February","march":"March","april":"April","may":"May","june":"June","july":"July","august":"August","september":"September","october":"October","november":"November","december":"December"},"firstDay":1,"iconText":"Select date"}};
var gf_legacy_multi = [];
var gform_gravityforms = {"strings":{"invalid_file_extension":"This type of file is not allowed. Must be one of the following:","delete_file":"Delete this file","in_progress":"in progress","file_exceeds_limit":"File exceeds size limit","illegal_extension":"This type of file is not allowed.","max_reached":"Maximum number of files reached","unknown_error":"There was a problem while saving the file on the server","currently_uploading":"Please wait for the uploading to complete","cancel":"Cancel","cancel_upload":"Cancel this upload","cancelled":"Cancelled"},"vars":{"images_url":"https:\/\/dev-cleardigital.pantheonsite.io\/app\/plugins\/gravityforms\/images"}};
var gf_global = {"gf_currency_config":{"name":"U.S. Dollar","symbol_left":"$","symbol_right":"","symbol_padding":"","thousand_separator":",","decimal_separator":".","decimals":2,"code":"USD"},"base_url":"https:\/\/dev-cleardigital.pantheonsite.io\/app\/plugins\/gravityforms","number_formats":[],"spinnerUrl":"https:\/\/dev-cleardigital.pantheonsite.io\/app\/plugins\/gravityforms\/images\/spinner.svg","version_hash":"d476e72485814e781d6c97b831095e1f","strings":{"newRowAdded":"New row added.","rowRemoved":"Row removed","formSaved":"The form has been saved.  The content contains the link to return and complete the form."}};



			`,
          }}
        />
				<script
          dangerouslySetInnerHTML={{
            __html: `
var gform_theme_config = {"common":{"form":{"honeypot":{"version_hash":"d476e72485814e781d6c97b831095e1f"}}},"hmr_dev":"","public_path":"https:\/\/dev-cleardigital.pantheonsite.io\/app\/plugins\/gravityforms\/assets\/js\/dist\/"};
            `,
          }}
        />
		
				<script
          dangerouslySetInnerHTML={{
            __html: `
 var gform;gform||(document.addEventListener("gform_main_scripts_loaded",function(){gform.scriptsLoaded=!0}),window.addEventListener("DOMContentLoaded",function(){gform.domLoaded=!0}),gform={domLoaded:!1,scriptsLoaded:!1,initializeOnLoaded:function(o){gform.domLoaded&&gform.scriptsLoaded?o():!gform.domLoaded&&gform.scriptsLoaded?window.addEventListener("DOMContentLoaded",o):document.addEventListener("gform_main_scripts_loaded",o)},hooks:{action:{},filter:{}},addAction:function(o,n,r,t){gform.addHook("action",o,n,r,t)},addFilter:function(o,n,r,t){gform.addHook("filter",o,n,r,t)},doAction:function(o){gform.doHook("action",o,arguments)},applyFilters:function(o){return gform.doHook("filter",o,arguments)},removeAction:function(o,n){gform.removeHook("action",o,n)},removeFilter:function(o,n,r){gform.removeHook("filter",o,n,r)},addHook:function(o,n,r,t,i){null==gform.hooks[o][n]&&(gform.hooks[o][n]=[]);var e=gform.hooks[o][n];null==i&&(i=n+"_"+e.length),gform.hooks[o][n].push({tag:i,callable:r,priority:t=null==t?10:t})},doHook:function(n,o,r){var t;if(r=Array.prototype.slice.call(r,1),null!=gform.hooks[n][o]&&((o=gform.hooks[n][o]).sort(function(o,n){return o.priority-n.priority}),o.forEach(function(o){"function"!=typeof(t=o.callable)&&(t=window[t]),"action"==n?t.apply(null,r):r[0]=t.apply(null,r)})),"filter"==n)return r[0]},removeHook:function(o,n,t,i){var r;null!=gform.hooks[o][n]&&(r=(r=gform.hooks[o][n]).filter(function(o,n,r){return!!(null!=i&&i!=o.tag||null!=t&&t!=o.priority)}),gform.hooks[o][n]=r)}}); 


			`,
          }}
        />
		
				<script
          dangerouslySetInnerHTML={{
            __html: `
 gform.initializeOnLoaded( function() { jQuery(document).on('gform_post_render', function(event, formId, currentPage){if(formId == 8) {} } );jQuery(document).on('gform_post_conditional_logic', function(event, formId, fields, isInit){} ) } );
			`,
          }}
        />

				{/* <script type="text/javascript" src="https://dev-cleardigital.pantheonsite.io/wp/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2" id="wp-polyfill-inert-js"></script>
				<script type="text/javascript" src="https://dev-cleardigital.pantheonsite.io/wp/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.14.0" id="regenerator-runtime-js"></script>
				<script type="text/javascript" src="https://dev-cleardigital.pantheonsite.io/wp/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0" id="wp-polyfill-js"></script>
				<script type="text/javascript" src="https://dev-cleardigital.pantheonsite.io/wp/wp-includes/js/dist/dom-ready.min.js?ver=f77871ff7694fffea381" id="wp-dom-ready-js"></script>
				<script type="text/javascript" src="https://dev-cleardigital.pantheonsite.io/wp/wp-includes/js/dist/hooks.min.js?ver=2810c76e705dd1a53b18" id="wp-hooks-js"></script> */}
				<script type="text/javascript" defer="defer" src="https://dev-cleardigital.pantheonsite.io/app/plugins/gravityforms/assets/js/dist/vendor-theme.min.js?ver=54e7080aa7a02c83aa61fae430b9d869" id="gform_gravityforms_theme_vendors-js"></script>
				<script type="text/javascript" defer="defer" src="https://dev-cleardigital.pantheonsite.io/app/plugins/gravityforms/assets/js/dist/scripts-theme.min.js?ver=bab19fd84843dabc070e73326d787910" id="gform_gravityforms_theme-js"></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
