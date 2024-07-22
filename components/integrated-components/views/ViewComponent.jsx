import React from 'react';
import CaseStudyFilter from './CaseStudyFilter';
import ClientsList from './ClientsList';

function ViewComponent(props) {
    let data = props.view;
    
    const fnViewComponent = () => {
        switch(data) {
          case "case-study-filter":   
            return <CaseStudyFilter />;
          case "clients":   
            return <ClientsList />;
                   
          default:      
            return <h1>No Component match</h1>
        }
      }

	return (
        <>
            { fnViewComponent() }
        </>
	);
}

export default ViewComponent;