const SelectForm = ({ label, name, formik, options }) => {
  return (
    <div className="flex flex-col h-24">
      <label className="mb-2 text-sm" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        {...formik.getFieldProps({ name })}
        name={name}
        className="border border-stone-200 h-10 rounded focus:outline-lightGreenKite"
      >
        {options.map((option) => (
          <option value={option.value} label={option.label}>
            {option.label}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-xs text-orangeKite mt-2">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default SelectForm;
