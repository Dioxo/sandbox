import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import CustomToolbar from './Toolbar/CustomToolbar';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import PDFViewer from './PDFViewer/PDFViewer';

import Fichier from '../../../public/pdf-open-parameters.pdf';
const DocumentContainer = () => {
    const toolbarPluginInstance = toolbarPlugin();

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.js">
                <div className="document-container">
                    <CustomToolbar
                        toolbarPluginInstance={toolbarPluginInstance}
                    />
                    <PDFViewer
                        toolbarPluginInstance={toolbarPluginInstance}
                        fichier={Fichier}
                    />
                </div>
        </Worker>
    );
};

export default DocumentContainer;
