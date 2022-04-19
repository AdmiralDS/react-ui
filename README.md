# @admiral-ds/react-ui

Библиотека компонентов React, основанная на дизайн системе Admiral 2.1

## Содержимое

- [Соглашения и внесение изменений](CONTRIBUTING.md)
- [Установка](#Установка)
- [Подключение](#Подключение)

## Установка

@admiral-ds/react-ui требует зависимостей :

1. `styled-components > 5.1.0`
2. `react > 16.0.0`
3. `react-dom > 16.0.0`

Создать новый проект и установить библиотеку:

```shell
npx create-react-app@5.0.1 admiral-web-app --template typescript

npm i @admiral-ds/react-ui styled-components

npm i -D @types/styled-components
```

## Подключение

Для правильной работы @admiral-ds/react-ui требуется использовать `<ThemeProvider>` и `<FontsVTBGroup />`, их **рекомендуется** подключать в корне проекта:

index.tsx
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { DARK_THEME, FontsVTBGroup } from '@admiral-ds/react-ui';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={DARK_THEME}>
      <FontsVTBGroup />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
Если ваш проект не использует *create-react-app* для правильной работы шрифтов вам потребуется настройка webpack file-loader,
а для импорта svg иконок в виде React компонентов [SVGR](https://github.com/gregberge/svgr/tree/main/packages/webpack).

```sh
npm i @svgr/webpack --dev
```

```
module: {
        rules: [
            {
                test: /\.(js|jsx|tsx)$/,
                use: {
                    loader: 'babel-loader',
                     options: {
                      presets: ['@babel/preset-typescript']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/,
                type: 'asset/resource'
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: '@svgr/webpack',
                    options: {
                      prettier: false,
                      svgo: false,
                      svgoConfig: {
                        plugins: [{ removeViewBox: false }]
                      },
                      titleProp: true,
                      ref: true
                    }
                  },
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'static/media/[name].[hash].[ext]'
                    }
                  }
                ],
                issuer: {
                  and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
                }
              }
        
        ]
    }
```
