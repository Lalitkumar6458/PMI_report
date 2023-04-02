import React from 'react'
import * as fs from "fs";
import { Document, Packer, Paragraph, TextRun,FrameAnchorType,HorizontalPositionAlign,VerticalPositionAlign} from "docx";
import { saveAs } from 'file-saver';
const MsWord = () => {

// Documents contain sections, you can have multiple sections per document, go here to learn more about sections
// This simple example will only contain one section
const SaveWord=()=>{
    const doc = new Document({
        sections: [
            {
                properties: {},
                children: [
                    new Paragraph({
                        frame: {
                            position: {
                                x: 1000,
                                y: 3000,
                            },
                            width: 4000,
                            height: 1000,
                            anchor: {
                                horizontal: FrameAnchorType.MARGIN,
                                vertical: FrameAnchorType.MARGIN,
                            },
                            alignment: {
                                x: HorizontalPositionAlign.CENTER,
                                y: VerticalPositionAlign.TOP,
                            },
                        },
                        border: {
                            top: {
                                color: "auto",
                                space: 1,
                                value: "single",
                                size: 6,
                            },
                            bottom: {
                                color: "auto",
                                space: 1,
                                value: "single",
                                size: 6,
                            },
                            left: {
                                color: "auto",
                                space: 1,
                                value: "single",
                                size: 6,
                            },
                            right: {
                                color: "auto",
                                space: 1,
                                value: "single",
                                size: 6,
                            },
                        },
                        children: [
                            new TextRun("Hello World"),
                            new TextRun({
                                text: "Foo Bar",
                                bold: true,
                            }),
                            new TextRun({
                                text: "\tGithub is the best",
                                bold: true,
                            }),
                        ],
                    })
                ],
            },
        ],
    });
    
    // Used to export the file into a .docx file
    // Packer.toBuffer(doc).then((buffer) => {
    //     fs.writeFileSync("My Document.docx", buffer);
    // });
    Packer.toBlob(doc).then((blob) => {
        // saveAs from FileSaver will download the file
        saveAs(blob,"My Document.docx");
    });
}


// Done! A file called 'My Document.docx' will be in your file system.
  return (
    <div>MsWord
        <button onClick={()=>SaveWord()}>Save MS word</button>
    </div>
  )
}

export default MsWord