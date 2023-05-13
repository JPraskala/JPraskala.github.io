// $(function() 
// {
//     if ($('main').length == 1 && $('.practice-forms').length == 1 && $('#dataTypeSubmit').length == 1) 
//     {
//         $('#dataTypeSubmit').click(function() 
//         {
//             if ($('#dataType').length == 1 && $('#variableName').length == 1 && $('#variableValue').length == 1 && $('#result').length == 1) 
//             {
//                 $('#dataType').on('change', function() 
//                 {
//                     const variableNameValue = $('#variableName').val();
//                     const variableValueInput = $('#variableValue').val();
//                     if (variableNameValue != '' ) 
//                     {
//                         switch ($(this).attr('value')) 
//                         {
//                             case 'integer':
//                                 const variableValueInputInt = parseInt(variableValueInput);
//                                 if (variableValueInputInt != NaN) 
//                                 {
//                                     $('#result').html('Good Job :)');
//                                 }
//                                 else 
//                                 {
//                                     $('#result').html('Something went wrong, try again :(');
//                                 }
//                                 break;
//                             case 'string':
//                                 if (variableValueInput != '') 
//                                 {
//                                     $('#result').html('Good Job :)');
//                                 }
//                                 else 
//                                 {
//                                     $('#result').html('Good Job :). Strings can also be empty.')
//                                 }
//                                 break;
//                             case 'boolean':
//                                 if (variableValueInput == 'true' || variableValueInput == 'false') 
//                                 {
//                                     $('#result').html('Good Job :)');
//                                 }
//                                 else 
//                                 {
//                                     $('#result').html('Something went wrong, try again :(');
//                                 }
//                                 break;
//                             case 'float':
//                                 const variableValueInputFloat = parseFloat(variableValueInput);
//                                 if (variableValueInputFloat != NaN) 
//                                 {
//                                     $('#result').html('Good Job :)');
//                                 }
//                                 else 
//                                 {
//                                     $('#result').html('Something went wrong, try again :(');
//                                 }
//                                 break;
//                         }
//                     }
//                     else 
//                     {
//                         $('#result').html('The name for the variable was blank');
//                     }
//                 })
//             }
//             else 
//             {
//                 alert('Everything is not properly setup to continue.');
//             }
//         })
//     }
//     else 
//     {
//         alert('Essential elements in main do not exist or main element does not exist.');
//     }
// })

$(function() 
{
    if ($('main').length == 1 && $('#dataTypeForm').length == 1 && $('#dataTypeSubmit').length == 1) 
    {
        $('#dataTypeSubmit').on('click', function(event) 
        {
            if ($('#dataType').length == 1 && $('#variableName').length == 1 && $('#variableValue').length == 1 && $('#result').length == 1) 
            {
                event.preventDefault();
                const dataType = $('#dataType').val();
                const variableName = $('#variableName').val();
                const variableValue = $('#variableValue').val();

                if (dataType != '#' && variableName != '') 
                {
                    const result = `${variableName} = ${variableValue} (${dataType})`;
                    switch (dataType) 
                    {
                        case 'integer':
                            if (!isNaN(parseInt(variableValue))) 
                            {
                                $('#result').text(result);
                            }
                            else 
                            {
                                $('#result').text('Value could not be converted to a number.');
                            }
                            break;
                        case 'string':
                            $('#result').text(result);
                            break;
                        case 'boolean':
                            if (variableValue == 'True' || variableValue == 'False') 
                            {
                                $('#result').text(result);
                            }
                            else 
                            {
                                $('#result').text('Variable not set to a Boolean value. Try again.');
                            }
                            break;
                        case 'float':
                            if (!isNaN(parseFloat(variableValue))) 
                            {
                                $('#result').text(result);
                            }
                            else 
                            {
                                $('#result').text('Value could not be converted into a float.');
                            }
                            break;
                    }
                }
                else 
                {
                    $('#result').text('dataType was not selected or the variable name is blank.');
                }
            }
            else 
            {
                alert('Inputs not setup.');
            }
        })
    }
    else 
    {
        alert('Main components not setup for dataTypes file.');
    } 
})