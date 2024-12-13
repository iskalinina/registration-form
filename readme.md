Форма для регистрации с валидацией на JS

Проект реализован на основе следующего макета:  
https://www.figma.com/design/RL10YKCRt3qbuXyYBJkS4B/20-Screen-Login-%26-Register-Mobile-App-(Community)?node-id=2-2&node-type=canvas&t=Z5Mps3fs8ZGqWBP6-0


Для запуска проекта на локальном компьютере выполните следующие шаги.

1. Предварительные требования

Убедитесь, что на вашем компьютере установлены:

- **Node.js и npm**: [Скачать Node.js](https://nodejs.org)
- **SASS**: Если не установлен, выполните команду:
      npm install -g sass

2. Установка зависимостей
   Склонируйте проект:

git clone https://github.com/iskalinina/registration-form
cd test-form

Установите зависимости:

 Сборка SASS
   Для компиляции SASS-файлов в CSS выполните:

sass styles/styles.scss styles/styles.css

3. Запуск проекта
   Откройте файл index.html в браузере.

4. Дополнительно
   Для автоматической пересборки SASS можно использовать:

sass --watch styles/styles.scss styles/styles.css

🛠 Технологии

HTML5 и CSS3 для разметки и базовых стилей.
SASS для создания структурированных и переиспользуемых стилей.
JavaScript для реализации интерактивности.
