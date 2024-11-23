import { MailOutlined, UploadOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const { Sider } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Sider
            width={200}
            style={{
                background: colorBgContainer,
                padding: "24px 0 0 0",
            }}
        >
            <Menu
                mode='inline'
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{
                    height: "100%",
                    borderRight: 0,
                }}
            >
                <Menu.Item key='1' icon={<UploadOutlined />}>
                    <Link to='/upload'>Upload</Link>
                </Menu.Item>
                <Menu.Item key='2' icon={<MailOutlined />}>
                    <Link to='/upload'>Mail</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;
