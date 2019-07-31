import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { gStyle } from '../constants';

// icons
import SvgSlackLogo from './icons/Svg.SlackLogo';

const HeaderLeft = ({ navigation }) => (
  <TouchableOpacity
    activeOpacity={gStyle.activeOpacity}
    hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
    onPress={() => navigation.openDrawer()}
    style={gStyle.flexCenter}
  >
    <SvgSlackLogo />
  </TouchableOpacity>
);

HeaderLeft.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default withNavigation(HeaderLeft);