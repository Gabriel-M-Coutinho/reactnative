// src/api/user.ts
import { 
    UserData,
    UserResponse,
    VerifiedUserResponse,
    AuthCheckResponse
} from '@/app/types/user';
import { Platform } from 'react-native';


const DEV_SERVER_IP = '192.168.1.112'; 
const API_URL = Platform.OS === 'web'
  ? 'http://localhost:8000/user'
  : `[http://${DEV_SERVER_IP}](http://${DEV_SERVER_IP}):8000/user`;

    export async function createUser(userData: UserData): Promise<UserResponse> {
      console.log('Creating user on Android...');
      console.log('API_URL:', API_URL);
      console.log('userData:', userData);
    
      try {
        const response = await fetch(API_URL + "/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
    
        console.log('Response status:', response.status);
        console.log('Response text:', await response.text());
    
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Request error: ${response.status} - ${errorText}`);
        }
    
        const data: UserResponse = await response.json();
        console.log('User created successfully!');
        return data;
      } catch (error: any) {
        console.error('Error creating user:', error.message);
        throw error;
      }
    }

export async function verifyUser(code: string): Promise<VerifiedUserResponse> {
    try {
        const response = await fetch(API_URL + '/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
        });

        if (!response.ok) {
            throw new Error(`Verification error: ${response.status} - ${response.statusText}`);
        }

        const data: VerifiedUserResponse = await response.json();
        return data;

    } catch (error) {
        console.error('Error verifying user:', error);
        throw error;
    }
}


export async function checkAuth(token: string): Promise<AuthCheckResponse> {
    try {
        const response = await fetch(API_URL + '/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`EmailAuth check error: ${response.status}`);
        }

        const data: AuthCheckResponse = await response.json();
        return data;

    } catch (error) {
        console.error('Error checking emailAuth:', error);
        throw error;
    }
}