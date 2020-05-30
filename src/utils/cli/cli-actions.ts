import cliExamples from './cli-examples';
import cliHelp from './cli-help';
import commander from 'commander';

export class CliActions {

    private readonly actions = [
        { name: 'showHelp', run: cliHelp, checked: false },
        { name: 'showExample', run: cliExamples, checked: false },
    ];

    public check(): void {

        const path = commander.path;
        const type = commander.type;
        const example = commander.example;

        const showExampleIndex = this.actions.map(action => action.name).indexOf('showExample');
        const showHelpIndex = this.actions.map(action => action.name).indexOf('showHelp');

        if (!path && !type) {
            if (example) {
                this.actions[showExampleIndex].checked = true;
            } else {
                this.actions[showHelpIndex].checked = true;
            }
        }

    }

    public show(): void {
        for (const action of this.actions) {
            if (action.checked) {
                action.run();
            }
        }
    }

    public get hasAction(): boolean {
        for (const action of this.actions) {
            if (action.checked) {
                return true;
            }
        }
        return false;
    }
}

export default CliActions;
