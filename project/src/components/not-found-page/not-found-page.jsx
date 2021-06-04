import React from 'react';
import {Link} from 'react-router-dom';

function NotFoundPage() {

  return (

    <main className="page__main">
      <section className="not-found-page container">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </main>
  );
}

export default NotFoundPage;
