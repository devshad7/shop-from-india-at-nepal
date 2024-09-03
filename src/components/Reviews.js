'use client'

import React from 'react';
import { useEffect } from 'react';

const Reviews = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.setAttribute('data-use-service-core', '');
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <h1>Customer Reviews</h1>
            <div className="elfsight-app-cc28c577-0373-45fb-9cbf-e4570baaf981" data-elfsight-app-lazy></div>
        </div>
    );
};

export default Reviews;
