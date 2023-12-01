import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
		<Html lang="en">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta
					property="og:title"
					content="My page title"
					key="title"
				/>
				{/* <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400;1,9..40,500;1,9..40,600&family=Poppins:ital,wght@0,100;0,400;0,500;0,600;0,700;1,100;1,200;1,400;1,500&display=swap" rel="stylesheet"></link> */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
