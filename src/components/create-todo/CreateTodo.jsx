import { Modal, PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import { View } from 'react-native';

import { useState } from 'react';

const CreateTodo = ({
    onDismiss
}) => {
    const containerStyle = { backgroundColor: 'white', padding: 20 };
    const [text, setText] = useState('');

    return (
        <PaperProvider>
            <Modal visible={true} onDismiss={onDismiss} contentContainerStyle={containerStyle}>
                <Text>Create a new todo</Text>
                <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'space-between' }}>
                <TextInput
                    label="Todo"
                    value={text}
                    style={{ flex: 1 }}
                    onChangeText={text => setText(text)}
                />

                <Button style={{ justifyContent: 'center' }} icon="plus" mode="contained" onPress={() => console.log('Pressed')}>
                    Add
                </Button>
                </View>
            </Modal>
        </PaperProvider>

    );
};

export default CreateTodo;