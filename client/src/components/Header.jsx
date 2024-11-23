import { Layout, Menu } from "antd";

const Navbar = () => {
    const { Header } = Layout;
    const items1 = [
        {
            key: "1",
            label: "Home",
            children: undefined,
        },
        {
            key: "2",
            label: "About",
            children: undefined,
        },
        {
            key: "3",
            label: "AWS Architecture",
            children: undefined,
        },
    ];
    return (
        <Header
            style={{
                display: "flex",
                alignItems: "center",
            }}
        >
            <div className='demo-logo' />
            <Menu
                theme='dark'
                mode='horizontal'
                defaultSelectedKeys={["2"]}
                items={items1}
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
            />
        </Header>
    );
};

export default Navbar;
