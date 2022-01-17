import { Header } from "../../components/organisms/Header/Header"


export const BaseScreen = ({children, id}) => {
  return (
    <>
      <Header id={id}/>
      <main>
        {children}
      </main>
    </>
  )
}
