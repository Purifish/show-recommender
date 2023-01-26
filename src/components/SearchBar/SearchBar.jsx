import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

function SearchBar(props) {
    const { onSubmit } = props;

    function submit(event) {
        // submit only when enter is pressed and string is not just whitespaces
        if (event.key === "Enter" && event.target.value.trim() !== "") {
            onSubmit(event.target.value);
        }
    }
    return (
        <div>
            <SearchIcon size={27} className={s.icon}/>
            <input
                onKeyUp={submit}
                className={s.input}
                type={"text"}
                placeholder={"Search a show you may like!"}
            />
        </div>
    );
}

export default SearchBar;