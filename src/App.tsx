// https://qiita.com/takeshisakuma/items/823d035919b89020f4e1
// Reactルーター参考ページ

import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// 各ページ
import Page1 from './Page1';

interface AppProps {
    children?: string;
}

const App = (props: AppProps) => {
    return (
        <Router>
        </Router>
    );
}

export default App;
