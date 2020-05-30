import cliInstall from "../utils/cli/cli-install";
import cliLogo from "../utils/cli/cli-logo";

function postInstall() {
    cliLogo();
    cliInstall();
}

postInstall();
