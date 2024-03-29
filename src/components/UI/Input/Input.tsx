import { Field, ErrorMessage } from 'formik'
import s from './Input.module.scss'
import { TInput } from '@/types/ui'

const InputField = (props: TInput) => {
  const commonProps = {
    type: props.type,
    id: props.id,
    name: props.name
  }

  return (
    <div className={s.input}>
      <label htmlFor={props.id}>{props.label}</label>
      {props.type === 'textarea' ? (
        <Field as="textarea" rows={props.rows} {...commonProps} />
      ) : (
        <Field {...commonProps} />
      )}
      <ErrorMessage name={props.name} component="sub" className={s.error} />
    </div>
  )
}

export default InputField
