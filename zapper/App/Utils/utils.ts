import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export async function getToken(): Promise<string> {
    if (Platform.OS === 'web') {
        return localStorage.getItem('userToken') || '';
    }
    const username = await SecureStore.getItemAsync('userToken');
    return username || '';
}