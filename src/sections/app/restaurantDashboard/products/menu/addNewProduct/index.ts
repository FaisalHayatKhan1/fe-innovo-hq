import * as Yup from "yup";
interface DEFVALUE {
  itemType: string;
  name: string;
  price: string;
  points: string;
  itemAsComboPoint: boolean;
  //   comboPriceType: string;
}

export const DEFAULT_VALUES: DEFVALUE = {
  itemType: "",
  name: "",
  price: "",
  points: "1",
  itemAsComboPoint: false,
};
export const AddNewProductSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  price: Yup.string()
    .matches(
      /^[1-9]\d*$/,
      "Price must be a positive number greater than zero and have no special characters or signs"
    )
    .required("price is required"),
  points: Yup.string()
    .matches(
      /^[1-9]\d*$/,
      "point must be a positive number greater than zero and have no special characters or signs"
    )
    .required("point is required"),
  //   password: Yup.string()
  //     .required("Password is required")
  //     .min(8, "Password should be of minimum 8 characters length"),
});
