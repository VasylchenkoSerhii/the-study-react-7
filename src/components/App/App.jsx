import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircleLoader from "react-spinners/CircleLoader";
import {
  getContacts,
  getIsLoading,
  getError
} from "redux/selectors";
import { fetchContacts } from "redux/operations";
import { Container, Main, Overlay } from "./App.styled";
import FormContacts from "../FormContacts/FormContacts";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";


export default function App() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts) return;

  return (
    <Main>
      <Container>
        <FormContacts />
        <Filter />
        {contacts.length > 0 && <ContactsList />}
      </Container>
      {isLoading && !error && (
        <Overlay>
          <CircleLoader
            color="#000"
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </Overlay>)}
      {error && toast(`${error.message}`)}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="light"
      />
    </Main>
  );
};

