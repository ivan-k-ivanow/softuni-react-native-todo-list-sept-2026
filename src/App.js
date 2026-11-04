import { View } from 'react-native';
import { useContext } from 'react';
import { TodoContext } from './contexts/TodoContext';
import TopBar from './components/top-bar/TopBar';
import BottomBar from './components/bottom-bar/BottomBar';
import CreateTodo from './components/create-todo/CreateTodo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TodoProvider from './contexts/TodoContext';

export default function App() {
  const { showCreateTodo, handleDismiss, openCreateTodoHandler } = useContext(TodoContext);

  return (
    <SafeAreaProvider>

      <TodoProvider>
        <View style={{ flex: 1 }}>
          <TopBar />

          <CreateTodo />
          
          <BottomBar />
        </View>
      </TodoProvider>

    </SafeAreaProvider>
  );
}

