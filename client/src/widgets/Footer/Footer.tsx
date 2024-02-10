import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <ul>
        <li>©2024</li>
        <li>Все права защищены</li>
        <li>
          ИП Мамин Роман Александрович (ОГРНИП: 323745600116446 ИНН:
          744715897415)
        </li>
        <li>syncsoundshop@gmail.com</li>
        <li>8 (995) 105-29-01</li>
      </ul>
      <ul>
        <Link to="/">Условия предоставления товаров</Link>
        <Link to="/">Политика обработки персональных данных</Link>
        <Link to="/">Информация на сайте не является публичной офертой</Link>
      </ul>
    </div>
  );
};
