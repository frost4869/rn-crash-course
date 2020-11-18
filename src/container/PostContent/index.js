import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import {mock_posts} from '../../mockdata';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

const PostContent = ({navigation}) => {
  const data = mock_posts[0];
  const {username, avatar, caption, image} = data;

  const back = () => {
    navigation.goBack();
  };

  return (
    <View>
      {/* HEADER */}
      <Header style={styles.headerContainer}>
        <Header.Left>
          <TouchableOpacity onPress={back}>
            <Icon name="chevron-thin-left" style={styles.headerIcon} />
          </TouchableOpacity>
        </Header.Left>
        <Header.Center>
          <Text style={styles.headerTitle}>Comments</Text>
        </Header.Center>
        <Header.Right>
          <Icon name="share" style={styles.headerIcon} />
        </Header.Right>
      </Header>

      <Text>{username}</Text>
      <Text>{caption}</Text>
    </View>
  );
};

export default PostContent;
