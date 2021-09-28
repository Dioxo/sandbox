import React from 'react';
import DocumentContainer from './components/DocumentContainer/DocumentContainer';

interface Props {
    title: string;
}

const App: React.FC<Props> = (props: Props) => {
    return <DocumentContainer />;
};

export default App;
