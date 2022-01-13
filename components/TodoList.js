import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

function TodoList({todos, onToggle, onRemove}) {
    return( // 구분선 표시 안됨. (ItemSeparatorComponent)
        <FlatList
            ItemSeparatorComponent={() => <View styles={styles.separator} />}
            style={styles.list}
            data={todos}
            renderItem={({item}) => (
                <TodoItem 
                    id={item.id} 
                    text={item.text} 
                    done={item.done} 
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            )}
            keyExtractor={item => item.id.toString()}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    separator: {
        backgroundColor: '#e0e0e0',
        height: 1,
    },
});

export default TodoList;