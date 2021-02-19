import {useState} from 'react';

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState);
    return [
        form,
        (formType, formValue) => {
            
            if (formType === 'reset') {
                return setForm(initialState);   
            } 

            return setForm({...form, [formType] : formValue})
        }
    ]
}

export default useForm;