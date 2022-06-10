import React from "react";
import * as S from "./styles";

const Main = () => {
  return (
    <S.Wrapper>
      <S.Box>
        <S.Logo
          src="https://icon-library.com/images/react-icon/react-icon-29.jpg"
          alt="Logo do React (forma de átomo)"
        />
        <S.Title>Daniel Jacon</S.Title>
      </S.Box>
      <S.Description>
        Aprendendo e desenvolvendo sistemas com NextJS
      </S.Description>
      <S.Illustration
        src="/img/illustration.svg"
        alt="Boneco em 3D com um celular ao lado"
      />
    </S.Wrapper>
  );
};

export default Main;
