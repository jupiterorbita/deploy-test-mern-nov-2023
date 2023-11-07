import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShowOne = (props) => {
    const { id } = useParams();

    const [theNote, setTheNote] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/notes/" + id)
            .then(res => {
                console.log(res.data);
                setTheNote(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            {/* {JSON.stringify(theNote)} */}
            {
                theNote === null ? " Loading.. " : (
                    <>
                        <h3>{theNote.isImportant ? "📌" : ""} - {theNote.title}</h3>
                        <p>
                            {theNote.content}
                        </p>
                        <p>
                            {theNote.createdAt}
                        </p>
                    </>
                )
            }


        </div>
    );
};

export default ShowOne;