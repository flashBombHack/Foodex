import React from 'react'
import Home from '../pages/Home.tsx'
import JoinWaitlist from '../pages//JoinWaitlist.tsx'

interface ContentContainerProps {
    selectedItem: string
}
const ContentContainer: React.FunctionComponent<ContentContainerProps> = ({
    selectedItem,
}) => {
    return (
        <div className="flex-1 sm:p-6 p-0">
            {selectedItem === 'home' && <Home />}
            {selectedItem === 'joinWaitlist' && <JoinWaitlist />}
        </div>
    )
}

export default ContentContainer
