import { Field } from "formik"
import { FC } from "react"
import { filterType } from "../../../../../app/models"
import css from './radio.module.css'

type RadioInputPropsType = {
    text: filterType
    name: string

    formSubmitting: () => void
}
export const RadioInput: FC<RadioInputPropsType> = ({ text, name, formSubmitting }) => {
    return <>
        <label className={css.radio}>
            <Field type='radio' className={css.input} name={name} value={text} 
                onClick={() => formSubmitting()}
            />
            <p>{text}</p>
        </label>
        
    </>
}