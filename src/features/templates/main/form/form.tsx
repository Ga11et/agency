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

    const dispatch = useAppDispatch()
    const { activeFilter } = useAppSelector(state => state.mainReducer)

    const initialValues = { type: activeFilter }

    return <>
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                dispatch(MainReducer.actions.setFilter(values.type))
            }}
            enableReinitialize
        >
            {({ submitForm }) => {
                return <>
                    <Form className={css.form} tabIndex={0}>
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