import { useState } from 'react';
import { dGustaApi } from '../api/dGustaApi';

export const useData = () => {
    const [state, setState] = useState({
        data: null,
        isLoading: false,
        hasError: null
    });

    const setLoading = (loading) => {
        setState({
            ...state,
            isLoading: loading
        });
    };

    const postData = async (endpoint, params = {}) => {
        setLoading(true);

        try {
            const { data } = await dGustaApi.post(endpoint, params);
            setState({
                data,
                isLoading: false,
                hasError: null
            });
        } catch (error) {
            setState({
                isLoading: false,
                hasError: true
            });
        }
    };

    const putData = async (endpoint, params = {}) => {
        setLoading(true);

        try {
            const { data } = await dGustaApi.put(endpoint, params);
            setState({
                data,
                isLoading: false,
                hasError: null
            });
        } catch (error) {
            setState({
                isLoading: false,
                hasError: true
            });
        }
    };

    const getData = async (endpoint) => {
        setLoading(true);
        const { data } = await dGustaApi(endpoint);
        setState({
            data,
            isLoading: false,
            hasError: null
        });
    };

    return {
        postData,
        getData,
        putData,

        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
};
