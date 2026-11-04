import { Modal, PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import { View } from 'react-native';
import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

import { useState } from 'react';

const CreateTodo = ({
    
}) => {
    const { addTodo, handleDismiss, showCreateTodo } = useContext(TodoContext);
    const containerStyle = { backgroundColor: 'white', padding: 20 };
    const [text, setText] = useState('');

    const addTodoHandler = () => {
        addTodo(text);
        setText('');
        handleDismiss();
    };

    return (
        <PaperProvider>
            <Modal visible={showCreateTodo} onDismiss={handleDismiss} contentContainerStyle={containerStyle}>
                <Text>Create a new todo</Text>
                <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'space-between' }}>
                    <TextInput
                        label="Todo"
                        value={text}
                        style={{ flex: 1 }}
                        onChangeText={text => setText(text)}
                    />

                    <Button style={{ justifyContent: 'center' }} icon="plus" mode="contained" onPress={addTodoHandler}>
                        Add
                    </Button>
                </View>
            </Modal>
        </PaperProvider>

    );
};

export default CreateTodo;