import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";



export default function ContactForm({ HendleSubmit }) {
  return (

    <>
     <Formik initialValues={
      {username:'',
      email:''}
     } onSubmit={HendleSubmit}>
       <Form> 
         <label >Name</label>
         <Field name='username' >
         </Field>
         <label >Namber</label>
         <Field name='email'  >
         </Field>
       </Form>
     </Formik>
    </>
  );
}
