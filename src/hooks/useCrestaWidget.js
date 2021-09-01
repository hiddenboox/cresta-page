import React from 'react';

import { useScript } from "./useScript";
import { crestaChatWidget } from '../services/crestaChatWidget';

export const useCrestaWidget = ({ src, config }) => {
    const { status } = useScript({ src })

    React.useEffect(() => {
        if (status === "loading") {
            crestaChatWidget.config = config
        }
    }, [config, status]);

    return { status, crestaChatWidget };
}