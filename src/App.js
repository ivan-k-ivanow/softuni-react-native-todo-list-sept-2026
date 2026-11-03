import { View } from 'react-native';
import TopBar from './components/top-bar/TopBar';
import BottomBar from './components/bottom-bar/BottomBar';
import CreateTodo from './components/create-todo/CreateTodo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {
  const [showCreateTodo, setShowCreateTodo] = useState(true);
  
  const handleDismiss = () => {
    setShowCreateTodo(false);
  };

  const openCreateTodoHandler = () => {
    setShowCreateTodo(true);
  };

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <TopBar />
        {showCreateTodo && <CreateTodo onDismiss={handleDismiss}  />}
        <BottomBar openCreateTodo={openCreateTodoHandler} />
      </View>
    </SafeAreaProvider>
  );
}

