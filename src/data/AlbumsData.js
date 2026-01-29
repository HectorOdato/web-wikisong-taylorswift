import { taylorSwiftImg, fearlessImg, speakNowImg, redImg, img1989, reputationImg, loverImg, folkloreImg, evermoreImg, midnightsImg, theTorturedPoetsDepartmentImg, theLifeOfAShowgirlImg } from "../assets/images/img.jsx";
import { imgdebutbanner, imgfearlessbanner, imgspeaknowbanner, imgredbanner, img1989banner, imgreputationbanner, imgloverbanner, imgfolklorebanner, imgevermorebanner, imgmidnightsbanner, imgtorturedpoetsbanner, imglifeofashowgirlbanner } from "../assets/images/imgbanners.jsx";
import { gradientClasses } from "../components/layout/PageBackground.jsx";
import {descriptions}  from "./descriptionalbum.js"
import {logosAlbums} from "../assets/images/logos.jsx";
import ttpdsong from "./Songs/Ttpd.json";
import song from "./Songs/1989.json";
import debugsong from "./Songs/Debug.json";
import fearlesssong from "./Songs/Fearless.json";
import folkloresong from "./Songs/Folklore.json";
import loversong from "./Songs/Lover.json";
import repsong from "./Songs/REP.json";

const albums = [
  {
    id: "taylor_swift",
    title: "Taylor Swift",
    año: 2006,
    imglogo: logosAlbums.debut,
    img: taylorSwiftImg,
    banner: imgdebutbanner,
    background: gradientClasses.debut,
    descripcion: descriptions.debut,
    songs: debugsong,
  },
  {
    id: "fearless",
    title: "Fearless",
    año: 2008,
    imglogo: logosAlbums.fearless,
    banner: imgfearlessbanner,
    img: fearlessImg,
    background: gradientClasses.fearless,
    descripcion: descriptions.fearless,
    songs: fearlesssong,
  },
  {
    id: "speak_now",
    title: "Speak Now",
    año: 2010,
    imglogo: logosAlbums.speaknow,
    banner: imgspeaknowbanner,
    img: speakNowImg,
    background: gradientClasses.speakNow,
    descripcion: descriptions.speakNow,
    songs: ["Mine", "Sparks Fly", "Back to December", "Innocent", "Enchanted", "Better Than Revenge", "Haunted", "Last Kiss", "Long Live", "Dear John"],
  },
  {
    id: "red",
    title: "Red",
    año: 2012,
    imglogo: logosAlbums.red,
    img: redImg,
    banner: imgredbanner,
    background: gradientClasses.red,
    descripcion: descriptions.red,
    songs: ["State of Grace", "Treacherous", "I Knew You Were Trouble", "All Too Well", "22", "I Almost Do", "We Are Never Getting Back Together", "Stay Stay Stay", "The Last Time", "Begin Again"],
  },
  {
    id: "1989",
    title: "1989",
    imglogo: logosAlbums.img1989,
    año: 2014,
    img: img1989,
    banner: img1989banner,
    background: gradientClasses.nineteenEightyNine,
    descripcion: descriptions.nineteenEightyNine,
    songs: song,
  },
  {
    id: "reputation",
    title: "Reputation",
    año: 2017,
    imglogo: logosAlbums.reputation,
    img: reputationImg,
    banner: imgreputationbanner,
    background: gradientClasses.reputation,
    descripcion: descriptions.reputation,
    songs: repsong,
  },
  {
    id: "lover",
    title: "Lover",
    año: 2019,
    imglogo: logosAlbums.lover,
    img: loverImg,
    banner: imgloverbanner,
    background: gradientClasses.lover,
    descripcion: descriptions.lover,
    songs: loversong,
  },
  {
    id: "folklore",
    title: "Folklore",
    año: 2020,
    imglogo: logosAlbums.folklore,
    img: folkloreImg,
    banner: imgfolklorebanner,
    background: gradientClasses.folklore,
    descripcion: descriptions.folklore,
    songs: folkloresong,
  },
  {
    id: "evermore",
    title: "Evermore",
    año: 2020,
    imglogo: logosAlbums.evermore,
    img: evermoreImg,
    banner: imgevermorebanner,
    background: gradientClasses.evermore,
    descripcion: descriptions.evermore,
    songs: ["willow", "coney island", "no body, no crime", "coney island", "ivy", "cowboy like me", "long story short", "marjorie", "closure", "evermore"],
  },
  {
    id: "midnights",
    title: "Midnights",
    año: 2022,
    imglogo: logosAlbums.midnights,
    img: midnightsImg,
    banner: imgmidnightsbanner,
    background: gradientClasses.midnights,
    descripcion: descriptions.midnights,
    songs: ["Midnights", "Lavender Haze", "Anti-Hero", "Snow on the Beach", "You're On Your Own, Kid", "Midnight Rain", "Question...?", "Vigilante Sh*t", "Bejeweled", "Maroon"],
  },
  {
    id: "the_tortured_poets_department",
    title: "The Tortured Poets Department",
    año: 2024,
    imglogo: logosAlbums.theTorturedPoetsDepartment,
    img: theTorturedPoetsDepartmentImg,
    banner: imgtorturedpoetsbanner,
    background: gradientClasses.theTorturedPoetsDepartment,
    descripcion: descriptions.theTorturedPoetsDepartment,
    songs: ttpdsong,
  },
  {
    id: "the_life_of_a_showgirl",
    title: "The Life of a Showgirl",
    año: 2025,
    imglogo: logosAlbums.theLifeOfAShowgirl,
    img: theLifeOfAShowgirlImg,
    banner: imglifeofashowgirlbanner,
    background: gradientClasses.lifeOfAShowgirl,
    descripcion: descriptions.theLifeOfAShowgirl,
    songs: ["Spotlight", "Center Stage", "Encore", "Curtain Call", "Backstage Secrets", "Standing Ovation", "Dressed to Impress", "The Grand Finale", "Encore (Reprise)", "The Show Must Go On"],
  },
];


export default albums;