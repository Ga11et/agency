import { Formik, Form, Field } from "formik"
import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { filterType } from "../../../../app/models"
import { MainReducer } from "../../../../app/reducers/mainReducer"
import css from './form.module.css'
import { RadioInput } from "./radio/radio"

type FormPropsType = {

}
export const FormContainer: FC<FormPropsType> = ({ }) => {

    const initialValues = { type: 'Show All' as filterType }
    const dispatch = useAppDispatch()

    return <>
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                dispatch(MainReducer.actions.setFilter(values.type))
            }}
        >
            {({ submitForm }) => {
                return <>
                    <Form className={css.form}>
                        <RadioInput text="Show All" name="type"
                            formSubmitting={submitForm}
                        />
                        <RadioInput text="Design" name="type"
                            formSubmitting={submitForm}
                        />
                        <RadioInput text="Branding" name="type"
                            formSubmitting={submitForm}
                        />
                        <RadioInput text="Illustrations" name="type"
                            formSubmitting={submitForm}
                        />
                        <RadioInput text="Motion" name="type"
                            formSubmitting={submitForm}
                        />
                    </Form>
                </>
            }}
        </Formik>
    </>
}