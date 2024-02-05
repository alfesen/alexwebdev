// ContactForm.tsx
import { Formik, Form, FormikHelpers, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Input from '@/components/UI/Input/Input'
import s from './ContactForm.module.scss'
import {
  animated,
  useChain,
  useSpringRef,
  useTransition
} from '@react-spring/web'
import { TContactProps, TFormValues } from '@/types/features'
import emailjs from '@emailjs/browser'

const ContactForm = ({ closeForm }: TContactProps) => {
  const initialValues: TFormValues = {
    name: '',
    email: '',
    message: '',
    consent: false
  }

  const validationSchema: Yup.AnyObjectSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string().required('Message is required'),
    consent: Yup.boolean().oneOf(
      [true],
      'You must accept the terms and conditions'
    )
  })

  const array = [
    <Input label="Name and Surname" type="text" id="name" name="name" />,
    <Input label="Email" type="email" id="email" name="email" />,
    <Input
      label="Message"
      type="textarea"
      id="message"
      name="message"
      rows={8}
    />,
    <div className={s.consent}>
      <label>
        <Field type="checkbox" name="consent" />
        By submitting your details through this contact form, you agree to the
        use of your information for the purposes of responding to your query.
      </label>
      <ErrorMessage name="consent" component="sub" className={s.error} />
    </div>,
    <button className={s.submit} type="submit">
      Submit
    </button>
  ]

  const transRef = useSpringRef()
  const transitions = useTransition(array, {
    ref: transRef,
    trail: 1300 / array.length,
    reset: !!array,
    from: { opacity: 0, transform: 'translate3d(50px, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 1, transform: 'translate3d(0, 0, 0)' }
  })
  useChain([transRef], [0])

  const handleSubmit = async (
    values: TFormValues,
    { resetForm }: FormikHelpers<TFormValues>
  ) => {
    const serviceId = process.env.EMAIL_SERVICE_ID as string
    const templateId = process.env.EMAIL_TEMPLATE_ID as string
    try {
      await emailjs.send(serviceId, templateId, {
        from_name: values.name,
        body: values.message,
        from_email: values.email,
        reply_to: values.email,
        user_email: values.email,
        consent: values.consent
      })
    } catch (err) {
      console.log(err)
    }

    resetForm()
    closeForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        {transitions((style, Item) => {
          return <animated.div style={style}>{Item}</animated.div>
        })}
      </Form>
    </Formik>
  )
}

export default ContactForm
