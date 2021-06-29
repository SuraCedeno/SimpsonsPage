import React from 'react';
import '../assets/styles/components/Episodes.scss'

const Episodes = ({children}) => (
<section className="episodes">
    <div className="episodes__container">
        {children}
    </div>
</section>

);

export default Episodes;