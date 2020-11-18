/* eslint-disable react-native/no-inline-styles */
//@ts-check

import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Fontisto';
import {instagramLogo} from '../../assets';
import Header from '../../components/Header';
import {mock_posts, mock_stories} from '../../mockdata';
import styles from './styles';

const HomeScreen = () => {
  const renderStory = ({item}) => {
    const {username, avatar} = item;
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.storyItemContainer}>
        <View style={styles.userAvatarContainer}>
          <Image source={{uri: avatar}} style={styles.userAvatar} />
        </View>
        <Text style={styles.username} numberOfLines={1}>
          {username}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderStoryListHeader = () => {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.storyItemContainer}>
        <View style={[styles.userAvatarContainer, {borderColor: 'black'}]}>
          <Image
            source={{uri: 'https://picsum.photos/200/300'}}
            style={styles.userAvatar}
          />
          <View style={styles.plusIconContainer}>
            <EntypoIcon name="circle-with-plus" style={styles.plusIcon} />
          </View>
        </View>
        <Text style={styles.username} numberOfLines={1}>
          Your story
        </Text>
      </TouchableOpacity>
    );
  };

  const renderPostItem = ({item}) => {
    const {username, avatar, image, likes, caption, comments} = item;
    return (
      <View style={styles.postItemContainer}>
        {/* header */}
        <View style={styles.postHeaderContainer}>
          <Image source={{uri: avatar}} style={styles.postUserAvatar} />
          <Text style={styles.postUsername}>{username}</Text>
          <View style={{flex: 1}} />
          <EntypoIcon name="dots-three-horizontal" style={styles.actionIcon} />
        </View>

        {/* post image */}
        <Image source={{uri: image}} style={styles.postImage} />

        {/* actions icons */}
        <View style={styles.actionIconsContainer}>
          <View style={styles.actionIconsContainer}>
            <FeatherIcon name="heart" style={styles.actionIcon} />
            <FeatherIcon name="message-circle" style={styles.actionIcon} />
            <FeatherIcon name="send" style={styles.actionIcon} />
          </View>
          <FeatherIcon name="bookmark" style={styles.actionIcon} />
        </View>

        {/* likes and comments */}
        <View style={styles.likesCommentsContainer}>
          <Text style={{color: 'white', marginBottom: 4}}>
            Liked by <Text style={styles.boldText}>{comments[0].username}</Text>{' '}
            and <Text style={styles.boldText}>{likes} others</Text>
          </Text>
          {/* caption */}
          <Text style={{color: 'white', marginBottom: 4}}>
            <Text style={styles.boldText}>{username} </Text>
            {caption}
          </Text>
          {/* view all comments button */}
          <TouchableOpacity>
            <Text style={{color: 'gray'}}>
              View all {comments.length} comments
            </Text>
          </TouchableOpacity>
          {/* add your comment */}
          <View style={styles.addCommentContainer}>
            <Image source={{uri: avatar}} style={styles.commentAvatar} />
            <Text style={{color: 'gray'}}>Add a comment...</Text>
            <View style={{flex: 1}} />
            <FeatherIcon name="heart" style={styles.commentIcon} />
            <FeatherIcon name="smile" style={styles.commentIcon} />
            <FeatherIcon name="plus-circle" style={styles.commentIcon} />
          </View>
          {/* timestamp */}
          <Text style={styles.timestamp}>1 hour ago</Text>
        </View>
      </View>
    );
  };

  const renderPostListHeader = () => {
    /* STORIES HORIZONTAL LIST */
    return (
      <FlatList
        data={mock_stories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderStory}
        horizontal
        ListHeaderComponent={renderStoryListHeader}
        showsHorizontalScrollIndicator={false}
        style={{marginBottom: 16}}
      />
    );
  };

  return (
    <View>
      {/* HEADER */}
      <Header style={styles.headerContainer}>
        <Header.Left>
          <Image
            source={instagramLogo}
            style={styles.logo}
            resizeMode="contain"
          />
        </Header.Left>
        <Header.Right>
          <Icon name="messenger" style={styles.messIcon} />
        </Header.Right>
      </Header>

      {/* POSTS LIST */}
      <FlatList
        data={mock_posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPostItem}
        ListHeaderComponent={renderPostListHeader}
      />
    </View>
  );
};

export default HomeScreen;
