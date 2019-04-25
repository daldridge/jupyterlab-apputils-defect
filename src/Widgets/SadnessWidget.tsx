import * as React from 'react';
import { ReactElementWidget } from '@jupyterlab/apputils';

export class SadnessWidget extends ReactElementWidget {
    constructor() {
        super(<select />);
    }

    public getValue(): string {
        return 'sadness';
    }
}