import React, { useState, useEffect } from 'react';
import { Button, Spin } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import { Util } from '../../util/Util';

import "react-notion/src/styles.css";
import { NotionRenderer, BlockMapType } from "react-notion";

interface IPopupInfoProps {
    type: number;
    title: string;
    notion: string;
    onClosed: () => void;
}

export const PopupInfo: React.FunctionComponent<IPopupInfoProps> = (props) => {

    const [isLoading, setLoading] = useState<boolean>(false);
    const [info, setInfo] = useState<any>();

    useEffect(() => {
        if (props.notion != '') {
            console.log('props.notion', props.notion);
            getNotionInfo(props.notion);
        }
    }, [props.notion]);

    const getNotionInfo = async (notion: string) => {
        setLoading(true);
        const data: BlockMapType = await fetch(`https://notion-api.splitbee.io/v1/page/${notion}`).then(res => res.json());
        setLoading(false);
        setInfo(data);
    };

    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 2, display: 'flex', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

            {/* side */}
            <div
                style={{ width: Util.isMobile() ? 0 : 100 }}
                onClick={(e) => props.onClosed()}
            />

            {/* body */}
            <div style={{ flex: 1, backgroundColor: '#fff', display: 'flex', flexDirection: 'column' }} >

                {/* header */}
                <div style={{ width: '100%', display: 'flex', justifyItems: 'center', alignItems: 'center' }} >
                    <Button
                        type='text'
                        icon={<CloseOutlined />}
                        size="large"
                        onClick={() => props.onClosed()}
                    />
                    <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: "bold" }}>
                        {props.type == 1 ? 'Education' : (props.type == 2 ? 'Company' : (props.type == 3 ? 'Project' : (props.type == 4 ? 'Award' : '')))}
                        {' :: '}
                        {props.title}
                    </div>
                </div>

                {/* line */}
                <div style={{ height: 1, width: '100%', backgroundColor: 'lightblue' }} />

                {/* desc */}
                <div style={{ flex: 1, padding: 10, overflow: 'auto', width: window.innerWidth - (Util.isMobile() ? 0 : 100) }} >
                    {!info ?
                        <div style={{ textAlign: 'center' }}> {isLoading ? <Spin size="large" /> : <>준비중</>}</div> :
                        <NotionRenderer blockMap={info} />
                    }
                </div>

            </div>
        </div>
    );
};