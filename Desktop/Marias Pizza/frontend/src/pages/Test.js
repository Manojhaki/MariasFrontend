import axios from "axios";
import React from "react";

const baseURL = "http://localhost:4000/";

export default function Test() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);
    console.log("First tesst", post);



    return (
        <div>
            <h1>Testingggsg</h1>

        </div>
    );
}