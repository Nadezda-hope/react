import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRequestStatus } from '../entities/request/slice';

export function useRequest(thunk, ...params) {
    const dispatch = useDispatch();

    const [request, setRequest] = useState();

    const requestStatus = useSelector((state) =>
        selectRequestStatus(state, request?.requestId)
    );

    useEffect(() => {
        const request = dispatch(thunk(...params));
        setRequest(request);

        return () => {
            request.abort();
            setRequest(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, thunk, ...params]);

    return requestStatus;
}