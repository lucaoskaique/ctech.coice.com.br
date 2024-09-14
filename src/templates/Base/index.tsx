import { ReactNode } from "react"

export type BaseTemplateProps = {
  children: ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <div className="relative flex min-h-screen w-full flex-col justify-between">
    <main>{children}</main>

    <footer className="bg-highlight">
      <h1>Footer</h1>
    </footer>
  </div>
)

export default Base
