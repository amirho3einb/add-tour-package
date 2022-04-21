//import { useField, useFormikContext } from "formik";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DatePickerField = ({ name, formik }) => {
  // const { setFieldValue } = useFormikContext();
  // const [field] = useField(props);

  console.log(name);
  return (
    <div className="flex gap-3">
      <label>انتخاب تاریخ</label>
      <DatePicker
        label={name}
        id={name}
        name={name}
        value={formik.values[name]}
        onChange={(value) => {
          formik.setFieldValue(name, String(Date.parse(value)));
        }}
      />
    </div>
  );
};
export default DatePickerField;
