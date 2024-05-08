import { Image, Pressable, Text, StyleSheet } from 'react-native';

export default function ImageButton({ onPress, source, imageStyle, text }) {
    return (
        <Pressable
            onPress={onPress}
            style={( { pressed } ) => {
                return [styles.row, pressed ? styles.pressed : styles.notPressed]
            }}>
            <Image style={imageStyle} source={source} />
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    },
    notPressed: {
        opacity: 1
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        margin: 16
    }
});