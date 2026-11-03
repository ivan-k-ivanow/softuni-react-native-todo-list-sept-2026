import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import TopBar from './components/top-bar/TopBar';
import BottomBar from './components/bottom-bar/BottomBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <TopBar />
        <BottomBar />
      </View>
    </SafeAreaProvider>
  );
}

