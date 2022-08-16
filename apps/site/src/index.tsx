import { createRoot } from "react-dom/client";
import { main } from "core";

const instance = createRoot(document.getElementById("root")!);

instance.render(<div>test</div>);

console.log(main.compute());
