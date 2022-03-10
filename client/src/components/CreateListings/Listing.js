import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "../CreateListings/TextField";
import { SelectField } from "../CreateListings/SelectField";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createListing } from "../../actions/listings";
import { useNavigate } from "react-router-dom";

const Listing = () => {
  //to navigate to different routes in our website
  const navigate = useNavigate();

  //using dispatch to create new listings
  const dispatch = useDispatch();

  //using Yup to validate our strings
  const validate = Yup.object({
    Make: Yup.string()
      .oneOf(["BMW", "Peugeot", "Fiat", "Kia", "Toyota", "Chevrolet"])
      .required(),
    Model: Yup.string()
      .min(2, "Must be 2 or more characters.")
      .max(32, "Must be 32 characters or less.")
      .required(),
    Year: Yup.number().required().min(1900).max(new Date().getFullYear()),
    Description: Yup.string().required(),
    Price: Yup.number()
      .required()
      .positive("Must be 0 or greater")
      .max(1000000, "Must be Less than or equal to 1 Million.")
      .test(
        "maxDigitsAfterDecimal",
        "Must have 2 digits after decimal or less",
        (number) => /^\d+(\.\d{1,2})?$/.test(number)
      ),
    Email: Yup.string().email("Email is invalid.").required(),
    URL: Yup.string().url(),
  });
  return (
    <Formik
      initialValues={{
        Make: "",
        Model: "",
        Year: "",
        Description: "",
        Price: "",
        Email: "",
        URL: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
        navigate("/");
        dispatch(createListing(values));
      }}
    >
      {(formik) => (
        <div>
          <h1>Create a Listing</h1>
          <Form>
            {/* <div className="mb-3 mt-4">
              <label>Select a Model</label>
              <Field as="select" name="Make" class="form-select" required>
                <option value="BMW">BMW</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Fiat">Fiat</option>
                <option value="Kia">Kia</option>
                <option value="Toyota">Toyota</option>
                <option value="Chevrolet">Chevrolet</option>
              </Field>
            </div> */}
            <SelectField label="Make" name="Make" />
            <TextField label="Model" name="Model" type="text" />
            <TextField label="Year" name="Year" type="number" />
            <TextField label="Description" name="Description" type="text" />
            <TextField label="Email" name="Email" type="text" />
            <TextField
              label="Price in Euro(€)"
              name="Price"
              type="number"
              step=".01"
            />
            <TextField label="URL of the Image" name="URL" type="text" />
            <button className="btn btn-primary mt-3" type="submit">
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Listing;
