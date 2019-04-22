
$(function() {
    $("#NewPatientRegistration").validate(
        {
            rules:
                {
                    FirstName:
                    {
                        required: true,
                        lettersonly: true,
                        maxlength: 30,
                    },
                    
                     MiddleInitial:
                    {
                        required: true,
                        lettersonly: true,
                        maxlength: 30,
                    },
                    
                     LastName:
                    {
                        required: true,
                        lettersonly: true,
                        maxlength: 30,
                    },
                    
                    email:
                    {
                        required: true,
                        maxlength: 30,
                    },
                    
                    Birthday:
                    {
                        required: true,
                        maxlength: 10,
                       
                    },
                    
                    Height:
                    {
                        required: true,
                        number: true,
                        maxlength: 3,
                    },
                    
                    Weight:
                    {
                        required: true,
                        number: true,
                        maxlength: 3,
                    },
                    
                    PhoneNumber:
                    {
                        required: true,
                        phoneUS: true,
                        maxlength: 14,
                    },
                    
                    Address:
                    {
                        required: true,
                        maxlength: 30,
                    },
                    
                    City:
                    {
                        required: true,
                        maxlength: 30,
                    },
                    
                    Zip:
                    {
                        required: true,
                        digits: true,
                        maxlength: 5,
                        minlength:5,
                    },
                    
                    gender:
                    {
                        required:true,
                    },
                    
                    MaritalStatus:
                    {
                        required: true,
                    },
                    
                    State:
                    {
                        required: true,
                    },
                    
                    Medication: {
                        required: true,
                    },
        
                    
                }
        });
});

$('#NewPatientRegistration').ready(function() {
    $('#Medication').change(function() {
        
        if('checked', true){
            $('#MedicationList').prop('required', true);
        }
    });
    
    $('#no').change(function(){
        if('checked', true) {
            $('#MedicationList').prop('required', false);
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

