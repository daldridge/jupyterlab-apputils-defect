import { JupyterLab, JupyterLabPlugin } from '@jupyterlab/application';
import { IMainMenu } from '@jupyterlab/mainmenu';
import { INotebookTracker } from "@jupyterlab/notebook";
import { Menu } from '@phosphor/widgets';

import { addCommands, CommandIDs } from './menuCommands';

const pluginId = '@daldridge/jupyterlab-apputils-defect:plugin';

const extension: JupyterLabPlugin<void> = {
    id: pluginId,
    requires: [IMainMenu, INotebookTracker],
    autoStart: true,
    activate: (app: JupyterLab, mainMenu: IMainMenu, nbTracker: INotebookTracker) => {
        addCommands(app);

        const { commands } = app;
        const menu = new Menu({ commands });
        menu.title.label = 'Defect Demo';
        [CommandIDs.sadness, CommandIDs.expected].forEach(
            command => menu.addItem({ command })
        );
        mainMenu.addMenu(menu);
    }
};

export default extension;
