# React Dadata
React component for hints using DaData.ru service

Supported hints: addresses, organizations, banks, email, fio, passport.

### Installation
```
npm install react-dadata-box
```
or
```
yarn react-dadata-box
```

### Usage
```javascript
import ReactDadataBox from 'react-dadata-box';

// ...

<ReactDadataBox token="API_KEY" query="Москва" />
```

### Props
To translate

| Property  | Required | Type | Description | Default |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| allowClear | Not | boolean | Show icon to clear current value | false |
| autocomplete | Not | string | The parameter describing the autocomplete of the field, for example street-address, if not set, will be set to off | "off" |
| className | Not | string | Дополнительный класс стилей | |
| count | Not | string | Number of records returned from dadata | 10 |
| customActions | Not | ReactNode &#124; function [return: ReactNode] | Возможность добавления произвольных действия\[-ий\](элемента\[-ов\]) в конец базового выпадающего списка. Если устанавливается как функция, то принимает на вход полученный перечень вариантов(suggestions) в качестве аргумента. Каждый элемент (если в итоге предоставляется массив) - оборачивается в стандартный контейнер для отдельно взятого suggestion | |
| customEndpoint | Not | string &#124; object | Указать нестандартный URI для запроса подсказок (для использования в сценарии проксирования или при разворачивании сервиса локально в своей инфраструктуре); Если строка - рассматрривается как полный адрес хоста или относительный путь от корня текущего сайта (адрес api будет подставлен автоматически см. значение по умолчанию), если объект, то подразумевается наличие полей 'host' и/или 'api', опущенные значения будут подставленны из значения по умолчанию |{<br/>&nbsp;&nbsp;host: 'https://suggestions.dadata.ru',<br/>&nbsp;&nbsp;api: 'suggestions/api/4_1/rs/suggest'<br/>}|
| customInput | Not | function | Функция принимающая на вход props типового пол ввода, и позволяющая установить кастомный input-компонент или компонент с аналогичной сигнатурой | `(params) => <input { ...params } />`
| debounce | Not | number | Time of debouncing a service call for search bar changes | 350 мс|
| onChange | Not | function | Function called when selecting an option from list | |
| onIdleOut | Not | function | Функция, вызываемая при изменении строки поиска, если по текущей подстроке не найдено вариантов подсказки, принимая текущую строку поиска как аргумент | |
| payloadModifier | Not | object &#124; function | Объект модифицирующий отправляемый payload ({...nativePayload, ...payloadModifier}}), или функция формирующая отправляемый payload, принимает аргументом объект payload формируемый компонентом для модификации. (Таким образом можно формировать и устанавливать дополнительные параметы н/п фильтрацию) | |
| placeholder | Not | string | Text placeholder | |
| query | Not | string | The substring for the query in DaData, the value for the input field, defines the set of available values ​​when expanding the list | |
| showNote | Not | boolean | Show tooltip for user options in dropdown list | true |
| silentQuery | Not | string | Подстрока для запроса в DaData, которая применяется если свойство **query** не передано или является пустой строкой, оно не отображается в поле ввода, и в этом случае определяет список значений при раскрытии списка | |
| token | Yes | string | Authorization Token DaData.ru | |
| type | Not | string | Type of data to be requested: address (address), organization (party) or bank (bank), mail (email), name (fio), passport (fms_unit) | "address" |

### Development

Clone the repository

`npm i`

`npm start`

#### Build
??
`npm transpile`

