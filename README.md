1.Создайте на вашем github репозиторий с именем HW9-Form. Все результаты нужно запушить в ваш репозиторий и прикрепить ссылку на hillel портале.

--------------------------------

2.Создайте index.html в котором подключите js script.

--------------------------------

3.Создайте README.md с описанием задания.

--------------------------------

4.За основу используйте задание по todo, которое ранее выполнили.
    4.1. Добавьте автофокус в input для создания задачи, при загрузке страницы.
    4.2. Применить кастомные валидации:
        4.2.1. может содержать латинские буквы в любом кейсе
        4.2.2 может содержать цифры от 0-9
        4.2.3. minlength 2
        4.2.3. maxlength 15
    4.3 При invalid валидации подсветить красным бордером и красным цветом invalid поле. 
    4.4 Опционально: выводить текст об ошибке под инпутом.
    4.5 При исправлении в valid состояние убрать error подсветку на событие change или input.
    4.6 При submit form когда все валидации valid создать задачу.
    4.7 Когда данные не соответствуют валидации задача не должна создаваться.