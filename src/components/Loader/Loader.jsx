import CircleLoader from "react-spinners/CircleLoader";
import { Overlay } from "./Loader.styled";

export default function Loader() {
    return (
        <Overlay>
            <CircleLoader
                color="#000"
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </Overlay>
    );
};
