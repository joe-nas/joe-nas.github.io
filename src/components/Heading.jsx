import React from 'react';

const Heading = ({ title, length, style }) => {
    const beginTitle = title.slice(0, length);
    const restOfTitle = title.slice(length);

    return (
        <div>
            <span className={style} >{beginTitle}</span>
            {restOfTitle}
        </div>
    );
};

export default Heading;