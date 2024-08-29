import { SET_FORM_DATA } from './formTypes';
import { CLEAN_FORM_DATA } from './formTypes'
import { pass } from "./formReducer";

export const saveFormData = (formData) => {
    if (formData.password==pass) {
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
