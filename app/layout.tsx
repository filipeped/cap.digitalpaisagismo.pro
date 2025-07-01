export const metadata = {
  title: "Proxy CAPI",
  description: "Diagnóstico do Proxy CAPI"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
