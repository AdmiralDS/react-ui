# @admiral-ds/react-ui

Библиотека компонентов React, основанная на дизайн системе Admiral 2.1

## Содержимое

- [Соглашения и внесение изменений](CONTRIBUTING.md)
- [Установка](#Установка)
- [Подключение](#Подключение)

## Установка

admiral-react требует зависимостей :

1. `styled-components > 5.1.0`
2. `react > 16.0.0`
3. `react-dom > 16.0.0`

Создать новый проект:

```shell
npx create-react-app@5.0.1 admiral-web-app --template typescript
```

Установить admiral-react и зависимости одной командой:

```shell
npm i @admiral-ds/react-ui styled-components

npm i -D @types/styled-components
```

## Подключение

Для правильной работы admiral-react требуется использовать `<ThemeProvider>` и `<FontsVTBGroup />`, их **рекомендуется** подключать в корне проекта:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { DARK_THEME, FontsVTBGroup } from '@admiral-ds/react-ui';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={DARK_THEME}>
      <FontsVTBGroup />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
```

Для правильной работы шрифтов требуется настройка webpack file-loader,
а для импорта svg иконок в виде реакт компонентов [SVGR](https://github.com/gregberge/svgr/tree/main/packages/webpack).

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
