import React, { useState, useEffect } from 'react';

export default function Artists() {

    const [artists, setArtists] = useState(null);

        useEffect(() => {
            if(!artists)
            fetch("http://localhost:5000/artists")
              .then(res => res.json())
              .then(res => setArtists(res))
          }, [artists])

          console.log(artists)
          
           if(!artists) return <div>Chargement...</div>
              
           else {
            return (
                  <ul>
                      {artists.map(item => (
                          <li key={item.id}>
                              <img src={item.photo} alt=""/>
                            <p>{item.name}</p>
                          </li>
                      ))}
                 </ul> 
                )
            }
}

