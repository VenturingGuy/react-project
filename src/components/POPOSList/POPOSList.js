// src/POPOSList.js

import React, { useState } from 'react';
import data from '../../sfpopos-data.json'
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';

function POPOSList() {
  const [ query, setQuery ] = useState('')
  const spaces = data.filter(obj => obj.title.includes(query) ||
    obj.address.includes(query)).map((obj, i) => {
      return (
        <POPOSSpace
          name={obj.title}
          address={obj.address}
          image={obj.images[0]}
        />
      )
    })
    return (
        <div className="POPOSList">
          <form>
            <input
              value={query}
              placeholder="search"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          { spaces }
        </div>
    )
}

export default POPOSList
