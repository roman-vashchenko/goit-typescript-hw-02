import css from "../SearchBar/SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FC } from "react";
import { FormikHelpers, Formik, Form, Field } from "formik";

interface FormValues {
  searchQuery: string;
}

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const initialValues: FormValues = {
  searchQuery: "",
};

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (
    values: FormValues,
    action: FormikHelpers<FormValues>
  ) => {
    if (values.searchQuery.trim() === "") {
      toast.error("You must enter text to search for images.");
      return;
    }
    onSubmit(values.searchQuery);
    action.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <header className={css.header}>
          <Form>
            <Field
              name="searchQuery"
              className={css.field}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={css.btn} type="submit">
              Search
            </button>
          </Form>
        </header>
      </Formik>
      <Toaster position="top-right" />
    </>
  );
};

export default SearchBar;
