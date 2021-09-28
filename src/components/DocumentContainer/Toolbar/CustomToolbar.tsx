import React from 'react';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import { ToolbarPlugin, ToolbarSlot } from '@react-pdf-viewer/toolbar';
import { RenderPrintProps } from '@react-pdf-viewer/print';

type CustomToolbarProps = {
    toolbarPluginInstance: ToolbarPlugin;
};

const CustomToolbar = ({
    toolbarPluginInstance,
}: CustomToolbarProps) => {
    const { Toolbar } = toolbarPluginInstance;

    return (
        <div>
            <Toolbar>
                {(propsToolbar: ToolbarSlot) => {
                    const {
                        Print,
                    } = propsToolbar;
                    return (
                        <>
                            <div>
                                <Print>
                                    {(props: RenderPrintProps) => (
                                        <button
                                            onClick={props.onClick}
                                        >Print</button>
                                    )}
                                </Print>
                            </div>
                        </>
                    );
                }}
            </Toolbar>
        </div>
    );
};

export default CustomToolbar;