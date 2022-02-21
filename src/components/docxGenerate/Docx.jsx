import React, { Component } from 'react';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';
import desfiliacao from './docs/desfiliacao_2.docx'

function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
}

export default function Docx(props) {

    const pescador = { ...props.dados };
    const generateDocument = () => {
        loadFile(
            desfiliacao,
            function (error, content) {
                if (error) {
                    throw error;
                }
                const zip = new PizZip(content);
                const doc = new Docxtemplater(zip, {
                    paragraphLoop: true,
                    linebreaks: true,
                });

                // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                doc.render(pescador);
                const out = doc.getZip().generate({
                    type: "blob",
                    mimeType:
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                }); //Output the document using Data-URI
                saveAs(out, "output.docx");
            }
        );
    };

    return (
        <div className="p-2">
            <button onClick={generateDocument}>
                Desfiliação
            </button>
        </div>
    );
}