import { TextInput, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'

export default function Input() {
    const [text, setText] = useState("");
    function changeTextHandler(changedText) {
        console.log("user is typing ", changedText);
        setText(changedText);
    }
    return (
        <View>
            <TextInput
                placeholder="Type something"
                style={styles.input}
                value={text}
                onChangeText={changeTextHandler}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        width: "50%",
        borderBottomWidth: 2,
        borderBottomColor: "purple",
    },
})