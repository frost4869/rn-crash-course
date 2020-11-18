import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 54,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFill,
    zIndex: -1,
  },
});

export default styles;
