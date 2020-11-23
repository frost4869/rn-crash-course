import {StyleSheet} from 'react-native';
import {app_margin, app_padding} from '../../theme/metric';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    backgroundColor: '#000',
  },
  headerFont: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
  },
  button: {
    padding: app_padding,
    backgroundColor: 'pink',
    borderRadius: 5,
    margin: app_margin,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
