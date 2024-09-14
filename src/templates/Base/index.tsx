import { ReactNode } from "react"

export type BaseTemplateProps = {
  children: ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <div className="relative z-10 overflow-hidden bg-white">
    <main>{children}</main>
  </div>
)

export default Base
