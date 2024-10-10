import { useEffect } from 'react';

const HubSpotForm = function({ formID }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
           if(window.hbspt) {
              window.hbspt.forms.create({
                  region: "eu1",
                  portalId: "144310863",
                  formId: formID,
                  target: '#hubspotForm'
              });
           }
        });
    }, []);

    return (
        <div id="hubspotForm" className="hubspotForm"></div>
    );
}

export default HubSpotForm;
