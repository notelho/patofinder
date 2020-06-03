import cliInstall from "../cli/cli-install";
import cliLogo from "../cli/cli-logo";

function postInstall(): void {
    cliLogo();
    cliInstall();
}

postInstall();
