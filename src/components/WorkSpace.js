import React, { useState } from 'react'

import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";

import toolboxCategories from '../assets/toolbox-categories-config';
import '../assets/css/components/WorkSpace.css';
  

export const WorkSpace = () => {
 
    const [xml, setXml] = useState("");
    const [javascriptCode, setJavascriptCode] = useState("");

    const initialXml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

    function workspaceDidChange(workspace) {
        const code = Blockly.JavaScript.workspaceToCode(workspace);
        setJavascriptCode(code);
    }

    return (
        <div>
            <div>
                <BlocklyWorkspace
                    toolboxConfiguration={toolboxCategories}
                    initialXml={initialXml}
                    className="fill-height"
                    workspaceConfiguration={{
                    grid: {
                        spacing: 20,
                        length: 0,
                        colour: "#ccc",
                        snap: true,
                    },
                    }}
                    onWorkspaceChange={workspaceDidChange}
                    onXmlChange={setXml}
                />
            </div>
            <pre id="generated-xml">{xml}</pre>
            <textarea
                id="code"
                style={{ height: "200px", width: "400px" }}
                value={javascriptCode}
                readOnly
            >
            </textarea>
        </div>
    )
}
