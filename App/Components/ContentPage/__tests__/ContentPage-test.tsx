/// <reference path="../../../../typings/jasmine/jasmine.d.ts" />

import * as React from "react";
import * as TestUtils  from "react-addons-test-utils";
import ContentPage from "./../ContentPage";

// Check here what's avaiable in TestUtils: https://facebook.github.io/react/docs/test-utils.html
describe("ContentPage tests", () => {
    describe("render tests", () => {
        it("renders content page", () => {
            const component: React.Component<{}, {}> = TestUtils.renderIntoDocument(
                <ContentPage />
            );
        });
    });
});
