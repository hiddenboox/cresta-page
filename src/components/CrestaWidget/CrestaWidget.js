import { useCrestaWidget } from '../../hooks/useCrestaWidget';

export const CrestaWidget = ({ src, config }) => {
    useCrestaWidget({ src, config })
    return null
}