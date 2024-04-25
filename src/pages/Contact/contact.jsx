import React from "react";
import {
  ListContact,
  ContactWrapper,
  FormContactContainer,
  IconContact,
  InfoContainer,
  ContactSeparator,
  ContactFormDiv,
  ContactInput,
  TextArea,
} from "./styles";
import { CiMail, CiPhone } from "react-icons/ci";
import { IconContext } from "react-icons";
import Button from "../../components/UI/Button/button";
import { colors } from "../../assets/styles/colors";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed")
        .required("Required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Invalid phone number")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .max(200, "Must be 200 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <ContactWrapper>
      <InfoContainer>
        <ListContact>
          <li>
            <IconContact>
              <IconContext.Provider value={{ size: "100%", color: "white" }}>
                <CiPhone />
              </IconContext.Provider>
            </IconContact>

            <h2>Call To Us</h2>
          </li>
          <li>
            <p>We are available 24/7, 7 days a week.</p>
          </li>
          <li>
            <p>Phone: +8801611112222</p>
          </li>
        </ListContact>
        <ContactSeparator />
        <ListContact>
          <li>
            <IconContact>
              <IconContext.Provider value={{ size: "100%", color: "white" }}>
                <CiMail />
              </IconContext.Provider>
            </IconContact>
            <h2>Write To US</h2>
          </li>
          <li>
            <p>Fill out our form and we will contact you within 24 hours.</p>
          </li>
          <li>
            <p>Emails: customer@exclusive.com</p>
          </li>
          <li>
            <p>Emails: support@exclusive.com</p>
          </li>
        </ListContact>
      </InfoContainer>
      <FormContactContainer onSubmit={formik.handleSubmit}>
        <ContactFormDiv>
          <ContactInput
            type="text"
            placeholder="Your Name"
            $borderColor={
              formik.touched.name && formik.errors.name ? true : false
            }
            {...formik.getFieldProps("name")}
          />
          <ContactInput
            type="email"
            placeholder="Your Email"
            $borderColor={
              formik.touched.email && formik.errors.email ? true : false
            }
            {...formik.getFieldProps("email")}
          />
          <ContactInput
            type="number"
            placeholder="Your Phone"
            $borderColor={
              formik.touched.phone && formik.errors.phone ? true : false
            }
            {...formik.getFieldProps("phone")}
          />
        </ContactFormDiv>
        <TextArea
          placeholder="Your Message"
          $borderColor={
            formik.touched.message && formik.errors.message ? true : false
          }
          {...formik.getFieldProps("message")}
        ></TextArea>
        <Button
          text={"Send Message"}
          color={colors.red}
          txtColor={colors.white}
          width={"180px"}
          height={"50px"}
        />
        <Link to="/" style={{ alignSelf: "flex-end" }}>
          <p>Back To Home</p>
        </Link>
      </FormContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
