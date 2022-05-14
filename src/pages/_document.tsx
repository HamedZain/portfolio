import { FC } from "react"
import { Html, Head, Main, NextScript } from 'next/document'

const Document: FC = () => <Html lang="en">
	<Head>
		<meta charSet="UTF-8" />
		<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
		<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
		      rel="stylesheet" />

		<title>Hamed Zain</title>
	</Head>
	<body>
	<Main />
	<NextScript />
	</body>
</Html>

export default Document
