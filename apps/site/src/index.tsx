import { createRoot } from "react-dom/client";
import * as core from "@marvelsq/i18n-core";

const instance = createRoot(document.getElementById("root")!);

instance.render(<div>test</div>);

console.log(core.main.compute());
