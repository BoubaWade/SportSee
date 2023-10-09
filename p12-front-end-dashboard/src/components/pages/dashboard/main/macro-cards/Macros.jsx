import { styled } from "styled-components";
import MacroCard from "../../../../reusables-ui/MacroCard";
import getFormatedDatasMacros from "../../../../../config/configDatasMacro";

export default function Macros({ macrosDatas }) {
  const datasMacroCards = getFormatedDatasMacros(macrosDatas);

  return (
    datasMacroCards && (
      <MacrosStyled>
        {datasMacroCards.map(({ id, icon, value, name }) => {
          return <MacroCard key={id} icon={icon} value={value} name={name} />;
        })}
      </MacrosStyled>
    )
  );
}

const MacrosStyled = styled.div`
  grid-area: 1/2/2/3;
  display: grid;
  gap: 40px;
`;
