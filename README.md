# Библиотека компонентов

admiral-react - Это библиотека компонентов React, основанная на дизайн системе Admiral.

## Содержимое

- [Соглашения и внесение изменений](CONTRIBUTING.md)
- [Установка](#Установка)
- [Подключение](#Подключение)
- [Примеры](#Примеры)

## Установка

admiral-react требует зависимостей :

1. `styled-components@^5.1.0`
2. `@admiral-ds/fonts@1.0.0`
3. `@admiral-ds/icons@^2.0.1`
4. `react > 16.0.0`
5. `react-dom > 16.0.0`

Установить admiral-react и зависимости одной командой:

```sh
npm i @admiral-ds/react-ui styled-components @admiral-ds/fonts
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

## Примеры

```tsx
import { Button, InputField } from '@admiral-ds/react-ui';
import React from 'react';
import { Box } from 'reflexbox';

export const Form = () => (
  <>
    <InputField label="login" />
    <Box mt={16}>
      <InputField label="password" type="password" />
    </Box>
    <Box mt={16}>
      <Button type="button">Войти</Button>
    </Box>
  </>
);
```
