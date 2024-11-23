import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Header";
const { Content } = Layout;

const App = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Navbar />
            <Layout>
                <Sidebar />
                <Layout
                    style={{
                        padding: "0 24px 24px",
                    }}
                >
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            height: "90vh",
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default App;
