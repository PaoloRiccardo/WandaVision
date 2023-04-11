import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Search () {

    const [input, setInput] = useState("")
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input)
    };

    return(
        <div onSubmit={submitHandler}>
            <div className="box-form">
            <input className="input-box" onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search a Movie" value={input}/>
            <button className="button-form" onClick={submitHandler}>Search</button>
            </div>

        </div>
    )
}
