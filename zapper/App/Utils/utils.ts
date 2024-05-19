import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export async function getUsername(): Promise<string> {
    if (Platform.OS === 'web') {
        return localStorage.getItem('userToken') || '';
    }
    const token = await SecureStore.getItemAsync('userToken');
    console.log("ME HAN PEDIDO EL USERNAME, VALE: " + token)
    return token || '';
}