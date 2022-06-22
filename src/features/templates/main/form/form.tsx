import { Formik, Form, Field } from "formik"
import { FC } from "react"
import css from './form.module.css'
import { RadioInput } from "./radio/radio"

type FormPropsType = {

}
export const FormContainer: FC<FormPropsType> = ({ }) => {

    const initialValues = { type: 'Show All' }

    return <>
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                console.log(values)
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