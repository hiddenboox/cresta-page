import { useScript } from "./useScript";

export const useCrestaWidget = ({ src, config }) => {
    window.CrestaChatWidget = {
        config
    };
    const { status } = useScript({ src })

    return { status };
}