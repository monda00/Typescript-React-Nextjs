import { NextPage } from "next"
import styled, { css } from "styled-components"

const redBox = css`
  padding: 0.25em 1em;
  border: 3px solid #ff0000;
  border-radius: 10px;
`

const font = css`
  color: #1e90ff;
  font-size: 2em;
`

const ButtonMixin = styled.button`
  background: transparent;
  margin: 1em;
  cursor: pointer;
  ${redBox}
  ${font}
`

const TextMixin = styled.p`
  font-weight: bold;
  ${font}
`

const BorderTextMixin = styled(TextMixin)`
  padding: 8px 16px;
  border: 3px solid blue;
  border-radius: 8px;
`

type ButtonProps = {
  color: string
  backgroundColor: string
}

const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.color};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  cursor: pointer;
`

const Page: NextPage = () => {
  return (
    <div>
      <div>
        <Button backgroundColor="transparent" color="#FF0000">
          Hello
        </Button>
        <Button backgroundColor="#1E90FF" color="white">
          World
        </Button>
      </div>
      <div>
        <ButtonMixin>Hello</ButtonMixin>
        <TextMixin>World</TextMixin>
      </div>
      <div>
        <BorderTextMixin>Hello World</BorderTextMixin>
      </div>
      <div>
        <TextMixin as="a" href="/">
          Go to index
        </TextMixin>
      </div>
    </div>
  )
}

export default Page
