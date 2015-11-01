  function ngSetAllFieldsDirty (form) {
	  
        angular.forEach(form, function (input) {
            if (typeof input !== 'undefined' && input.hasOwnProperty('$viewValue'))
            {
                input.$setDirty();
                input.$setTouched();
            }
               
        });
		
    }
	
     function ngSetAllFieldsPristine (form) {
       
        angular.forEach(form, function (input) {
            if (typeof input !== 'undefined' && input.hasOwnProperty('$viewValue'))
                input.$setPristine();
        });
		
    }