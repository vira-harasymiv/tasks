/*
Виведи тільки унікальні імена через кому, чий досвід роботи три або більше років
*/

function findUniqueNames(employees) {
  const names = employees
    .filter(
      (employee) =>
        employee?.experience >= 3 && employee?.experience !== undefined,
    )
    .map((employee) => employee.name);

  return [...new Set(names)];
}

let employees = [
  { name: "Олександр Петренко", experience: 5, position: "Розробник" },
  { name: "Марія Коваленко", experience: 2, position: "Дизайнер" },
  { name: "Іван Сидоренко", experience: 7, position: "Менеджер проектів" },
  { name: "Анна Мельник", experience: 1, position: "Тестувальник" },
  { name: "Сергій Бондаренко", experience: 4, position: "Аналітик" },
  { name: "Катерина Шевченко", experience: 6, position: "Архітектор" },
  { name: "Олександр Гриценко", experience: 3, position: "DevOps інженер" },
  { name: "Олександр Гриценко", experience: 3, position: "інженер" },
];

console.log(findUniqueNames(employees));
