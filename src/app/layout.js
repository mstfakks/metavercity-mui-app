import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Sriracha"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
