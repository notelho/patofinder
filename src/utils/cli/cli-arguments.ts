import CliOptions from './cli-options';
import CliActions from './cli-actions';
import CliErrors from './cli-errors';
import cliLogo from './cli-logo';
import cliInfo from './cli-info';
import commander from 'commander';

export class CliArguments {

    private options: CliOptions;

    private actions: CliActions;

    private errors: CliErrors;

    constructor() {
        this.options = new CliOptions();
        this.actions = new CliActions();
        this.errors = new CliErrors();
    }

    public create(): void {
        this.options.create();
        this.errors.check();
        this.actions.check();
    }

    public output(): void {
        this.errors.show()
        this.actions.show();
    }

    public info(): void {
        cliLogo();
        cliInfo();
    }

    public get canRun(): boolean {
        return (!this.errors.hasError && !this.actions.hasAction);
    }

    public get vars() {
        return {
            type: commander.type,
            path: commander.path,
            example: commander.example,
            verbose: commander.verbose,
        }
    }

}

export default CliArguments;
