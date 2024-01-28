# Скрипт минтит инскрипции для layer220

https://www.layer220.io/

Для запуска скрипта нужен Node.js, если ещё не установлен, устанавливаем с
https://nodejs.org/en

Запускаем терминал, переходим в терминале в папку layer220

Выполняем команды:

```
npm install
```

ждём когда установятся все зависимости если появились ошибки, пробуем команду

```
npm install --legacy-peer-deps
```

Далее необходимо добавить приватники в файл `keys.txt` каждый приватник на новой
строке

## Настройки в файле constants.ts:

`FROM_NETWORK` - в какой сети минтим

`TO_NETWORK` - в какую сеть адресована инскрипция

Запуск

```
npm start
```

## Поблагодарить автора можно отправив донат в любой evm сети на:

```
raznorabochiy.eth
raznorabochiy.arb
raznorabochiy.bnb
0xE8eAbec7CE9e8Bf78A766E8556E542BC2C9446ae
```
