import {Dimensions, StyleSheet} from 'react-native';
import {app_margin, app_padding} from '../../theme/metric';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  headerContainer: {
    paddingVertical: app_padding,
    paddingHorizontal: 16,
  },
  logo: {
    height: 50,
    width: 120,
  },
  messIcon: {
    color: 'white',
    fontSize: 22,
  },
  userAvatarContainer: {
    width: 54,
    height: 54,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
  username: {
    color: 'white',
    fontSize: 10,
    fontWeight: '500',
  },
  storyItemContainer: {
    marginHorizontal: 6,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIconContainer: {
    position: 'absolute',
    right: 2,
    bottom: 2,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  plusIcon: {
    color: 'blue',
    fontSize: 20,
  },

  postItemContainer: {
    marginBottom: 2,
  },
  postHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: app_padding,
    paddingVertical: app_padding,
  },
  postUserAvatar: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: app_margin,
    borderWidth: 1.5,
    borderColor: 'pink',
  },
  postImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH * 1.2,
  },
  postUsername: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
  },

  actionIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionIcon: {
    color: 'white',
    fontSize: 24,
    margin: app_margin,
  },

  likesCommentsContainer: {
    padding: app_padding,
  },
  commentAvatar: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: app_margin,
  },
  boldText: {
    fontWeight: 'bold',
  },

  addCommentContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentIcon: {
    fontSize: 12,
    color: 'orange',
    marginLeft: app_margin,
  },

  timestamp: {
    color: 'gray',
    fontSize: 11,
    marginTop: app_margin,
  },
});

export default styles;
