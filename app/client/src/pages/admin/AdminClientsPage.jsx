import React from 'react';
import { useUser } from '../../hooks/useUser';

const AdminClientsPage = (props) => {
    const { name } = useUser();
    console.log('*** AdminClientsPage ', { name });

    return <h1>AdminClientsPage</h1>;
};

export default AdminClientsPage;
