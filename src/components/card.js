import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableWithoutFeedback,
	TouchableHighlight,
} from 'react-native';

import {
	Grid, Row, Col
} from 'native-base';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Card extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<View {...this.props} style={css.cardContainer}>
					<View style={css.cardBody}>
						<Grid>
							<Row>
								<Col style={css.cardInfo}>
									<Text
										style={css.primaryText}
										numberOfLines={1}>
										{this.props.primaryText}
									</Text>
									<Text
										style={css.secondaryText}>
										{this.props.secondaryText}
									</Text>
								</Col>
								<View style={[css.actionButtonWrap]}>
									<Col>
										<Row>
											<TouchableWithoutFeedback hitSlop={{ top:20 }}>
												<MaterialCommunityIcons name="pencil" style={css.actionButtonPen}/>
											</TouchableWithoutFeedback>
											<TouchableWithoutFeedback hitSlop={{ top:20 }}>
												<MaterialCommunityIcons name="delete" style={css.actionButtonDel}/>
											</TouchableWithoutFeedback>
										</Row>
										<Row>
											<TouchableWithoutFeedback>
												<MaterialIcon name="more-horiz" style={css.actionButtonDel}/>
											</TouchableWithoutFeedback>
										</Row>
									</Col>
								</View>
							</Row>
						</Grid>
					</View>
			</View>
		);
	}
}

const profileAvatarSize = 46;
const horizontalOffset = 24;
const verticalOffset = 9;

const css = StyleSheet.create({
	cardContainer: {
		position: 'relative',
		height:80,
		marginBottom: 16,
		shadowRadius: 2,
		shadowOffset: { width:0, height:2 },
		shadowColor: 'rgba(184,184,184,0.5)',
		shadowOpacity: 1,
		backgroundColor: 'white',
		borderColor: 'rgba(184,184,184,0.5)',
		borderWidth: 0.5,
		borderRadius: 3,
	},
	cardBody: {
		overflow: 'hidden',
		backgroundColor: 'transparent',
		height:70,
		paddingVertical: verticalOffset,
		paddingHorizontal: horizontalOffset,
		paddingRight: 0,
	},
	profilePhoto: {
		height: profileAvatarSize,
		width: profileAvatarSize,
		borderRadius: profileAvatarSize/2,
	},
	cardInfo: {
		justifyContent: 'center'
	},
	primaryText: {
		marginTop:9,
		marginBottom: 8,
		color: '#2e70be',
		fontSize: 18,
		fontWeight: '500',
	},
	secondaryText: {
		color: '#4a4a4a',
		fontSize: 12,
		fontWeight: 'normal',
		marginBottom:9
	},
	sayingSummary: {
		marginTop: verticalOffset,
		color: '#4A4A4A',
		fontSize: 18,
		lineHeight: 25,
		fontFamily: 'Georgia'
	},
	actionButtonWrap: {
		flex: 0,
		width: 60,
		marginTop: -verticalOffset,
		justifyContent: 'flex-end',
		flexDirection: 'row',
	},
	actionButtonPen: {
		paddingVertical: verticalOffset,
		paddingRight: 5,
		color: '#2e70be',
		fontSize: 15,
		//height: 18,
	},
	actionButtonDel: {
		paddingVertical: verticalOffset,
		paddingRight: 10,
		color: '#d0011b',
		fontSize: 15,
		//height: 18,
	},
});
