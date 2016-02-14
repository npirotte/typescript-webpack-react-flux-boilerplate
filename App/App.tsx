/// <reference path="../typings/tsd.d.ts" />

import * as React from "react";
import ContentPage from "./Components/ContentPage/ContentPage";
require("./Log/ActionLogger");

export default class App extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return  <div>
                    <ContentPage />
                </div>;
    }
};
