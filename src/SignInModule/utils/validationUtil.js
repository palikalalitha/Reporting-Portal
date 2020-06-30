export function ValidateUserName(userInput)
{
if(userInput==="")
{
    return {
        shouldShowErrorMessgae:true,
        errorMessage1:"Required"
    }
}
else if(userInput.length<7)
{
    return {
        shouldShowErrorMessgae:true,
        errorMessage1:"Invalid userName"
    }
}
else
{
    return {
        shouldShowErrorMessgae:false,
        errorMessage1:""
    }
}
}
export function ValidatePasword(userInput)
{
if(userInput==="")
{
    return {
        shouldShowErrorMessgae:true,
        errorMessage1:"Required"
    }
}
else if(userInput.length<7)
{
    return {
        shouldShowErrorMessgae:true,
        errorMessage1:"Invalid Password"
    }
}
else
{
    return {
        shouldShowErrorMessgae:false,
        errorMessage1:""
    }
}
}