import Layout from '../components/Layout/layout';
import './app.scss';

export const metadata = {
    title: 'Next js app',
    description: 'Restaurants'
}
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet" />
            </head>
            <body>
                <div id='root'>
                    <Layout>{children}</Layout>
                </div>
            </body>
        </html>
    );
}
