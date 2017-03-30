# Elefant08.ru

## Каталог магазинов (buy.html) 

Массив меток: 

```json
markMags = []
```

Фирменные магазины всегда нулевым элементом в массиве

```json
markMags = [{
  //  Фирменные магазины
}, {
  //  Район
}, {
  //  Район
}, {
  ...
}]
```

Заполнение:

```json
{
    district: "Ленинский р-н", // Название района
    mags: [{
        id: 0, // Глобальный порядковый номер
        name: "Велес ТЦ", // название магазина
        adr: "ул. Толстого, 32а", // Адрес магазина
        time: "09:00 - 22:00", // Часы работы магазина
        coordinates: [43.121116074495795, 131.9132434] // Координаты
    },{
        ...
    },{
        ...
    }]
}
```