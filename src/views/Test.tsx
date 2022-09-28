import React, { useState, useEffect } from 'react';

export const Test: React.FunctionComponent = () => {

    useEffect(() => { }, []);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <div style={{ width: '100%', height: '100%', position: 'absolute' }}>test</div>
            <div style={{ width: '100%', height: '100%' }}>aaaa</div>
        </div >
    );
};