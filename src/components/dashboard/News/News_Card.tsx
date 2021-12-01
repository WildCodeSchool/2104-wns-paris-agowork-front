import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { News } from "../../../assets/styles/dashboard/News";
import { Hr } from "../../../assets/styles/dashboard/Dashboard";

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
  return (
    <News>
      {news.map((u) => {
        return (
          <div key={u.id}>
            <div className="card">
              <img src={u.photo} alt={u.title} />
              <p>
                {u.title}
                <br />
                <span>
                  lire l&apos;article <ArrowRightAltIcon className="arrow" />
                </span>
              </p>
            </div>
            {u.id <= 2 && <Hr />}
          </div>
        );
      })}
    </News>
  );
}