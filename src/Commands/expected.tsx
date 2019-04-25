import * as React from 'react';
import { showDialog, Dialog } from '@jupyterlab/apputils';

export function expectedCommand() {
    showDialog({
        body: (<select />),
        buttons: [Dialog.cancelButton(), Dialog.okButton({ label: 'Yay' })],
        title: 'Appropriate Styling'
    })
    .then(({ button, value }) => {
        if (button.label === "CANCEL") {
            return;
        }
    });
}