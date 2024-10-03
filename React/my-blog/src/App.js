import './App.css';
import HomePage from './Pages/HomePage';
import ArticlePage from './Pages/ArticlePage';
import ArticlesListPage from './Pages/ArticleListPage';
import NotFoundPage from './Pages/NotFoundPage';
import AboutPage from './Pages/AboutPage';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import NavBar from './NavBar';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="articles" element={<ArticlesListPage />} />
          <Route path="articles/:articleId" element={<ArticlePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;