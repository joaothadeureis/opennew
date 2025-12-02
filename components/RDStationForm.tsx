
import React, { useEffect } from 'react';

export const RDStationForm: React.FC = () => {
  useEffect(() => {
    const scriptId = 'rd-station-form-script';
    const formId = 'form-lp-whitelabel-v2-82874ee1d19f00e9a752';
    
    // Check if script already exists
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
      script.async = true;
      script.onload = () => {
        // @ts-ignore
        if (window.RDStationForms) {
          // @ts-ignore
          new window.RDStationForms(formId, 'UA-219213962-1').createForm();
        }
      };
      document.body.appendChild(script);
    } else {
        // If script exists, try to instantiate form again in case of navigation
        // @ts-ignore
        if (window.RDStationForms) {
            // @ts-ignore
            new window.RDStationForms(formId, 'UA-219213962-1').createForm();
        }
    }
  }, []);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg overflow-hidden">
        <div role="main" id="form-lp-whitelabel-v2-82874ee1d19f00e9a752"></div>
    </div>
  );
};