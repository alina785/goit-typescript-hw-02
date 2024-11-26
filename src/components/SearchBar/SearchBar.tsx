import { Formik, Form, Field, FormikHelpers } from "formik";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

interface initialValues {
  query: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }: SearchBarProps) => {
  const handleSubmit = (
    values: initialValues,
    action: FormikHelpers<initialValues>
  ) => {
    const query = values.query.trim();
    if (query === "") {
      toast.error("Please enter search query!");
      return;
    }
    onSubmit(query);
    action.resetForm();
  };

  return (
    <header className={s.header}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter search photo and image..."
            className={s.input}
          />
          <button type="submit" className={s.btn}>
            Search 
          </button>
        </Form>
      </Formik>
      <Toaster />
    </header>
  );
};

export default SearchBar;