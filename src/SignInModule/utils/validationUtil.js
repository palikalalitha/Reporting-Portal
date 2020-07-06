export function ValidateUserName(userInput) {
   if (userInput === '') {
      return {
         shouldShowErrorMessgae: true,
         errorMessage: 'Required'
      }
   } else if (userInput.length < 7) {
      return {
         shouldShowErrorMessgae: true,
         errorMessage: 'Invalid userName'
      }
   } else {
      return {
         shouldShowErrorMessgae: false,
         errorMessage: ''
      }
   }
}
export function ValidatePassword(userInput) {
   if (userInput === '') {
      return {
         shouldShowErrorMessgae: true,
         errorMessage: 'Required'
      }
   } else if (userInput.length < 7) {
      return {
         shouldShowErrorMessgae: true,
         errorMessage: 'Invalid Password'
      }
   } else {
      return {
         shouldShowErrorMessgae: false,
         errorMessage: ''
      }
   }
}
