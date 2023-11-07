import { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


const Dashboard = (props) => {

    const navigate = useNavigate();

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/notes")
            .then(res => {
                console.log(res.data);
                setNotes(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    // delete
    const handleDelete = (deleteId) => {
        console.log("delete", deleteId);
        axios.delete("http://localhost:8000/api/notes/" + deleteId)
            .then(res => {
                console.log(res.data);
                const filteredNotes = notes.filter((eachNote) => {
                    return deleteId !== eachNote._id;
                });
                setNotes(filteredNotes);
            })
            .catch(err => console.log(err));
    };

    // const goToUpdate = (id) => {
    //     navigate("/notes/update/" + id);
    // };

    return (
        <div>
            {/* {JSON.stringify(notes)} */}
            {
                notes.map((note) => {
                    return <div key={note._id} style={{ backgroundColor: "lightyellow" }}>
                        <Link to={"/notes/" + note._id}>
                            <h3>
                                <span>{note.isImportant ? "📌" : ""}</span>
                                {note.title}
                            </h3>
                        </Link>
                        <p>
                            {note.content}
                        </p>
                        <p>{note.createdAt}</p>
                        <button onClick={() => navigate("/notes/update/" + note._id)}>edit</button>
                        <button onClick={() => handleDelete(note._id)}>delete</button>

                    </div>;
                })
            }
        </div>
    );
};

export default Dashboard;