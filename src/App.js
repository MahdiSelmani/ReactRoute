import './App.css';
import Navbare from './components/Navbar';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import OurTours from './components/OurTours';
import AddNewTour from './components/AddNewTour';
import { useState } from 'react';
import Details from './components/Details';
function App() {
  const [word, setWord] = useState('')

  const [tour, setTour] = useState([
    {id : 0 ,name: 'Paris', info :`La tour Eiffel Écouter est une tour de fer puddlé de 324 mètres de hauteur (avec antennes)o 1 située à Paris, à l’extrémité nord-ouest du parc du Champ-de-Mars en bordure de la Seine dans le 7e arrondissement. Son adresse officielle est 5, avenue Anatole-France.

    Construite en deux ans par Gustave Eiffel et ses collaborateurs pour l'Exposition universelle de Paris de 1889, célébrant le centenaire de la Révolution française, et initialement nommée « tour de 300 mètres », elle est devenue le symbole de la capitale française et un site touristique de premier plan : il s’agit du troisième site culturel français payant le plus visité en 2015, avec 5,9 millions de visiteurs en 20162. Depuis son ouverture au public, elle a accueilli plus de 300 millions de visiteurs3.
    
    D’une hauteur de 312 mètreso 1 à l’origine, la tour Eiffel est restée le monument le plus élevé du monde pendant quarante ans. Le second niveau du troisième étage, appelé parfois quatrième étage, situé à 279,11 mètres, est la plus haute plateforme d'observation accessible au public de l'Union européenne et la deuxième plus haute d'Europe, derrière la tour Ostankino à Moscou culminant à 337 mètres. La hauteur de la tour a été plusieurs fois augmentée par l’installation de nombreuses antennes. Utilisée dans le passé pour de nombreuses expériences scientifiques, elle sert aujourd’hui d’émetteur de programmes radiophoniques et télévisés.` , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1XoCsbpBZsSqBnQE-meMaqsImpEINWtCMD0YkBTMRDBrj1yAcDz2QFcAMTVEKQsWRFo&usqp=CAU', price:'1300', read: false },
    
    
    { id: 1, name: 'Espagne', info: `Le temple de la Sagrada Familia en Espagne est une œuvre étonnante du modernisme catalan, qui s'inspire de la nature. La façade représentant la passion du Christ donne ainsi l'effet d'une fourmilière géante, tandis que ses tours sont ornées de coupes de fruits colorés. Son architecte, Antoni Gaudi, commence sa construction en 1882, mais n'en verra pas l'achèvement. Décédé en 1926, il est enterré dans la crypte. D'autres architectes ont pris la relève selon ses plans. La Sagrada Familia devrait être terminée en 2026 pour le centenaire de la mort de l'architecte.`, image: 'https://www.challenges.fr/assets/img/2021/08/10/cover-r4x3w1000-611276ee45b20-19investir-immobilier-espagne.jpg', price: '1400', read: false },
    { id : 2, name : "Tour Bridge" , info : `Le Tower Bridge (en français : « pont de la Tour ») est un pont basculant britannique situé à Londres et permettant notamment le passage de la Tamise aux véhicules motorisés.

    Il appartient à la classe des ponts suspendus et est composé de granite pour sa façade, d'acier pour sa structure et de béton pour ses fondations. Il est situé entre les arrondissements ("boroughs") de Southwark et de Tower Hamlets, près de la tour de Londres dont il tire son nom. Il est l'un des quatre ponts gérés par les services du lord-maire. Le Tower Bridge est situé dans la Pool of London, marquant la limite entre l'Upper Pool en amont et la Lower Pool en aval.
    
    Au moment de sa construction, le Tower Bridge est le plus grand (246 mètres de longueur et 65 mètres de hauteur) et le plus sophistiqué des ponts basculants jamais construits. Le pont est célèbre dans le monde entier grâce à son architecture très particulière, de style néogothique. Il est composé de deux grandes tours, d'une suspension rigide, d'un tablier s'ouvrant au passage des navires les plus hauts et, au sommet, de deux passerelles piétonnes parallèles. Les machineries du pont ouvrant sont ouvertes au public depuis 1982 sous forme de musée présentant le fonctionnement du mécanisme hydraulique qui permet depuis 1894 (date de la construction du pont par Sir John Wolfe-Barry et Horace Jones) de soulever le pont à bascule.`, image: 'https://www.goldentours.com/siteimg/products/123558.jpg', price :' 1200'}
    
    
    ]);

  return (
    <div className="App">
      <Navbare tour={tour} setWord={setWord} />

      <Route exact path='/' component={Home}></Route>
      <Route path='/OurTours' render={()=><OurTours tour={tour} setTour={setTour} word = {word}/>}></Route>
      <Route path='/AddNewTour' render={() => <AddNewTour tour={tour} setTour={setTour} />}></Route>
      <Route path='/Details/:x' render={(props)=><Details tour={tour} {...props}></Details>}></Route>
    </div>
  );
  }

export default App;
