import React from 'react';

export const useScript = ({ src }) => {
    const [status, setStatus] = React.useState(src ? 'loading' : 'idle');

    React.useEffect(() => {
    if (!src) {
        setStatus('idle');
        return;
    }

    let script = document.querySelector(`script[src="${src}"]`);

    if (!script) {
        script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.defer = true;
        script.type = "module";
        script.setAttribute('data-status', 'loading')
        document.body.appendChild(script)

        const setAttributeFromEvent = (event) => {
          script?.setAttribute(
            'data-status',
            event.type === 'load' ? 'ready' : 'error',
          )
        }

        script.addEventListener('load', setAttributeFromEvent)
        script.addEventListener('error', setAttributeFromEvent)
      } else {
        setStatus(script.getAttribute('data-status'))
      }

      const setStateFromEvent = (event) => {
        setStatus(event.type === 'load' ? 'ready' : 'error')
      }

      script.addEventListener('load', setStateFromEvent)
      script.addEventListener('error', setStateFromEvent)

      return () => {
        if (script) {
          script.removeEventListener('load', setStateFromEvent)
          script.removeEventListener('error', setStateFromEvent)
        }
      }
    }, [src]);

    return { status };
}