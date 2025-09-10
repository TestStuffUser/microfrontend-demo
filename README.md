# Microfrontend Demo (React + TypeScript + SingleSPA + DaSpaState)

## Структура проекта

```
microfrontend-demo/
├─ package.json
├─ app1/
│  ├─ src/
│  │  ├─ App.tsx
│  │  └─ main.tsx
│  ├─ package.json
│  ├─ tsconfig.json
│  └─ vite.config.ts
├─ app2/
│  ├─ src/
│  │  ├─ App.tsx
│  │  └─ main.tsx
│  ├─ package.json
│  ├─ tsconfig.json
│  └─ vite.config.ts
├─ root-config/
│  ├─ package.json
│  ├─ vite.config.ts
│  ├─ tsconfig.json
│  ├─ index.html
│  ├─ root-config.ts
│  └─ DaSpaState.ts
```

## Описание

- **root-config** — корневое приложение, отвечает за загрузку микрофронтов, управление общим состоянием и роутингом через SingleSPA. Включает DaSpaState для обмена данными между микрофронтами.
- **app1** — микрофронт на React+TypeScript, пример работы с темой приложения через DaSpaState.
- **app2** — микрофронт на React+TypeScript, пример работы с токеном пользователя через DaSpaState.

## Установка и запуск

1. **Установите зависимости (используйте Yarn):**
   ```sh
   yarn install
   ```

2. **Соберите микрофронты:**
   ```sh
   yarn workspace app1 build
   yarn workspace app2 build
   ```

3. **Запустите root-config:**
   ```sh
   yarn workspace root-config dev
   ```

4. **Откройте в браузере:**
   ```
   http://localhost:5173/root-config/index.html
   ```
   или просто
   ```
   http://localhost:5173
   ```

## Особенности

- Микрофронты (app1, app2) — независимые приложения на React+TypeScript, сборка как ES-модули.
- SingleSPA управляет загрузкой/выгрузкой микрофронтов и их интеграцией.
- DaSpaState — EventTarget-интерфейс для безопасного обмена данными между микрофронтами (тема, токен и пр.).
- Одна точка входа (index.html) с importmap для подгрузки всех ES-модулей.

## Расширение

- Для добавления новых микрофронтов создайте новую workspace-папку по аналогии с app1/app2 и зарегистрируйте приложение в root-config.
- Для расширения DaSpaState добавьте новые методы и события.