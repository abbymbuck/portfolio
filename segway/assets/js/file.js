$(document).ready(function() {
	
    $('.gallery').cycle({
		fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
	
});


$(function() {
    $("#ContactForm").validate(
        {
            rules:
                {
                    FirstName:
                    {
                        required: false,
                        lettersonly: true,
                        maxlength: 30,
                    },
                    
                     LastName:
                    {
                        required: false,
                        lettersonly: true,
                        maxlength: 30,
                    },
                    
                    email:
                    {
                        required: true,
                        maxlength: 30,
                    },

                    PhoneNumber:
                    {
                        required: false,
                        phoneUS: true,
                        maxlength: 14,
                    },

                    Subject: {
                        required: false,
                    },
                    
                    Message: {
                        required: true,
                    }
        
                    
                }
        });
});


$.extend($.validator.messages,{
    required: "required",
    minlength: "Invalid Entry",
    maxlength: "Invalid Entry",
    lettersonly: "Invalid Entry",
    number: "Invalid Entry",
    email: "Invalid Email",
    
});


