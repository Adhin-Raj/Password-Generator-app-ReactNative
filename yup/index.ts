import * as Yup from "yup";

export const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(6, "Should be minimum of 6 characters")
    .max(16, "Should be maximum of 16 characters")
    .required("Length is required"),
});
