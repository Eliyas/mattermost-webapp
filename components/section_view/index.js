// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {getConfig} from 'mattermost-redux/selectors/entities/general';
import {withRouter} from 'react-router-dom';

import {getDirectTeammate} from 'utils/utils.jsx';

import {goToLastViewedChannel} from 'actions/views/channel';
import SectionView from './section_view';


// Temporary selector until getDirectTeammate is converted to be redux-friendly
const getDeactivatedChannel = createSelector(
    (state, channelId) => {
        return getDirectTeammate(state, channelId);
    },
    (teammate) => {
        return Boolean(teammate && teammate.delete_at);
    }
);

function mapStateToProps(state) {
    const config = getConfig(state);

    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            goToLastViewedChannel,
        }, dispatch),
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SectionView));
