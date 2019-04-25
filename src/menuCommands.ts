import { JupyterLab } from "@jupyterlab/application";
import { sadnessCommand, expectedCommand } from "./Commands";

// tslint:disable no-namespace
export namespace CommandIDs {
    export const sadness = 'jupyterlab-apputils-defect:sadness';
    export const expected = 'jupyterlab-apputils-defect:expected';
}

export function addCommands(app: JupyterLab) {
    const { commands } = app;

    commands.addCommand(CommandIDs.sadness, {
        label: 'Witness the Sadness',
        caption: 'Observe how a ReactElementWidget as the body of showDialog() is not styled',
        execute: () => sadnessCommand()
    });

    commands.addCommand(CommandIDs.expected, {
        label: 'Expected Results',
        caption: 'Observe how a React Select Element is correctly styled',
        execute: () => expectedCommand()
    });
}