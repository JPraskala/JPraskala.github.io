$(function() 
{
    $('#signup-form').validate(
        {
            rules: {
                name: 'required',
                email: {
                    required: true,
                    email: true
                },
                accountName: {
                    required: true,
                    minlength: 2
                },
                newPassword: {
                    required: true,
                    minlength: 4
                },
                confirmPassword: {
                    required: true,
                    minlength: 4,
                    equalTo: '#newPassword'
                }
            },
            messages: {
                name: 'Please enter your name',
                email: {
                    required: 'Please enter an email address',
                    email: 'Please enter a valid email address'
                },
                accountName: {
                    required: 'Please enter a username',
                    minlength: 'Username must be at least 2 characters'
                },
                newPassword: {
                    required: 'Please enter a password',
                    minlength: 'Password must be at least 4 characters'
                },
                confirmPassword: 'Confirm password must match password'
            },
            submitHandler: function(form) 
            {
                alert('Validation plugin worked!!!');
                form.submit();
            }
        });
})