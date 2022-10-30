import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IAuthProviderData {
  token: string;
  signed: boolean;
  logout?: () => void;
  loginRedirect: (value: string) => void;
  loading: boolean;
}

export interface IContextProp {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthProviderData>({} as IAuthProviderData);

export const AuthProvider = ({children}: IContextProp) => {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStorageData = async () => {
      const storagedToken = await AsyncStorage.getItem('@smoke/token');
      if (storagedToken) {
        setToken(storagedToken);
      }
      setLoading(false);
    };
    loadStorageData();
  }, []);

  const loginRedirect = async (tokenLogin: string) => {
    setToken(tokenLogin);
    await AsyncStorage.setItem('@smoke/token', tokenLogin);
  };

  return (
    <AuthContext.Provider
      value={{signed: !!token, token, loading, loginRedirect}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
