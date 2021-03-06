jQuery(document).ready(function($){

	var Cf7myUploadFile = $('.wpcf7-drag-n-drop-file'),
		TextOJB = allegra_cf7_uploader.drag_n_drop_upload

	$.each( Cf7myUploadFile, function(){
		var allegra_input_file = $(this);
		$(this).CodeDropz_Uploader({
			'color'				:	'#fff',
			'ajax_url'			: 	allegra_cf7_uploader.ajax_url,
			'max_upload_size'	: 	allegra_input_file.data('limit'),
			'supported_type'	:	allegra_input_file.data('type'),
			'max_file'			:	allegra_input_file.data('max'),
			'text'				: 	TextOJB.text,
			'separator'			: 	TextOJB.or_separator,
			'button_text'		:	TextOJB.browse,
			'server_max_error'	: 	TextOJB.server_max_error,
			'on_success'		:	function( progressBar, response ){

				// Progressbar Object
				var progressDetails = $('#' + progressBar, allegra_input_file.parents('.codedropz-upload-wrapper') );

				// If it's complete remove disabled attribute in button
				if( $('span.complete', $('#' + progressBar)).hasClass('complete') ) {
					$('input[type="submit"]', allegra_input_file.parents('form') ).removeClass('disabled').prop( "disabled", false );
				}

				// Append hidden input field
				progressDetails
					.find('.allegra-upload-details')
						.append('<span><input type="hidden" name="'+ allegra_input_file.attr('name') +'[]" value="'+ response.data.path +'/'+ response.data.file +'"></span>');
			}
		});
	});

	// Fires when an Ajax form submission has completed successfully, and mail has been sent.
	document.addEventListener( 'wpcf7mailsent', function( event ) {
		// Reset upload list
		if( Cf7myUploadFile.length > 0 ) {
			$.each( Cf7myUploadFile, function(){
				$('.allegra-upload-status', $('span.' + $(this).attr('name'))).remove();
			});
		}else {
			$('.allegra-upload-status', $('span.' + Cf7myUploadFile.attr('name'))).remove();
		}
		// Reset count files
		count_files=0;
	}, false );

});