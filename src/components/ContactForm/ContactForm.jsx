import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";

export default function ContactForm({ HendleSubmit }) {
  return (
    <>
      <Formik
        initialValues={{ username: "", email: "" }}
        onSubmit={HendleSubmit}
      >
        <Form>
          <div>
            <label>Name</label>
            <Field name="username"></Field>
          </div>
          <div>
            <label>Namber</label>
            <Field name="email"></Field>
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
