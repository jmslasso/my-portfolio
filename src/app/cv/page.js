'use client';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const CVPage = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = () => {
        setIsDownloading(true);
        const link = document.createElement('a');
        link.href = '/cv/CV Juan Manuel Solis.pdf';
        link.download = 'CV Juan Manuel Solis.pdf';
        link.click();

        setIsDownloading(false);
    };


    return (
        <button onClick={handleDownload} disabled={isDownloading}>
            {isDownloading ? 'Downloading...' : 'Download File'}
        </button>
    );
};

export default CVPage;