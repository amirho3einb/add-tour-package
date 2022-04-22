import { Formik, useFormik } from "formik";
import Input from "../../common/Input";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SelectForm from "../../common/SelectForm";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePickerField from "../../common/DatePickerField/DatePickerField";

const initialValues = {
  packageName: "",
  packageType: "",
  FloatingCompanyId: "hiuhjioajijopakpp",
  PackageRule: "",
  PackagePublishState: "",
  PackageStartDate: "",
  PackageFinishDate: "",
  PackageSources: "",
  PackageDestinations: "",
  PackageState: "0",
  PackageTourLeader: "امیرحسین بالاگر",
  PackageId: "1234567989",
};

const validationSchema = Yup.object({
  packageName: Yup.string()
    .required("لطفا نام تور را وارد نمایید.")
    .min(6, "نام تور حداقل باید شامل شش کارکتر باشد."),
  packageType: Yup.string().required("لطفا نوع تور را انتخاب نمایید.."),
  PackageRule: Yup.string().required("لطفاقابلیت رزرو تور خود را مشخص کنید."),
  PackagePublishState: Yup.string().required(
    "لطفا وضعیت نمایش در سایت را مشخص کنید."
  ),
  PackageStartDate: Yup.string().required(
    "لطفا تاریخ شروع برگزاری تور خود را وارد نمایید."
  ),
  PackageFinishDate: Yup.string().required(
    "لطفا تاریخ پایان برگزاری تور خود را وارد نمایید."
  ),
  PackageSources: Yup.string().required("لطفا مبدا تور خود را وارد نمایید."),
  PackageDestinations: Yup.string().required(
    "لطفا نقصد تور خود را وارد نمایید."
  ),
  PackageState: Yup.string().required(
    "فعال یا غیر فعال بودن تور خود را مشخص کنید."
  ),
  PackageTourLeader: Yup.string().required("نام تور لیدر خود را وارد نمایید."),
});
const TourDefinitionFormFirstStep = () => {
  const packageNameOptions = [
    { value: 0, label: "هوایی" },
    { value: 1, label: "طبیعت‌گردی" },
    { value: 2, label: "زمینی" },
  ];
  const PackageRuleOptions = [
    { value: true, label: "دارد" },
    { value: false, label: "ندارد" },
  ];
  const PackagePublishState = [
    { value: 0, label: "فعال" },
    { value: 1, label: "غیر‌فعال" },
  ];

  const [error, setError] = useState(null);
  const [value, setValue] = useState(new Date());

  const onSubmit = async (values) => {
    const {
      packageName,
      packageType,
      FloatingCompanyId,
      PackageRule,
      PackagePublishState,
      PackageStartDate,
      PackageFinishDate,
      PackageSources,
      PackageDestinations,
      PackageTourLeader,
    } = values;
    const userData = {
      packageName,
      packageType,
      FloatingCompanyId,
      PackageRule,
      PackagePublishState,
      PackageStartDate,
      PackageFinishDate,
      PackageSources,
      PackageDestinations,
      PackageState: 0,
      PackageTourLeader: "",
      PackageId: "",
    };
    try {
      console.log(userData);
      //const { data } = await signupUser(userData);
      //setAuth(data);
      //history.push(redirect);
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="packageName" label="نام تور" type="text" />
        <Input
          formik={formik}
          name="PackageSources"
          label="مبدا تور"
          type="text"
        />
        <Input
          formik={formik}
          name="PackageDestinations"
          label="مقصد تور"
          type="text"
        />
        <SelectForm
          formik={formik}
          name="packageType"
          label="نوع تور"
          options={packageNameOptions}
        />
        <SelectForm
          formik={formik}
          name="PackageRule"
          label="قابلیت رزرو"
          options={PackageRuleOptions}
        />
        <SelectForm
          formik={formik}
          name="PackagePublishState"
          label="وضعیت"
          options={PackagePublishState}
        />
        {/* <DatePicker
          formik={formik}
          name="PackageStartDate"
          value={formik.getFieldProps.value}
          onChange={formik.getFieldProps.onChange}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
        /> */}

        <DatePickerField formik={formik} name="PackageStartDate" />
        <DatePickerField formik={formik} name="PackageFinishDate" />

        <button
          type="submit"
          disabled={!formik.isValid}
          className="mt-6 disabled:bg-slate-400 bg-blue-400 w-full rounded-md py-2"
        >
          sign up
        </button>
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </>
  );
};

export default TourDefinitionFormFirstStep;
