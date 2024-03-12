import React, { useState } from 'react';
import './Demo1.css';

const Demo1 = () => {
    const [searchText, setSearchText] = useState('');
    const [searchList, setSearchList] = useState([]);

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    }

    const handleAddToList = () => {
        if (searchText.trim() !== '') {
            setSearchList([...searchList, searchText]);
            setSearchText('');
        }
    }

    const handleRemoveFromList = (index) => {
        const updatedList = [...searchList];
        updatedList.splice(index, 1);
        setSearchList(updatedList);
    }

    return (
        <>
            <div className='navbardemo'>
                <div>Navbar</div>
            </div>
            <div className='all'>
                <div className='inputContainer'>
                    <input
                        type="text"
                        placeholder="Enter your search term"
                        value={searchText}
                        onChange={handleInputChange}
                        className='inputtextfield'
                    />
                    <button className="addBtn" onClick={handleAddToList}>Add</button>
                </div>
                <div className='searchList'>
                    {searchList.map((item, index) => (
                        <div key={index} className='searchListItem'>
                            {item}
                            <button onClick={() => handleRemoveFromList(index)} className="removeBtn">x</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Demo1;
