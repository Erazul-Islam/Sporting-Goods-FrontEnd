import { AppstoreOutlined, BorderRightOutlined, HomeOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    // {
    //     label: <Logo></Logo>,
    //     key: '/',
    // },
    {
        label: (
            <Link to='/'>Home</Link>
        ),
        key: '/',
        icon: <h1><HomeOutlined /></h1>,
    },
    {
        label: (
            <Link to='about'>About</Link>
        ),
        key: 'about',
        icon: <AppstoreOutlined />,
    },
    {
        label: (
            <Link to='all-products'>All Products</Link>
        ),
        key: 'all-products',
        icon: <BorderRightOutlined />,
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    { label: 'Option 1', key: 'setting:1' },
                    { label: 'Option 2', key: 'setting:2' },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    { label: 'Option 3', key: 'setting:3' },
                    { label: 'Option 4', key: 'setting:4' },
                ],
            },
        ],
    },
    {
        label: (
            <Link className="" to='manage'>Manage</Link>
        ),
        key: 'manage',
        icon: <BorderRightOutlined />,
    },
];


export default function NavBar() {


    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu className="items-center text-center justify-center bg-gradient-to-r from-custom-purple to-custom-blue " onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;

}