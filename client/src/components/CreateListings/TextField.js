import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-3">
      <label htmlFor={field.name}>{props.label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        } ${meta.touched && !meta.error && "is-valid"}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" className="error" name={field.name} />
    </div>
  );
};
