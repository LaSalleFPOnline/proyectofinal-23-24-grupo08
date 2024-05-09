import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../../../hooks/useUser';
import './configurationNavBarStyles.css';
import content from './content';

const ConfigurationNavBar = () => {
    const { slug } = useUser();

    return (
        <div className='configurationNavBar'>
            {Object.keys(content).map((key) => (
                <div className='configurationOptions' key={`configuration-navbar-${key}`}>
                    <Link to={`/${slug}/configuracion${content[key].href}`}>
                        <button>
                            <span dangerouslySetInnerHTML={{ __html: content[key].icon }} />
                            {content[key].text}
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ConfigurationNavBar;
