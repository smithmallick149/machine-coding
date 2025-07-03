import React from 'react'

export const Interests = ({data, setData }) => {
    const { interests } = data;

    const handleDataChange = (e) => {
      setData((prevData) => ({
        ...prevData,
        interests: e.target.checked
          ? [...prevData.interests, e.target.name]
          : prevData.interests.filter((interest) => interest !== e.target.name)
      }));
    };
  return (
    <>
    <div>
        <label>
            <input type="checkbox" name="coding" checked={interests.includes("coding")} onChange={handleDataChange} />
            Coding
        </label>
    </div>
     <div>
        <label>
            <input type="checkbox" name="music" checked={interests.includes("music")} onChange={handleDataChange}/>
            Music
        </label>
    </div>
     <div>
        <label>
            <input type="checkbox" name="javascript" checked={interests.includes("javascript")} onChange={handleDataChange}/>
            Javascript
        </label>
    </div>
    </>
  )
}
