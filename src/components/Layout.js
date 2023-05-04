export default function Layout({ children }) {
    return (
        <div className="App">
            <div className="header">
                <h1>Balance Checker</h1>
            </div>

            <div className="main">
                <div className="container">{children}</div>
            </div>

            <div className="footer">&copy;2023 Balance Checker Application</div>
        </div>
    );
}
