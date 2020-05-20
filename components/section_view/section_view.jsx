// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React, { useEffect } from 'react';
import ManageSales from './manage_sales/manage_sales';
import { Route, Switch, Redirect } from 'react-router-dom';
export default class SectionView extends React.PureComponent {
    static propTypes = {};


    constructor(props) {
        super(props);
        this.state = {
            url: props.match.url,
            path: props.match.path,
            sectionId: props.match.params.sectionId,
            sectionName: props.match.params.sectionName
        };
        //window._wq = window._wq || [];

        // target our video by the first 3 characters of the hashed ID
        // _wq.push({
        //     id: "29b0fbf547", onReady: function (video) {

        //         // on play, seek the video to 10 seconds, then unbind so it
        //         // only happens once.
        //         video.bind('play', function () {
        //             video.time(10);
        //             return video.unbind;
        //         });

        //     }
        // });
    }

    onClickCloseChannel = () => {

    }

    // getScriptTagsSTR() {
    //     return `<script async="true" src="https://fast.wistia.com/embed/medias/i5u2u9ugk8.jsonp" type="text/javascript"></script>
    //     <script async="true" src="https://fast.wistia.com/assets/external/E-v1.js" type="text/javascript"></script>
    //   `
    // }
    componentDidMount(prevProps) {
        // if (!document.getElementById("wistia_script")) {
        //     var wistiaScript = document.createElement("script");
        //     wistiaScript.id = "wistia_script"
        //     wistiaScript.type = "text/javascript"
        //     wistiaScript.src = "https://fast.wistia.com/assets/external/E-v1.js"
        //     wistiaScript.async = true
        //     document.body.appendChild(wistiaScript);
        //   }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.match.url !== state.url) {
            return {
                url: props.match.url,
                path: props.match.path,
                sectionId: props.match.params.sectionId,
                sectionName: props.match.params.sectionName
            }
        }
        return null;
    }

    sectionsTypesString = "manage-sales|manage-learning|design-course-site"

    render() {
        return (
            <div
                id='app-content'
                className='app__content'
            >
                {/* <FileUploadOverlay overlayType='center' />
                <h4>{this.state.sectionName.replace("-", " ").toUpperCase()}</h4>
                <div className="wistia_embed wistia_async_29b0fbf547" style="width:640px;height:360px;">&nbsp;</div> */}
                <Switch>
                    <Route
                        path={`${this.state.path}/manage-sales/:sectionId`}
                        component={ManageSales}
                    />
                    <Route
                        path={`${this.state.path}/manage-learning/:sectionId`}
                        component={ManageSales}
                    />
                </Switch>
            </div>
        );
    }
}
