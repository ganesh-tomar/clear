import React from 'react';
import CaseStudyFilter from './CaseStudyFilter';
import ClientsList from './ClientsList';
import NewsLanding from './NewsLanding';
import InsightLanding from './InsightLanding';
import ClearNews from './ClearNews';
import FeaturedClearNews from './FeaturedClearNews';

function ViewComponent(props) {
    let data = props.view;
    
    const fnViewComponent = () => {
        switch(data) {
          case "case-study-filter":   
            return <CaseStudyFilter />;
          case "clients":   
            return <ClientsList />;
          case "news-landing":
            return <NewsLanding />;
          case "insight-landing":
            return <InsightLanding />; 
          case "clear-news":
            return <ClearNews />;    
          case "featuredclear-news":
              return <FeaturedClearNews />;      
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