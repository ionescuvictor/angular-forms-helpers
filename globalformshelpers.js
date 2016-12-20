var MyFormsHelpers = {
	
	ngSetAllFieldsDirty: function (form) {	  
		angular.forEach(form, function (input) {
		    if (typeof input !== 'undefined' && input.hasOwnProperty('$viewValue'))
		    {
			input.$setDirty();
			input.$setTouched();
		    }
        }),
	ngSetAllFieldsPristine: function (form) {       
		angular.forEach(form, function (input) {
		    if (typeof input !== 'undefined' && input.hasOwnProperty('$viewValue'))
			input.$setPristine();
		});
	}
		
    }
		
 
