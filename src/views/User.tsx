import { Typography, Image } from 'antd';
import React, { useState, useEffect } from 'react';

import "react-notion/src/styles.css";
import { NotionRenderer, BlockMapType } from "react-notion";
import "prismjs/themes/prism-tomorrow.css";

export const User: React.FunctionComponent = () => {

    const [notion, setNotion] = useState<any>();

    useEffect(() => {
        test();
    }, []);

    const test = async () => {
        var temp = 'd24d16c8b55e4daf82c70de59a58d57a';
        const data: BlockMapType = await fetch(`https://notion-api.splitbee.io/v1/page/${temp}`).then(res => res.json());
        setNotion(data);
    };

    return (
        !notion ?
            <></> :
            <NotionRenderer
                blockMap={notion}
                customBlockComponents={{
                    image: ({ blockValue, renderComponent }) => {
                        return (<>{renderComponent()}</>);
                    }
                }}
            />
    );
};

// https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6349d1f9-cf3d-4f2d-8a51-a83205cc23bf%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2022-09-28_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_7.42.01.png?table=block&id=26949b0f-a058-414d-9cb5-674086a7439f&cache=v2



/*
<NotionRenderer
    blockMap={notion}
    customBlockComponents={{
        text: ({ blockValue, renderComponent }) => {
            console.log(blockValue, renderComponent);
            return (
                <Typography.Text > {renderComponent()}</Typography.Text >
            );
        },
        image: ({ blockValue, renderComponent }) => {
            console.log(blockValue, renderComponent);
            return (
                <Image
                    width={200}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            );
        }

    }}
/>
*/