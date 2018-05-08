/*
 * Implement all your JavaScript in this file!
 */

 var operator = '', isEqualButtonPressed=false;
 var value1='', value2='', result='';

 function debugBefore()
 {
     console.log('BEFORE : Value 1 :' + value1 + ' | value 2 : ' + value2 + ' | opr : ' + operator + ' | result : ' + result);
 }
 function debugAfter()
 {
     console.log('AFTER : Value 1 :' + value1 + ' | value 2 : ' + value2 + ' | opr : ' + operator + ' | result : ' + result);
 }
  
$('button').click(function()
{
    var buttonClicked = $(this);
    
    debugBefore();
    
    console.log('-----------Button pressed val : ' + $(this).val() + ' | button class : ' + buttonClicked.attr('class') + ' | id : ' + buttonClicked.attr('id'));

    //Button clicked is val 0-9
    if(buttonClicked.attr('class') === 'val')
    {
        //val button is pressed but everything is calculated using =, so start new operation
        if(value1 != '' && value2 != '' && result != '' && isEqualButtonPressed == true)
        {
            clearAll();
            storeValues(buttonClicked);
        }//val button is pressed but everything is calculated using opr so continue the operation
        else if(value1 != '' && value2 != '' && result != '' && operator != '')
        {
            moveResultIntoVal1();
            storeValues(buttonClicked);
        }
        else
        {
            storeValues(buttonClicked);
        }
    }
    else if(buttonClicked.attr('class') === 'opr') // arithmatic operator clicked
    {       
        //both values are present, and result is present then, make previous result as value1
        if(value1 != '' && value2 != '' && result != '')
        {
            moveResultIntoVal1();
            //register operator
            operator = buttonClicked.val();
        }
        //both values are present but result not calculated yet then caclulate 
        else if(value1 != '' && value2 != '' && result == '')
        {
            processResult();
            //register new operator
            operator = buttonClicked.val();

        }
        else if(value1 != '' && value2 == '') //only value 1 is present
        {
            //register operator
            operator = buttonClicked.val();
        }
        else
        {
        }
        
    }
    else if(buttonClicked.attr('id') === 'equalsButton')
    {
        if(isEqualButtonPressed == true && result !='')
        {
            value1 = result;
        }
        
        isEqualButtonPressed = processResult();
    }
    else if(buttonClicked.attr('id') === 'clearButton')
    {
        clearAll();
    }   
    
    debugAfter();
});

function moveResultIntoVal1()
{
    value1 = result;
    value2= '';
    result = '';            
}

function storeValues(buttonClicked)
{
    //Check operator
    if(operator != '') //opr is already pressed
    {
        if(value2 == '0' && buttonClicked.val()=='0')
        {
            //0 is not allowed as first char
        }
        else{
            value2 += buttonClicked.val();
            display(value2);
        }
    }
    else
    {
        if(value2 == '0' && buttonClicked.val()=='0')
        {
            //0 is not allowed as first char
        }
        else{
            value1 += buttonClicked.val();
            display(value1);
        }
    }  
}

function clearAll()
{
    value1 = '';
    value2 = '';
    operator = '';
    result='';
    isEqualButtonPressed = false;
    display(result);
}

function processResult()
{
        //Both values need to enterd
        if(value1 != '' && value2 != '' && operator !='' )
        {        
            //convert both values to numbers
            var number1 = Number(value1);
            var number2 = Number(value2);

            if(!isNaN(number1) && !isNaN(number2))
            {
                if(operator == '+')
                {
                    result = add(number1, number2);
                }
                else if(operator == '-')
                {
                    result = subract(number1, number2);
                }
                else if(operator == '*')
                {
                    result = multiply(number1, number2);
                }
                else if(operator == '/')
                {
                    if(number2 === 0)
                    {
                        result= "Infinity";
                    }
                    else
                    {
                        result = divide(value1, value2);
                    }
                }
                
                display(result);

                return true;
            }
            else{//Not a number
                    return false;
            }
        }
        else{//one or both valus not added
                return false;
        }
    }

function display(valueForDisplay)
{
    $('#display').val(valueForDisplay);
}

function add(val1, val2)
{
    return val1 + val2;
}

function subract(val1, val2)
{
    return val1 - val2;
}

function multiply(val1, val2)
{
    return val1 * val2;
}

function divide(val1, val2)
{
    return val1 / val2;
}


