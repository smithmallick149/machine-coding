import React from 'react'
import { Profile } from './Profile';
import { Interests } from './Interests';
import { Settings } from './Settings';

export const TabForm = () => {
    const [activeTab, setActiveTab] = React.useState(0);
    const [data, setData] = React.useState({
        name: 'smith',
        age:"29",
        email: "smithmallick149@gmail.com",
        interests: ['coding', 'music', 'javascript'],
        theme: 'dark',
    });

    const tabs = [
        { id: 'profile', label: 'Profile', component: Profile },
        { id: 'interests', label: 'Interests', component: Interests },
        { id: 'settings', label: 'Settings', component: Settings }
    ];

    const ActiveTabComponent = tabs[activeTab].component;

    const handleNext = () => {
        if (activeTab < tabs.length - 1) {
            setActiveTab((prev)=> prev + 1);
        }
    }
    const handlePrev = () => {
            setActiveTab((prev) => prev - 1);
    }
    const handleSubmit = () => {
        console.log("Form submitted with data:", data);
    }
    console.log(data);
  return (
    <div>
        <div className='heading-container'>
            {tabs.map((tab, index) => (
                   <div key={index} className='heading' onClick={()=> setActiveTab(index)}> {tab.label} </div>
            ))}
        </div>
        <div className='tab-body'>
            <ActiveTabComponent data={data} setData={setData} />
        </div>
        <div>
            {activeTab >= 0 && activeTab < 2 && (<button onClick={handleNext}> Next</button>)}
            {activeTab > 0 && activeTab <= 2 && (<button onClick={handlePrev}> prev</button>)}

            {activeTab === 2 && (
                <button onClick={handleSubmit}>Submit</button>
            )}
        </div>
    </div>
  )
}

export default TabForm;