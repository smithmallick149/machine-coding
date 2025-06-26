import React from 'react'

export const Profile = ({data, setData}) => {
    const { name, age, email } = data;

    const handleDataChange = (e, item) => {
      setData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value
      }));
    };
  return (
    <div>
        <div>
            <label>Name: </label>
            <input type="text" placeholder="Enter your name" value={name} name="name" onChange={(e) =>handleDataChange(e, "name")}/>
        </div>
         <div>
            <label>Age: </label>
            <input type="number" placeholder="Enter your Age" name="age" value={age}  onChange={(e) =>handleDataChange(e, "age")}/>
        </div>
         <div>
            <label>Email: </label>
            <input type="text" placeholder="Enter your Email" value={email} name="email"  onChange={(e) =>handleDataChange(e, "email")}/>
        </div>
    </div>
  )
}
