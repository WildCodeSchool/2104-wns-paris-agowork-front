import React, { useContext } from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { AuthContext } from "../../../context/Auth";
import { News, Hr } from "../../../assets/styles/dashboard/News";

const news = [
  {
    id: 1,
    title: "Les travaux de l'amphi n°2 bientôt terminé",
    photo: "https://i.postimg.cc/mkSxVcYF/dom-fou-YRMWVcdyhm-I-unsplash.jpg",
  },
  {
    id: 2,
    title: "Ne tardez pas l'ouverture aux formations Erasmus débute le 20 Mars",
    photo:
      "https://i.postimg.cc/3x1kjVGt/capturing-the-human-heart-Trh-LCn1ab-MU-unsplash.jpg",
  },
  {
    id: 3,
    title: "Remise des diplômes le 10 Juin",
    photo:
      "https://i.postimg.cc/RVQh9ygv/vasily-koloda-8-Cq-Dv-Puo-k-I-unsplash.jpg",
  },
];
export default function NewsCard(): JSX.Element {
  const { user } = useContext(AuthContext);
  if (user) {
    console.log(user);
  }

  return (
    <News>
      {news.map((u) => {
        return (
          <>
            <div className="card">
              <img src={u.photo} alt={u.title} />
              <p key={u.id}>
                {u.title}
                <br />
                <span>
                  lire l&apos;article <ArrowRightAltIcon className="arrow" />
                </span>
              </p>
            </div>
            {u.id <= 2 && <Hr />}
          </>
        );
      })}
    </News>
  );
}
