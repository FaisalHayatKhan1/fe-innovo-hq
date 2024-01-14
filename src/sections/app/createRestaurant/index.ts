import * as Yup from "yup";
interface DEFVALUE {
  name: string;
  sub_domain: string;
  distance: string;
  time_zone: string;
  time_format: string;
  date_format: string;
  currency: string;
  tex_in_price: boolean;
  plan_name: string;
  expire_at: string;
  sub_domain_available: boolean;
  subscription: boolean;
  address: any;
}

export const DEFAULT_VALUES: DEFVALUE = {
  name: "",
  sub_domain: "",
  distance: "",
  time_zone: "",
  time_format: "12",
  date_format: "MM/DD/YYYY",
  currency: "",
  tex_in_price: false,
  plan_name: "",
  sub_domain_available: false,
  expire_at: "",
  subscription: false,
  address: null,
};
export const CreateRestaurantSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  sub_domain: Yup.string()
    .required("Sub Domain is required")
    // .test({
    //   name: "custom-validation",
    //   message: "sub domain is not available",
    //   test: function (value) {
    //     const subDomainAvailable = this.parent.sub_domain_available;
    //     if (subDomainAvailable === false) {
    //       return false;
    //     }
    //     return true;
    //   },
    // })
    .matches(/^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*$/, "Invalid domain name"),
  distance: Yup.string().required("distance is required"),
  time_zone: Yup.string().required("Time zone is required"),
  time_format: Yup.string().required("Time Format is required"),
  date_format: Yup.string().required("Date Format is required"),
  currency: Yup.string().required("Currency is required"),
  tex_in_price: Yup.boolean(),
  subscription: Yup.boolean(),
  address: Yup?.object()?.required("address is required"),
  plan_name: Yup.string().when("subscription", (val: any) => {
    const data = val[0];
    return data
      ? Yup.string().required("Name is required")
      : Yup.string().notRequired();
  }),
  expire_at: Yup.string().when("subscription", (val: any) => {
    const data = val[0];
    return data
      ? Yup.string().required("Card number is required")
      : Yup.string().notRequired();
  }),
});
