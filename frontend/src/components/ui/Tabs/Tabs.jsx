import Tab from './Tab';
import './Tabs.css'
import { useState } from 'react';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0)
    const changeTab = (tab) => setActiveTab(tab)

    return (
        <div className="tabs">
            <div className="tabs-header">
                {
                    tabs.map((tab, index) => <Tab key={tab.label} label={tab.label} active={activeTab === index} onClick={() => changeTab(index)} />)
                }
            </div>
            <div className="tab-panel">
                {tabs[activeTab].element}
            </div>
        </div>

    )
}

export default Tabs