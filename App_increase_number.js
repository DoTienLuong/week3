import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24 }}>{count}</Text>
            <Button title="Increment" onPress={increment} />
        </View>
    );
};

export default Counter;


