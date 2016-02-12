/// <reference path="../../../../typings/tsd.d.ts" />

import * as React from "react";

interface IContentBodyProps extends React.Props<ContentBody> {
    title: string;
    summary: string;
};

export default class ContentBody extends React.Component<IContentBodyProps, {}> {
    render(): React.ReactElement<{}> {
        return  <div>
                    <div>{this.props.title}</div>
                    <span>Summary:</span>
                    <div ref="summaryRef">{this.props.summary}</div>
                    {this.props.children}
                </div>;
    }
};
