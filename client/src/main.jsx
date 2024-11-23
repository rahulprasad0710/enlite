import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ConfigProvider
            theme={{ token: { colorPrimary: "#008080", borderRadius: 4 } }}
        >
            <RouterProvider router={router} />
        </ConfigProvider>
    </StrictMode>
);
