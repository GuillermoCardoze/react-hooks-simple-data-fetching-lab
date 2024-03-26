import React, { useEffect, useState } from "react";

function App () {
    const [dogImage, setDogImage] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp) => resp.json())
        .then(data => setDogImage(data.message))
    }, []);

    if(!dogImage) {
        return <h2>Loading...</h2>
    }


    return (
        <div>
          <p>Dog Image</p>
          <img src={dogImage} alt="A Random Dog"/>
        </div>
      )
}
export default App;