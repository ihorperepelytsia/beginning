import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import styled from "styled-components";
const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 4px;
`;
const Input = styled(Field)`
  width: 200px;
  padding: 5px;
  border: 1px solid grey;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const Button = styled.button`
  margin-top: 10px;
  width: 70px;
  border: none; 
  color: white;
  background-color: blue;
  padding: 4px;
  border-radius: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const SignupSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: yup
    .number()
    .min(4, "Too Short!")
    .max(10000000, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ handleSubmit }) => (
  <Formik
    initialValues={{ name: "", number: "" }}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      handleSubmit(values.name, values.number);
      resetForm();
      setSubmitting(false);
    }}
    validationSchema={SignupSchema}
  >
    <Form autoComplete="off">
      <Label htmlFor="name">
        Name
        <Input type="name" name="name" placeholder="Your Name" />
      </Label>
      <ErrorMessage name="name" />
      <Label htmlFor="number">
        Number
        <Input type="number" name="number" placeholder="Your Number" />
      </Label>
      <ErrorMessage name="number" />
      <Button type="submit">Submit</Button>
    </Form>
  </Formik>
);

export default ContactForm;
