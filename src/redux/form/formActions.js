import { SET_FORM_DATA } from './formTypes';
import { CLEAN_FORM_DATA } from "./formTypes"
import { password } from "./formReducer";

export const saveFormData = (formData) => {
    if (formData.password==password) {
        return {
            type: SET_FORM_DATA,
            payload: formData,
        }
    }
}

export const cleanFormData = (formData) => {
    return {
        type: CLEAN_FORM_DATA,
        payload:formData,
    }
}


