import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = (props) => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isImportant, setIsImportant] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/notes/" + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setContent(res.data.content);
                setIsImportant(res.data.isImportant);
            })
            .catch(err => console.log(err));
    }, [id]);

    const updateHandler = (e) => {
        e.preventDefault();
        axios.patch("http://localhost:8000/api/notes/" + id, { title, content, isImportant })
            .then(res => {
                console.log(res.data);
                navigate("/notes");
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>UPDATE</h2>
            <form onSubmit={updateHandler}>
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

export default Update;