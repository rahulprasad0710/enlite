import { MailOutlined, UploadOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

const Sidebar = () => {
    const { Sider } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const sidebarMenus = [
        {
            key: "sub1",
            label: "Upload",
            icon: <UploadOutlined />,
            children: undefined,
        },
        {
            key: "sub2",
            label: "Mail",
            icon: <MailOutlined />,
            children: undefined,
        },
    ];
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
                items={sidebarMenus}
            />
        </Sider>
    );
};

export default Sidebar;
