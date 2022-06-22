import { Formik, Form, Field } from "formik"
import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { MainReducer } from "../../../../app/reducers/mainReducer"
import css from './form.module.css'
import { RadioInput } from "./radio/radio"
import { ReactComponent as TriangleSVG } from '../../../../assets/triangle.svg'

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
                    <Form className={css.desctopForm} tabIndex={0}>
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
                    <Form className={css.mobileForm} tabIndex={0}>
                        <TriangleSVG className={css.triangle} />
                        <Field component='select'
                            name='type'
                            className={css.select}
                            onBlur={submitForm}
                        >
                            <option value='Show All'>Show All</option>
                            <option value='Design'>Design</option>
                            <option value='Branding'>Branding</option>
                            <option value='Illustrations'>Illustrations</option>
                            <option value='Motion'>Motion</option>
                        </Field>
                    </Form>
                </>
            }}
        </Formik>
    </>
}