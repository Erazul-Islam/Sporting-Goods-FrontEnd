import React from "react";
import useLoading from "../../Hooks/useLoading";
import { TLoadingComponentProps } from "../../Hooks/loading.interface";
import { Spin } from "antd";


const Loading: React.FC<TLoadingComponentProps> = ({ initialLoading, delay, children }) => {

    const [loading] = useLoading(initialLoading, delay)

    return (
        <div>
            {loading ? <Spin className="text-center items-center " size="large" style={{ margin: 'auto' }} /> : children}
        </div>
    );
};

export default Loading;


