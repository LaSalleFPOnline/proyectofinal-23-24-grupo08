import React from 'react';
import { pages } from './pages.js';
import { useParams } from 'react-router-dom';

export default function Page(props) {
    const { page } = props;
    const params = useParams() || {};
    return <>{React.createElement(pages[page], { ...props, ...params })}</>;
}
