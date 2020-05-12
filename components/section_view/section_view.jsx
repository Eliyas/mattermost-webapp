// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';
import FileUploadOverlay from 'components/file_upload_overlay';
export default class SectionView extends React.PureComponent {
    static propTypes = {};


    constructor(props) {
        super(props);

        this.state = {
            url: props.match.url,
            sectionId: props.match.params.sectionId,
            sectionName: props.match.params.sectionName
        };
    }

    onClickCloseChannel = () => {
       
    }

    componentDidUpdate(prevProps) {

    }

    static getDerivedStateFromProps(props, state) {
        if (props.match.url !== state.url) {
           return {
                url: props.match.url,
                sectionId: props.match.params.sectionId,
                sectionName: props.match.params.sectionName
            }
        }
        return null;
    }

    render() {

        return (
            <div
                ref='channelView'
                id='app-content'
                className='app__content'
            >
                <FileUploadOverlay overlayType='center' />
                <h4>{this.state.sectionName.replace("-", " ").toUpperCase()}</h4>
            </div>
        );
    }
}
