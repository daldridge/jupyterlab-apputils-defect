import { showDialog, Dialog } from '@jupyterlab/apputils';
import { SadnessWidget } from '../Widgets/SadnessWidget';

export function sadnessCommand() {
    showDialog({
        body: new SadnessWidget(),
        buttons: [Dialog.cancelButton(), Dialog.okButton({ label: 'Bummer' })],
        title: 'Styling Sadness'
    })
    .then(({ button, value }) => {
        if (button.label === "CANCEL") {
            return;
        }
    });
}