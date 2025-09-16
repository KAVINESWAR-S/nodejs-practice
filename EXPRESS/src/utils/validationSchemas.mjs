export const createUserValidationSchema={
    user_name:{
        notEmpty:{
            errorMessage:"User is empty"
        },
        isLength:{
            options:{min:3,max:12},
            errorMessage:"length is not met"
        }
    },
    age:{
        notEmpty:{
            errorMessage:"age is empty"
        }
    }
}