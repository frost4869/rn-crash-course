import {StyleSheet} from 'react-native';
import {app_padding} from '../../theme/metric';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#000',
    paddingHorizontal: app_padding,
  },
  headerIcon: {
    color: '#fff',
    fontSize: 20,
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
export default styles;
