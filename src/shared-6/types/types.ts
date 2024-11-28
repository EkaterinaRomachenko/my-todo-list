// тип для темы
export type Theme = 'light' | 'dark';

// типы для входа в приложение 
export type SignInProps = {
    username: string;
    password: string;
    handleSubmit: () => void;
};

export const INITIAL_STATE: SignInProps = {
    username: 'ekaterinaromashchenko15@yandex.ru',
    password: 'averina',
    handleSubmit: () => { },
};
