import * as Yup from "yup";
interface DEFVALUE {
  name: string;
  display_name: string | null;
  description: string | null;
}

export const DEFAULT_VALUES_CATEGORY: DEFVALUE = {
  name: "",
  display_name: null,
  description: null,
};
export const AddCategorySchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});
