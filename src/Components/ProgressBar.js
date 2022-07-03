import React from 'react';

export default function ProgressBar ({progress, label}){
    const parentBar = {
        height: '30px',
        width: '100%',
        backgroundColor: '#e6ebed',
        borderRadius: 40,
    }

    const childBar = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: 'rgba(0, 128, 128, 0.5)',
        borderRadius:40,
        textAlign: 'left'
    }

    const labelBar = {
        padding: 5,
        borderRadius: 40,
        color: 'black',
        width: '300px',
        height: '100%',
        display: 'inline-block',
        fontSize: '14px',
        lineHeight: '20px',
    }

    return(
        <div style={parentBar}>
            <div style={childBar}>
                <span style={labelBar}>{`${progress}% ${label}`}</span>
            </div>
        </div>
    )
}