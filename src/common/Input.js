const Input = ({ label, name, formik, type }) => {
  return (
    <div className="flex flex-col h-24">
      <label className="mb-2 text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...formik.getFieldProps({ name })}
        name={name}
        className="border border-stone-200 h-10 rounded focus:outline-lightGreenKite"
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-xs text-orangeKite mt-2">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default Input;
