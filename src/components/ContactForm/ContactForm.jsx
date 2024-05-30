import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css"

const contactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
});
const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ addContact }) => {
    // console.log(addContact);
  const nameId = useId();
  const numberId = useId();

    const handleSubmit = (values, actions) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number
      }  
        addContact(newContact);
        actions.resetForm();
    }
    
    
  return (
    <Formik
      className={css.contactForm}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactsSchema}
    >
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberId}>Number</label>
        <Field type="text" name="number" id={numberId} />
        <ErrorMessage name="nunber" component="span" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;