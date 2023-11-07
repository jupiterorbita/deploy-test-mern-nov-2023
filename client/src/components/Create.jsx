import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = (props) => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isImportant, setIsImportant] = useState(false);
    const [errors, setErrors] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/notes", { title, content, isImportant })
            .then(res => {
                console.log(res.data);
                navigate("/notes");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message);
                }
                // Set Errors
                setErrors(errorArr);
            });
    };


    return (
        <div>
            {JSON.stringify(title)} <br />
            {JSON.stringify(content)} <br />
            {JSON.stringify(isImportant)} <br />
            <hr />
            {errors.map((err, index) => <p style={{ color: 'red' }} key={index}>{err}</p>)}
            <form onSubmit={submitHandler}>
                <div>
                    title:
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div>
                    content:
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                </div>

                <div>
                    <input type='checkbox' checked={isImportant} onChange={e => setIsImportant(e.target.checked)} /> important?
                </div>

                <button>create</button>
            </form>
        </div>
    );
};

export default Create;