
import { useCrestaWidget } from '../../hooks/useCrestaWidget';

export const CrestaWidget = ({ src, config }) => {
    const { status, crestaChatWidget } = useCrestaWidget({ src, config })


    console.log({ status, crestaChatWidget })
    return null
}