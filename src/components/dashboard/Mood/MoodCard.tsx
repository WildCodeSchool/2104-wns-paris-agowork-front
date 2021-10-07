import React, { useContext } from "react";
import { AuthContext } from "../../../context/Auth";
import { MoodsEnum } from "./Mood.enum";
import {
  Mood,
  Question,
  InputAchievment,
  ButtonValidation,
  Div,
} from "../../../assets/styles/dashboard/Mood";

const moods = [
  {
    id: 1,
    mood: MoodsEnum.top,
    icone: "https://i.postimg.cc/prGHKt0K/sun.png",
  },
  {
    id: 2,
    mood: MoodsEnum.oui,
    icone: "https://i.postimg.cc/9MBVF9Z8/sun-1.png",
  },
  {
    id: 3,
    mood: MoodsEnum.moyen,
    icone: "https://i.postimg.cc/WzbVD472/rain.png",
  },
  {
    id: 4,
    mood: MoodsEnum.non,
    icone: "https://i.postimg.cc/PxHTjypv/rain-1.png",
  },
];
export default function MoodCard(): JSX.Element {
  const { user } = useContext(AuthContext);
  if (user) {
    console.log(user);
  }

  return (
    <>
      <Question>Comment te sens-tu aujourd&apos;hui ?</Question>
      <Mood>
        {moods.map((u) => {
          return (
            <>
              <div className="icones">
                <img src={u.icone} alt="icone" />
                <InputAchievment />
              </div>
            </>
          );
        })}
      </Mood>
      <Div>
        <ButtonValidation>Valider</ButtonValidation>
      </Div>
    </>
  );
}
