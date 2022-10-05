import React from "react";
import On from "../../assets/images/themeOn.svg";
import Off from "../../assets/images/themeOff.svg";
import { Icone } from "../UI";

const claro = <Icone src={On} />
const escuro = <Icone src={Off} />

export default({tema}) => (tema ? escuro : claro);