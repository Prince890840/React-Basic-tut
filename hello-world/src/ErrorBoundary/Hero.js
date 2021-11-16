import React from 'react';
import ErrorBoundary from './ErrorBoundary';

function Hero({heroName}) {
    return (
        <div className="App">
            <ErrorBoundary>
                <Hero heroName="BatMan"/>
            </ErrorBoundary>

            <ErrorBoundary>
                <Hero heroName="SuperMan"/>
            </ErrorBoundary>
            
            <ErrorBoundary>
                <Hero heroName="Joker"/>
            </ErrorBoundary>
        </div>
    );
}

export default Hero;