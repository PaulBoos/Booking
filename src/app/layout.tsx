import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<html>
		<body>
		<div>
			<div className={"w-full"}>
				<h1>Topnav</h1>
			</div>
			<main>{children}</main>
		</div>
		</body>
		</html>
	);
}