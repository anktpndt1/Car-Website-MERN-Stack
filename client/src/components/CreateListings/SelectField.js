import React from "react";
import { ErrorMessage, useField } from "formik";

export const SelectField = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-3">
      <label htmlFor={field.name}>{props.label}</label>
      <select
        className={`form-select shadow-none ${
          meta.touched && meta.error && "is-invalid"
        } ${meta.touched && !meta.error && "is-valid"}`}
        {...field}
        {...props}
        autoComplete="off"
      >
        <option defaultValue={""}>Choose the Make</option>
        <option value="BMW">BMW</option>
        <option value="Peugeot">Peugeot</option>
        <option value="Fiat">Fiat</option>
        <option value="Kia">Kia</option>
        <option value="Toyota">Toyota</option>
        <option value="Chevrolet">Chevrolet</option>
      </select>
      <ErrorMessage component="div" className="error" name={field.name} />
    </div>
  );
};
