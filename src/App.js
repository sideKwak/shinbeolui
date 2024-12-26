import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import DetailsPage from './components/DetailsPage';
import { importAllImages } from './util/importImage';
import './App.css';

const images = importAllImages(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const games = [
  {
    image: images['blackdesert'],
    title: '검은사막',
    description: '검은사막 공식사이트 공지사항과 업데이트 및 이벤트 정보 크롤링',
  },
  {
    image: images['lostark'],
    title: '로스트아크',
    description: '로스트아크 공식사이트 공지사항과 업데이트 및 이벤트 정보 크롤링',
  },
  {
    image: images['first'],
    title: '퍼스트 디센던트',
    description: '퍼스트 디센던트 공식사이트 공지사항과 업데이트 및 이벤트 정보 크롤링',
  },
  {
    image: images['dekaron'],
    title: '데카론',
    description: '데카론 공식사이트 공지사항과 업데이트 및 이벤트 정보 크롤링',
  },
  {
    image: images['battle'],
    title: '배틀그라운드',
    description: '배틀그라운드 공식사이트 공지사항과 업데이트 및 이벤트 정보 크롤링',
  },
  {
    image: images['poe2'],
    title: '패스 오브 엑자일2',
    description: 'POE2 공식사이트 공지사항과 업데이트 및 이벤트 정보 크롤링',
  },
];

function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleMoreClick = (game) => {
    setSelectedGame(game);
  };

  const handleBackClick = () => {
    setSelectedGame(null);
  };

  return (
    <div>
      <Header />
      {selectedGame ? (
        <DetailsPage game={selectedGame} onBack={handleBackClick} />
      ) : (
        <div className="container mx-auto py-8 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {games.map((game, index) => (
              <Card
                key={index}
                image={game.image}
                title={game.title}
                description={game.description}
                onMoreClick={() => handleMoreClick(game)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;