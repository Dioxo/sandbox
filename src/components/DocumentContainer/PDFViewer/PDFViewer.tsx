import React from 'react';

import { Viewer } from '@react-pdf-viewer/core';
import { ToolbarPlugin } from '@react-pdf-viewer/toolbar';


type PDFViewerProps = {
    toolbarPluginInstance: ToolbarPlugin;
    fichier: string;
};

const PDFViewer = ({ toolbarPluginInstance, fichier }: PDFViewerProps) => {
    return (
        <div className="pdf-viewer-container">
            <Viewer
                fileUrl={fichier}
                plugins={[toolbarPluginInstance]}
            />
        </div>
    );
};

export default PDFViewer;
