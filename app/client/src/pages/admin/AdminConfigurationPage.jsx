import React from 'react';
import { useUser } from '../../hooks/useUser';

const AdminConfigurationPage = (props) => {
    const { name } = useUser();
    console.log('*** AdminConfigurationPage -> ', { name });

    return <h1>AdminConfigurationPage</h1>;
};

export default AdminConfigurationPage;
