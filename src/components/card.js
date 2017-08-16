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
										style={css.secondaryText}
										numberOfLines={2}>
										Having a home based business is a wonderful asset to your life. The problem still stands, when it comes time to advertise your business for a cheap cost. I know you have looked for this answer everywhere; I am here to share a few simple yet creative ways, to advertise your new home business. A few suggestions would be, newspapers is the one source that many people go to, when they have just opened there business. You would need to research online, for newspapers that are in your area. Newspapers are a very simple yet effective tool to use to take your business from basic home based business to business galore. Having catchy phrases and pictures or photographs of your products should help spice it up. Knowing your audience is the key to businesses. There are also, radio stations you could call in, or even email too. If you are a communicator, you can try to get onto a radio station and just share your business. You would need to write an outline or some type of catchy jingle that will help you be different from the rest of the business. The creativity comes from within. Knowing your target and knowing what you provide is gold, will surely, make you stand out from the rest of the crowd. Did you know that creativity comes from the heart and soul in once you find the creative voice you will find all kinds of ways to advertise your home business without spending a fortune for a market rep when you can do it yourself saving yourself time and money where you can be spending it on something else.

You may also want to try in write a catchy jingle that will catch your readers and target audience. Being creative with your jingle will sure bring you visitors to your business rather it’s a restaurant or corporate business many people have jingles like McDonalds, Wendy’s, Subway, and Pizza Hut these people came up with there own jingles to sale there products to there target audience. Another thing you can do is sit down and write out an outline of the things you’re trying to sale than right and catchy but simple jingle that will stop your audience dead in there tracks. Many people hire writers for there jingles in some right there jingles themselves which will also save you more money that way also without going over your budget. You can say something like Dixie Professional Writing Service always on your side. You can say something like that but with more expression to it but just remember to be creative enough to advertise your business.
									</Text>
								</Col>
								<View style={[css.actionButtonWrap]}>
									<TouchableWithoutFeedback hitSlop={{ top:20 }}>
										<MaterialCommunityIcons name="pencil" style={css.actionButtonPen}/>
									</TouchableWithoutFeedback>
									<TouchableWithoutFeedback hitSlop={{ top:20 }}>
										<MaterialCommunityIcons name="delete" style={css.actionButtonDel}/>
									</TouchableWithoutFeedback>
								</View>
							</Row>
							<TouchableWithoutFeedback hitSlop={{ top:20 }}>
								<MaterialIcon name='more-horiz' size={15} style={{ color:'#9b9b9b', alignSelf:'flex-end', marginRight:10 }} />
							</TouchableWithoutFeedback>
						</Grid>
					</View>
			</View>
		);
	}
}

const profileAvatarSize = 46;
const horizontalOffset = 10;
const verticalOffset = 9;

const css = StyleSheet.create({
	cardContainer: {
		position: 'relative',
		height:60,
		marginBottom: 16,
		shadowRadius: 2,
		shadowOffset: { width:0, height:2 },
		shadowColor: 'rgba(184,184,184,0.5)',
		shadowOpacity: 1,
		backgroundColor: 'white',
		borderColor: 'rgba(184,184,184,0.5)',
		borderWidth: 0.5,
		borderRadius: 7,
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
		justifyContent: 'flex-start',
		marginTop:-12
	},
	primaryText: {
		marginTop:8,
		color: '#2e70be',
		fontSize: 18,
		fontWeight: '500',
	},
	secondaryText: {
		marginTop:4,
		color: '#939393',
		fontSize:9,
		marginBottom:3
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
		flexDirection:'row',
		marginRight:10,
		marginLeft:20,
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
		color: '#d0011b',
		fontSize: 15,
		//height: 18,
	},
});
