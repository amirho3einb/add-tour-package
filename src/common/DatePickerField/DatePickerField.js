import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DatePickerField = ({ name, formik }) => {
  console.log(name);
  return (
    <div className="flex gap-3">
      <label>انتخاب تاریخ</label>
      <DatePicker
        label={name}
        id={name}
        name={name}
        placeholder="انتخاب تاریخ"
        value={Date.parse(formik.values[name])}
        onChange={(value) => {
          formik.setFieldValue(name, String(value.unix * 1000));
        }}
        format={"YYYY/MM/DD"}
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
};
export default DatePickerField;
