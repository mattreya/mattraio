import React, { useEffect } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

const TerminalComponent = () => {
    useEffect(() => {
        const terminal = new Terminal();
        terminal.open(document.getElementById('xterm-container'));
        terminal.write('Welcome to the embedded terminal!\r\n');
    }, []);

    return (
        <div
            id="xterm-container"
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
            }}
        ></div>
    );
};

export default TerminalComponent;
