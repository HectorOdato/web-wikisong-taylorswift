import {taylorImages} from "../assets/images/imgcardsalbum.jsx";
import { taylorBanners } from "../assets/images/imgbanners.jsx";
import { gradientClasses } from "../components/layout/PageBackground.jsx";
import {descriptions}  from "../pages/AlbumPage/data/descriptionalbum.js"
import {logosAlbums} from "../assets/images/logos.jsx";
import ttpdsong from "./songs/ttpd.json";
import song from "./songs/1989.json";
import debugsong from "./songs/debug.json";
import fearlesssong from "./songs/fearless.json";
import folkloresong from "./songs/folklore.json";
import loversong from "./songs/lover.json";
import repsong from "./songs/reputation.json";
import speaknow from "./songs/speakNow.json"
import midnights from "./songs/midnights.json"
import evermore from "./songs/evermore.json"
import tloas from "./songs/tloas.json"
import redsong from "./songs/red.json"

const albums = [
  {
    id: "taylor_swift",
    title: "Taylor Swift",
    año: 2006,
    imglogo: logosAlbums.taylorSwift,
    imgcard: taylorImages.debut,
    banner: taylorBanners.debut,
    background: gradientClasses.debut,
    descripcion: descriptions.debut,
    songs: debugsong,
  },
  {
    id: "fearless",
    title: "Fearless",
    año: 2008,
    imglogo: logosAlbums.fearless,
    banner: taylorBanners.fearless,
    imgcard: taylorImages.fearless,
    background: gradientClasses.fearless,
    descripcion: descriptions.fearless,
    songs: fearlesssong,
  },
  {
    id: "speak_now",
    title: "Speak Now",
    año: 2010,
    imglogo: logosAlbums.speakNow,
    banner: taylorBanners.speakNow,
    imgcard: taylorImages.speakNow,
    background: gradientClasses.speakNow,
    descripcion: descriptions.speakNow,
    songs: speaknow,
  },
  {
    id: "red",
    title: "Red",
    año: 2012,
    imglogo: logosAlbums.red,
    imgcard: taylorImages.red,
    banner: taylorBanners.red,
    background: gradientClasses.red,
    descripcion: descriptions.red,
    songs: redsong,
  },
  {
    id: "1989",
    title: "1989",
    imglogo: logosAlbums.img1989,
    año: 2014,
    imgcard: taylorImages._1989,
    banner: taylorBanners._1989,
    background: gradientClasses.nineteenEightyNine,
    descripcion: descriptions.nineteenEightyNine,
    songs: song,
  },
  {
    id: "reputation",
    title: "Reputation",
    año: 2017,
    imglogo: logosAlbums.reputation,
    imgcard: taylorImages.reputation,
    banner: taylorBanners.reputation,
    background: gradientClasses.reputation,
    descripcion: descriptions.reputation,
    songs: repsong,
  },
  {
    id: "lover",
    title: "Lover",
    año: 2019,
    imglogo: logosAlbums.lover,
    imgcard: taylorImages.lover,
    banner: taylorBanners.lover,
    background: gradientClasses.lover,
    descripcion: descriptions.lover,
    songs: loversong,
  },
  {
    id: "folklore",
    title: "Folklore",
    año: 2020,
    imglogo: logosAlbums.folklore,
    imgcard: taylorImages.folklore,
    banner: taylorBanners.folklore,
    background: gradientClasses.folklore,
    descripcion: descriptions.folklore,
    songs: folkloresong,
  },
  {
    id: "evermore",
    title: "Evermore",
    año: 2020,
    imglogo: logosAlbums.evermore,
    imgcard: taylorImages.evermore,
    banner: taylorBanners.evermore,
    background: gradientClasses.evermore,
    descripcion: descriptions.evermore,
    songs: evermore,
  },
  {
    id: "midnights",
    title: "Midnights",
    año: 2022,
    imglogo: logosAlbums.midnights,
    imgcard: taylorImages.midnights,
    banner: taylorBanners.midnights,
    background: gradientClasses.midnights,
    descripcion: descriptions.midnights,
    songs: midnights,
  },
  {
    id: "the_tortured_poets_department",
    title: "The Tortured Poets Department",
    año: 2024,
    imglogo: logosAlbums.theTorturedPoetsDepartment,
    imgcard: taylorImages.theTorturedPoetsDepartment,
    banner: taylorBanners.torturedPoets,
    background: gradientClasses.theTorturedPoetsDepartment,
    descripcion: descriptions.torturedPoetsDepartment,
    songs: ttpdsong,
  },
  {
    id: "the_life_of_a_showgirl",
    title: "The Life of a Showgirl",
    año: 2025,
    imglogo: logosAlbums.theLifeOfAShowgirl,
    imgcard: taylorImages.thelifeofshowgirl,
    banner: taylorBanners.thelifeofashowgirl,
    background: gradientClasses.lifeOfAShowgirl,
    descripcion: descriptions.lifeOfAShowgirl,
    songs: tloas,
  },
];


export default albums;