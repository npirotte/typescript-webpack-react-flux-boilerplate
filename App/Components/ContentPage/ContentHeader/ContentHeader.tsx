/// <reference path="../../../../typings/tsd.d.ts" />

import * as React from "react";

interface IContentHeaderProps {
    isActive: boolean;
    title: string;
};

export default class ContentHeader extends React.Component<IContentHeaderProps, {}> {
    render(): React.ReactElement<{}> {
        if (!this.props.isActive) {
            return null;
        }

        return  <div>{this.props.title}</div>;
    }
};
