import React from "react";
import { Formik, useField, useFormikContext } from "formik";
import DatePicker from "react-multi-date-picker";

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      value={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
    />
  );
};
function DatePickerTest() {
  return (
    <div>
      <Formik
        initialValues={{ date: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {(props) => {
          const { dirty, isSubmitting, handleSubmit, handleReset } = props;
          return (
            <form onSubmit={handleSubmit}>
              <DatePickerField name="date" />
              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
export default DatePickerTest;
